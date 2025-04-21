"use server";

import "server-only";
import { createHash } from "crypto";
import { headers } from "next/headers";
import { rateLimit } from "@/lib/utils";
import { contactFormSchema, tokenSchema } from "@/lib/validator";

/* eslint-disable-next-line typescript/no-explicit-any */
export async function submitContactForm(_prevState: any, data: FormData) {
 const formData = {
  email: data.get("email"),
  name: data.get("name"),
  message: data.get("message"),
 };

 const token = data.get("cf-turnstile-response");

 try {
  const h = await headers();
  const ip = h.get("x-forwarded-for") ?? "unknown";
  const isRateLimited = rateLimit(ip);

  if (isRateLimited) return { error: "You are sending messages too frequently!" };

  if (process.env.NEXT_PUBLIC_CAPTCHA_SITEKEY && process.env.CAPTCHA_SECRET) {
   const tokenResult = tokenSchema.safeParse(token);
   if (!tokenResult.success) return { error: "Invalid captcha! Please try again." };

   const verifyCaptchaRequest = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    body: JSON.stringify({
     secret: process.env.CAPTCHA_SECRET,
     response: tokenResult.data,
     remoteip: ip,
    }),
    method: "POST",
    headers: {
     "Content-Type": "application/json",
    },
   });

   const outcome = await verifyCaptchaRequest.json();

   if (!outcome.success) return { error: "Invalid captcha! Please try again." };
  }

  const result = contactFormSchema.safeParse(formData);

  if (!result.success) {
   const errors = result.error.flatten().fieldErrors;
   return { error: Object.values(errors).flat().join(" ") };
  }

  const { name, email, message } = result.data;
  const hash = createHash("sha256").update(email.trim()).digest("hex");

  const embed = {
   title: "📩 New message from Rajesh's Portfolio",
   url: "https://rajeshyarra.vercel.app",
   description: `>>> ${message.trim()}`,
   color: 5759645,
   fields: [
    {
     name: "🧑‍🦱 Name",
     value: `\`\`\`${name.trim()}\`\`\``,
     inline: true,
    },
    {
     name: "📨 Email",
     value: `\`\`\`${email.trim()}\`\`\``,
     inline: true,
    },
   ],
   footer: {
    text: "Rajesh's Portfolio",
    icon_url: `https://www.gravatar.com/avatar/${hash}?d=identicon`,
   },
   timestamp: new Date().toISOString(),
  };

  const response = await fetch(`${process.env.DISCORD_WEBHOOK_URL}?wait=true`, {
   method: "POST",
   headers: { "Content-Type": "application/json" },
   body: JSON.stringify({
    username: "Rajesh's Portfolio",
    avatar_url: "https://rajeshyarra.vercel.app/assets/avatar.png",
    embeds: [embed],
   }),
  });

  const data = await response.json();

  if (!data.id) return { error: "Unable to send message" };
  return { message: "Your message has been sent successfully!" };
 } catch (_error) {
  return { error: "Unable to send message" };
 }
}
