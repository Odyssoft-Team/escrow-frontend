"use client";

import { Button } from "./ui/button";
import { FaBell } from "react-icons/fa";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { CgLogOut } from "react-icons/cg";
import MenuDesktop from "./MenuDesktop";
import { useAuthStore } from "@/store/auth.store";
import { useRouter } from "next/navigation";

export default function Header() {
  const { userLoggedIn, setUserLoggedIn } = useAuthStore();
  const router = useRouter();

  const handleLogout = async () => {
    const response = await fetch("/api/logout", {
      method: "GET",
    });

    const data = await response.json();

    if (data.status) {
      setUserLoggedIn(null);
      router.push("/login");
    }
  };
  return (
    <header className="w-full p-4 flex items-center justify-end gap-3 fixed top-0 z-5 sm:p-6 xl:relative xl:bg-white xl:py-4 xl:justify-between xl:border-b">
      <MenuDesktop />
      <div className="flex items-center gap-3">
        <Button className="size-8 p-0 rounded-full bg-gray-200 text-black">
          <FaBell className="size-4" />
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="h-auto p-0 hover:bg-transparent shadow-md shadow-primary rounded-full"
            >
              <Avatar className="bg-primary text-white size-9">
                <AvatarFallback className="size-full bg-primary text-white font-bold text-md uppercase">
                  {userLoggedIn?.user_first_name?.charAt(0)}
                </AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="max-w-64" align="end" sideOffset={10}>
            <DropdownMenuLabel className="flex min-w-0 flex-col">
              <span className="text-foreground truncate text-sm font-medium">
                {userLoggedIn?.user_first_name} {userLoggedIn?.user_last_name}
              </span>
              <span className="text-muted-foreground truncate text-xs font-normal">
                {userLoggedIn?.user_email}
              </span>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem onClick={handleLogout}>
                <CgLogOut size={16} className="opacity-60" aria-hidden="true" />
                <span>Logout</span>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
