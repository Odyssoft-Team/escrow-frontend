"use client";

import { Button } from "./ui/button";
import { FaBell } from "react-icons/fa";
import { Avatar, AvatarFallback } from "./ui/avatar";
import MenuDesktop from "./MenuDesktop";
import { useAuthStore } from "@/store/auth.store";
import Link from "next/link";

export default function Header() {
  const { userLoggedIn } = useAuthStore();
  return (
    <header className="w-full p-4 flex items-center justify-end gap-3 fixed top-0 z-5 sm:p-6 xl:relative xl:bg-white xl:py-4 xl:justify-between xl:border-b">
      <MenuDesktop />
      <div className="flex items-center gap-3">
        <Button className="size-8 p-0 rounded-full bg-gray-200 text-black">
          <FaBell className="size-4" />
        </Button>

        <Link
          href={"/profile"}
          className="h-auto p-0 hover:bg-transparent shadow-md shadow-primary rounded-full"
        >
          <Avatar className="bg-primary text-white size-9">
            <AvatarFallback className="size-full bg-primary text-white font-bold text-md uppercase">
              {userLoggedIn?.user_first_name?.charAt(0)}
            </AvatarFallback>
          </Avatar>
        </Link>
      </div>
    </header>
  );
}
