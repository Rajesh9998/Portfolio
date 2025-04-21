"use client";

import Link from "@/components/ui/Link";

export default function Logo() {
  return (
    <Link href="/" className="-ml-4 text-lg font-black text-neutral-800 duration-300 motion-reduce:transition-none dark:text-white">
      RY
      <span className="text-fill-transparent bg-linear-to-r from-[#6310ff] to-[#14291ff] box-decoration-clone bg-clip-text dark:from-[#a2facf] dark:to-[#64acff]">.</span>
    </Link>
  );
} 