"use client";

import { useState } from "react";
import { Button, buttonVariants } from "@/components/ui/Button";
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/Drawer";
import { Icons } from "@/components/ui/Icons";
import Link from "@/components/ui/Link";
import { nav } from "@/config/navigation";
import { cn } from "@/lib/utils";

export default function MobileNavigationClient() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const menuItems = [...nav.main, ...nav.mobile];

  return (
    <Drawer shouldScaleBackground={false} direction="left" open={isMenuOpen} onOpenChange={() => setIsMenuOpen(!isMenuOpen)}>
      <DrawerTrigger aria-label="Open navigation" className={cn(buttonVariants({ variant: "secondary" }), "size-10 justify-center border-0 bg-transparent! outline-hidden! hover:bg-neutral-300! lg:hidden dark:hover:bg-white/15!")}>
        <Icons.AlignLeft className="size-5 shrink-0 text-neutral-900 dark:text-neutral-100" />
      </DrawerTrigger>

      <DrawerContent variant="left">
        <DrawerHeader>
          <DrawerTitle className="sr-only">Menu</DrawerTitle>
          <DrawerDescription className="sr-only">All navigation links. Press tab to cycle through links.</DrawerDescription>
        </DrawerHeader>
        <div className="mt-3 flex flex-col gap-2">
          {menuItems.map((item) => {
            const isTalkToMe = item.title === "Talk to me";
            return (
              <Button 
                variant={isTalkToMe ? "primary" : "secondary"} 
                key={item.href} 
                asChild 
                className={cn("w-full", isTalkToMe && "bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800")}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Link href={item.href} target={item.target}>
                  <span className="flex items-center gap-2">
                    {isTalkToMe && <Icons.Bot className="size-4" />}
                    {item.title}
                  </span>
                </Link>
              </Button>
            );
          })}
        </div>
      </DrawerContent>
    </Drawer>
  );
} 