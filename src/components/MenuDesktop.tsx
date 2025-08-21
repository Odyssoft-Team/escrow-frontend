"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBuilding, FaFileAlt, FaHome, FaUser } from "react-icons/fa";
import { HiCurrencyDollar } from "react-icons/hi2";

export default function MenuDesktop() {
  const path = usePathname();

  return (
    <div className="hidden bg-white xl:flex items-center justify-around w-full">
      <Link
        href="/home"
        className={cn(
          "flex items-center gap-2",
          path === "/home" ? "text-primary" : "text-content"
        )}
      >
        <FaHome className="size-5" />
        <span className="text-base font-semibold leading-[1]">Home</span>
      </Link>

      <Link
        href="/properties"
        className={cn(
          "flex items-center gap-2",
          path === "/properties" ? "text-primary" : "text-content"
        )}
      >
        <FaBuilding className="size-5" />
        <span className="text-base font-semibold leading-[1]">Properties</span>
      </Link>

      <Link
        href="/contracts"
        className={cn(
          "flex items-center gap-2",
          path === "/contracts" ? "text-primary" : "text-content"
        )}
      >
        <FaFileAlt className="size-5" />
        <span className="text-base font-semibold leading-[1]">Contracts</span>
      </Link>

      <Link
        href="/escrow"
        className={cn(
          "flex items-center gap-2",
          path === "/escrow" ? "text-primary" : "text-content"
        )}
      >
        <HiCurrencyDollar className="size-5" />
        <span className="text-base font-semibold leading-[1]">Escrow</span>
      </Link>

      <Link
        href="/profile"
        className={cn(
          "flex items-center gap-2",
          path === "/profile" ? "text-primary" : "text-content"
        )}
      >
        <FaUser className="size-5" />
        <span className="text-base font-semibold leading-[1]">Profile</span>
      </Link>
    </div>
  );
}
