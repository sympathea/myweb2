"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MobileMenu } from "./MobileMenu";
import { SignedIn, SignedOut, SignUpButton, UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";

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
    name: "Message",
    href: "/message",
  },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="grid grid-flow-col grid-cols-4 px-4 py-5 mx-auto max-w-7xl md:px-8">
      <div className="col-span-1 ">
        <Link href="/">
          <h1 className="hidden text-2xl font-semibold sm:block">Zephyr Lin</h1>
        </Link>
        <div className="sm:hidden">
          <MobileMenu />
        </div>
      </div>

      <div className="items-center justify-center hidden col-span-2 space-x-10 sm:flex">
        {navigationItems.map((item) => {
          return (
            <Link
              href={item.href}
              key={item.name}
              className={`p-2 ${
                pathname == item.href ? "rounded-xl font-bold bg-zinc-50" : ""
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </div>

      <div className="flex items-center justify-end col-start-4">
        <SignedOut>
          {/* <SignInButton mode="modal">
            <Button>Sign In</Button>
          </SignInButton> */}
          <SignUpButton mode="modal" forceRedirectUrl={pathname}>
            <Button>Sign Up</Button>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
