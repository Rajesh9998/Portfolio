import type { Header, Meta } from "@/lib/types";

export const meta = {
 title: "RAJESH YARRA - Generative AI Engineer & Developer",
 description: "I'm a Generative AI engineer specializing in LLMs, RAG, and intelligent systems. Passionate about building AI-powered applications that solve real-world problems.",
 shortDescription: "Generative AI, LLMs, and Intelligent Systems Developer",
 keywords: ["Generative AI", "LLMs", "RAG", "Python", "AI Projects", "Automation", "Cybersecurity", "Full Stack", "Java", "Intern", "Student", "Portfolio"],
 //url: process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : `http://localhost:${process.env.PORT || 3000}`,
 url: "https://github.com/Rajesh9998",
 accounts: {
  github: {
   username: "Rajesh9998",
   repo: "portfolio",
  },
  twitter: {
   username: "",
  },
  discord: {
   username: "",
   invite: "",
   id: "",
  },
 },
} satisfies Meta;

export const header = {
 title: "Rajesh Yarra",
 description: meta.description,
} satisfies Header;
