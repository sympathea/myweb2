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

  return (
    <header className="grid grid-flow-col grid-cols-4 px-4 py-5 mx-auto max-w-7xl md:px-8">
      <div className="col-span-1 ">
        <Link href="/">
          <h1 className="hidden text-2xl font-semibold sm:block">Zephyr Lin</h1>
        </Link>
        <div className="sm:hidden">
          <MobileMenu />
        </div>
      </div>

      <ul className="items-center justify-center hidden col-span-2 space-x-10 sm:flex">
        {navigationItems.map((item) => {
          return (
            <motion.li
              whileHover={{ letterSpacing: "1px" }}
              key={item.name}
              className={`p-2 ${
                pathname == item.href
                  ? " font-black text-sky-600"
                  : "font-semibold"
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
