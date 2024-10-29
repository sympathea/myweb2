"use client";

import Image from "next/image";
import Link from "next/link";
import { MobileMenu } from "./MobileMenu";
import avatarImg from "@/public/images/home/avatar.png";

export default function Avatar({ page }) {
  return (
    <div className="flex items-end justify-start col-span-1">
      <Link href="/">
        {/* <div className="hidden text-2xl font-semibold rounded-full opacity-50 sm:flex sm:justify-center sm:items-center hover:opacity-90 ">
            ZL
          </div> */}

        <div className="flex flex-col items-start justify-end">
          <Image
            src={avatarImg}
            width={60}
            alt="avatar"
            className={`duration-1000 rounded-full opacity-60 hover:opacity-90 ${page == "/" ? "scale-150 translate-y-20 " : ""}`}
            unoptimized
          />
        </div>
      </Link>

      {/* <div className="sm:hidden">
        <MobileMenu />
      </div> */}
    </div>
  );
}
