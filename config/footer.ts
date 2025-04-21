import { meta } from "@/config/metadata";

export const footer = {
 categories: [
  {
   title: "Important Links",
   links: [
    {
     title: "Home",
     href: "/",
    },
    {
     title: "My work",
     href: "/work",
    },
    {
     title: "Blog",
     href: "/blog",
    },
   ],
  },
  {
   title: "Social",
   links: [
    {
     title: "Github",
     href: `https://github.com/${meta.accounts.github.username}`,
     target: "_blank",
    },
    {
     title: "LinkedIn",
     href: `https://www.linkedin.com/in/rajesh-yarra-850b40254`,
     target: "_blank",
    },
    {
     title: "Discord",
     href: `https://discord.com/users/rajesh9998`,
     target: "_blank",
    },
   ],
  },
  {
   title: "Other",
   links: [
    {
     title: "Research",
     href: "/research",
    },
    {
     title: "Contact",
     href: "/contact",
    },
   ],
  },
 ],
};
