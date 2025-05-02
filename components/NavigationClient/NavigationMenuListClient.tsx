"use client";

import { usePathname } from "next/navigation";
import { NavigationMenuLink, NavigationMenuList, NavigationMenuItem, navigationMenuTriggerStyle, NavigationMenuContent, NavigationMenuTrigger } from "@/components/ui/NavigationMenu";
import Link from "@/components/ui/Link";
import { nav } from "@/config/navigation";
import { Icons } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";

function NavigationItem({ path, text }: { path: string; text: string }) {
  const pathname = usePathname() || "/";
  const isActive = pathname.split("/")[1].trim() === path.split("/")[1].trim();
  const isTalkToMe = text === "Talk to me";

  return (
    <NavigationMenuItem>
      <NavigationMenuLink asChild active={isActive} className={navigationMenuTriggerStyle()}>
        <Link href={path} className={isTalkToMe ? "flex items-center gap-1 font-medium text-blue-600 dark:text-blue-400" : ""}>
          {isTalkToMe && <Icons.Bot className="size-4" />}
          {text}
        </Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
}

function NavigationPopoverItem({ className, title, children, iconName, iconStyles, ...props }: React.ComponentPropsWithoutRef<typeof Link> & { iconName: keyof typeof Icons; iconStyles?: string }) {
  const Icon = Icons[iconName] as React.ElementType;
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link className={cn("flex w-full items-center rounded-md p-3 leading-none outline-hidden transition-colors select-none hover:bg-black/10 focus:bg-black/10 dark:hover:bg-white/5 dark:focus:bg-white/5", className)} {...props}>
          <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-black/10 text-white sm:size-12 dark:bg-white/10 dark:text-neutral-800">
            <Icon className={cn("inline size-6 stroke-black duration-200 motion-reduce:transition-none dark:stroke-white/70", iconStyles || "")} />
          </div>
          <div className="ml-3 space-y-1 text-sm">
            <div className="leading-none font-medium text-neutral-900 dark:text-white">{title}</div>
            <p className="text-neutral-500 dark:text-neutral-400">{children}</p>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

function MorePopover() {
  const popover = nav.popovers[0];
  
  if (!popover) return null;
  
  return (
    <NavigationMenuItem id="more-menu">
      <NavigationMenuTrigger>
        {popover.title}
      </NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="w-[384px] space-y-1 p-2">
          {popover.components.map((component, idx) => (
            <NavigationPopoverItem 
              key={`more-item-${idx}`}
              href={component.href} 
              title={component.title} 
              iconName={component.icon} 
              iconStyles={component.iconStyles}
            >
              {component.description}
            </NavigationPopoverItem>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}

export default function NavigationMenuListClient() {
  return (
    <NavigationMenuList className="hidden lg:inline-flex">
      {nav.main
        .filter(item => item.title !== "Talk to me")
        .map((item) => (
          <NavigationItem path={item.href} text={item.title} key={`nav-left-${item.href}`} />
        ))}
      <MorePopover />
    </NavigationMenuList>
  );
} 