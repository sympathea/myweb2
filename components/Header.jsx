"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MobileMenu } from "./MobileMenu";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { UserPlus } from "lucide-react";
import { motion } from "framer-motion";

export const navigationItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Project",
    href: "/project",
  },
  {
    name: "Message",
    href: "/message",
  },
];

export default function Header() {
  const pathname = usePathname();
  const page = pathname.split("/").slice(0, 2).join("/");

  return (
    <header className="grid grid-flow-col grid-cols-4 px-4 py-5 mx-auto max-w-7xl md:px-8">
      <div className="flex items-center justify-start col-span-1">
        <Link href="/">
          <div className="hidden w-10 h-10 p-6 text-2xl font-semibold border-2 border-dashed rounded-full border-slate-700 sm:flex sm:justify-center sm:items-center">
            ZL
          </div>
        </Link>
        <div className="sm:hidden">
          <MobileMenu />
        </div>
      </div>

      <ul className="items-center justify-center hidden col-span-2 gap-5 sm:flex">
        {navigationItems.map((item) => {
          return (
            <motion.li
              whileHover={{ letterSpacing: "1px" }}
              key={item.name}
              className={`p-2 ${
                page == item.href ? "font-extrabold" : "font-normal"
              }`}
            >
              <Link href={item.href}>{item.name}</Link>
            </motion.li>
          );
        })}
      </ul>

      <div className="flex items-center justify-end col-start-4">
        <SignedOut>
          <SignInButton
            mode="modal"
            forceRedirectUrl={pathname}
            signUpForceRedirectUrl={pathname}
          >
            <Button variant="ghost" size="icon">
              <UserPlus />
            </Button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton afterSignOutUrl={pathname} />
        </SignedIn>
      </div>
    </header>
  );
}
