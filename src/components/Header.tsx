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
import { BoltIcon, Layers2Icon } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full p-4 flex items-center justify-end gap-3 fixed top-0">
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
              <AvatarFallback className="size-full bg-primary text-white font-bold text-md">
                J
              </AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="max-w-64" align="end" sideOffset={10}>
          <DropdownMenuLabel className="flex min-w-0 flex-col">
            <span className="text-foreground truncate text-sm font-medium">
              John Kennedy
            </span>
            <span className="text-muted-foreground truncate text-xs font-normal">
              j.kennedy@originui.com
            </span>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <BoltIcon size={16} className="opacity-60" aria-hidden="true" />
              <span>Option 1</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Layers2Icon
                size={16}
                className="opacity-60"
                aria-hidden="true"
              />
              <span>Option 2</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}
