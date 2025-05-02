"use client";

import React from "react";
import dynamic from "next/dynamic";
import { buttonVariants } from "@/components/ui/Button";
import { Icons } from "@/components/ui/Icons";
import Link from "@/components/ui/Link";
import { NavigationMenu } from "@/components/ui/NavigationMenu";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ThemeToggle";

// Dynamically import client-only components using default export approach
const MobileNavigationClient = dynamic(() => 
  import("@/components/NavigationClient/MobileNavigationClient"), 
  { ssr: false }
);

const NavigationMenuListClient = dynamic(() => 
  import("@/components/NavigationClient/NavigationMenuListClient"), 
  { ssr: false }
);

export function Navigation() {
  return (
    <nav className="sticky top-0 z-30 w-full border-b border-neutral-200 bg-white/75 backdrop-blur-lg dark:border-neutral-800 dark:bg-neutral-950/75">
      <div className="container flex h-14 items-center justify-between">
        <div className="mr-4 flex">
          <MobileNavigationClient />

          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Icons.Logo className="size-5 shrink-0" />
            <span className="font-medium text-neutral-900 dark:text-neutral-100">Rajesh Yarra</span>
          </Link>

          <NavigationMenu>
            <NavigationMenuListClient />
          </NavigationMenu>
        </div>

        <div className="flex gap-2">
          <Link
            target="_blank"
            href="https://rajeshs-ai-assistant.vercel.app/"
            className={cn(buttonVariants({ variant: "primary" }), "hidden sm:flex items-center gap-1")}
          >
            <Icons.Bot className="size-4" />
            <span>Talk to me</span>
          </Link>
          
          

          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
