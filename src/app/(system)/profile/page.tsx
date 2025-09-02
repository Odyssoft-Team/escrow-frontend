"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useAuthStore } from "@/store/auth.store";

import { FaSuitcase, FaUser } from "react-icons/fa";
import { LuUserRound, LuUserRoundPlus } from "react-icons/lu";

export default function ProfilePage() {
  const { userLoggedIn } = useAuthStore();
  return (
    <div className="bg-[#F7F8FA] px-4 flex flex-col gap-4 pb-[90px] pt-[20px]">
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-primary text-3xl leading-[1]">Profile</h1>
        <div className="w-full flex items-center justify-center gap-1 font-medium text-primary/70 text-sm relative">
          <Avatar className="bg-primary text-white size-32 overflow-visible shadow-[0px_0px_35px_5px_rgba(37,51,131,0.50)]">
            <AvatarFallback className="size-full bg-primary text-white font-bold text-5xl uppercase">
              {userLoggedIn?.user_first_name?.charAt(0)}
            </AvatarFallback>
            <span className="bg-amber-500 text-white px-4 py-1 rounded-full absolute right-0 bottom-0 text-xs capitalize">
              {userLoggedIn?.user_role}
            </span>
          </Avatar>
        </div>
        <div className="flex flex-col items-center gap-1 font-medium text-primary/70 text-sm my-6">
          <span className="text-primary px-4 py-1 rounded-full  font-bold text-3xl leading-[1] capitalize">
            {userLoggedIn?.user_first_name} {userLoggedIn?.user_last_name}
          </span>
          <span className="text-content font-normal text-lg px-4 py-1 rounded-full leading-[1]">
            {userLoggedIn?.user_email}
          </span>
        </div>
      </div>

      <div className="w-full rounded-3xl bg-white p-6 shadow-[24px_20px_135px_-31px_rgba(37,51,131,0.30)] flex flex-col gap-4">
        <h2 className="text-primary font-bold text-lg flex items-center gap-2">
          <FaUser /> Personal Information
        </h2>
        <div className="flex items-center gap-4 rounded-xl bg-primary/10 px-5 py-3 shadow-lg">
          <div className="flex items-center justify-center">
            <LuUserRound className="size-5 text-primary" />
          </div>
          <div className="flex flex-col gap-1 items-start leading-[1]">
            <span className="text-sm text-content">First Name</span>
            <span className="font-medium capitalize">
              {userLoggedIn?.user_first_name}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4 rounded-xl bg-primary/10 px-5 py-3 shadow-lg">
          <div className="flex items-center justify-center">
            <LuUserRoundPlus className="size-5 text-primary" />
          </div>
          <div className="flex flex-col gap-1 items-start leading-[1]">
            <span className="text-sm text-content">Last Name</span>
            <span className="font-medium capitalize">
              {userLoggedIn?.user_last_name}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4 rounded-xl bg-primary/10 px-5 py-3 shadow-lg">
          <div className="flex items-center justify-center">
            <FaSuitcase className="size-5 text-primary" />
          </div>
          <div className="flex flex-col gap-1 items-start leading-[1]">
            <span className="text-sm text-content">Role</span>
            <span className="font-medium capitalize">
              {userLoggedIn?.user_role}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
