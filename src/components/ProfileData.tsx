"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { formatToDateTime } from "@/lib/utils";
import { BsGearWideConnected, BsHash, BsPersonVcard } from "react-icons/bs";
import { CgLogOut } from "react-icons/cg";

import {
  FaHashtag,
  FaLocationArrow,
  FaPhoneAlt,
  FaRegMap,
  FaSuitcase,
  FaUser,
} from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import {
  LuCalendarClock,
  LuPhone,
  LuUserRound,
  LuUserRoundPlus,
} from "react-icons/lu";
import { MdAlternateEmail } from "react-icons/md";
import { PiCity, PiClockCounterClockwiseBold } from "react-icons/pi";

import { TiLocationArrowOutline } from "react-icons/ti";

import { useAuthStore } from "@/store/auth.store";
import { useRouter } from "next/navigation";

export default function ProfileData() {
  const { userLoggedIn, setUserLoggedIn } = useAuthStore();
  const router = useRouter();

  const handleLogout = async () => {
    const response = await fetch("/api/logout", {
      method: "GET",
    });

    const data = await response.json();

    if (data.status) {
      setUserLoggedIn(null);
      router.push("/home");
    }
  };

  if (!userLoggedIn) {
    return (
      <div className="flex items-center justify-center">
        <p>Loading Information...</p>
      </div>
    );
  }
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-primary text-3xl leading-[1]">Profile</h1>
        <div className="w-full flex items-center justify-center gap-1 font-medium text-primary/70 text-sm relative">
          <Avatar className="bg-primary text-white size-32 overflow-visible shadow-[0px_0px_35px_5px_rgba(37,51,131,0.50)]">
            <AvatarFallback className="size-full bg-primary text-white font-bold text-5xl uppercase">
              {userLoggedIn?.user_first_name?.charAt(0)}
            </AvatarFallback>
            <span className="bg-amber-500 text-white px-4 py-1 rounded-full absolute right-0 bottom-0 text-xs uppercase">
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

      <div className="w-full rounded-3xl bg-white p-6 shadow-[24px_20px_135px_-31px_rgba(37,51,131,0.30)] flex flex-col gap-4">
        <h2 className="text-blue-500 font-bold text-lg flex items-center gap-2">
          <FaPhoneAlt /> Contact Information
        </h2>
        <div className="flex items-center gap-4 rounded-xl bg-primary/10 px-5 py-3 shadow-lg">
          <div className="flex items-center justify-center">
            <IoIosMail className="size-5 text-primary" />
          </div>
          <div className="flex flex-col gap-1 items-start leading-[1]">
            <span className="text-sm text-content">Email Address</span>
            <span className="font-medium">{userLoggedIn?.user_email}</span>
          </div>
        </div>

        <div className="flex items-center gap-4 rounded-xl bg-primary/10 px-5 py-3 shadow-lg">
          <div className="flex items-center justify-center">
            <LuPhone className="size-5 text-primary" />
          </div>
          <div className="flex flex-col gap-1 items-start leading-[1]">
            <span className="text-sm text-content">Primary Phone</span>
            <span className="font-medium capitalize">
              {userLoggedIn?.user_phone1}
            </span>
          </div>
        </div>
      </div>

      <div className="w-full rounded-3xl bg-white p-6 shadow-[24px_20px_135px_-31px_rgba(37,51,131,0.30)] flex flex-col gap-4">
        <h2 className="text-green-500 font-bold text-lg flex items-center gap-2">
          <FaLocationArrow /> Address Information
        </h2>

        <div className="flex items-center gap-4 rounded-xl bg-primary/10 px-5 py-3 shadow-lg">
          <div className="flex items-center justify-center">
            <TiLocationArrowOutline className="size-5 text-primary" />
          </div>
          <div className="flex flex-col gap-1 items-start leading-[1]">
            <span className="text-sm text-content">Address Line 1</span>
            <span className="font-medium">{userLoggedIn?.user_address1}</span>
          </div>
        </div>

        <div className="flex items-center gap-4 rounded-xl bg-primary/10 px-5 py-3 shadow-lg">
          <div className="flex items-center justify-center">
            <TiLocationArrowOutline className="size-5 text-primary" />
          </div>
          <div className="flex flex-col gap-1 items-start leading-[1]">
            <span className="text-sm text-content">Address Line 2</span>
            <span className="font-medium">
              {userLoggedIn?.user_address2 || "-"}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4 rounded-xl bg-primary/10 px-5 py-3 shadow-lg">
          <div className="flex items-center justify-center">
            <PiCity className="size-5 text-primary" />
          </div>
          <div className="flex flex-col gap-1 items-start leading-[1]">
            <span className="text-sm text-content">City</span>
            <span className="font-medium">{userLoggedIn?.user_city}</span>
          </div>
        </div>

        <div className="flex items-center gap-4 rounded-xl bg-primary/10 px-5 py-3 shadow-lg">
          <div className="flex items-center justify-center">
            <FaRegMap className="size-5 text-primary" />
          </div>
          <div className="flex flex-col gap-1 items-start leading-[1]">
            <span className="text-sm text-content">State</span>
            <span className="font-medium">{userLoggedIn?.user_state}</span>
          </div>
        </div>

        <div className="flex items-center gap-4 rounded-xl bg-primary/10 px-5 py-3 shadow-lg">
          <div className="flex items-center justify-center">
            <FaHashtag className="size-5 text-primary" />
          </div>
          <div className="flex flex-col gap-1 items-start leading-[1]">
            <span className="text-sm text-content">Postal Code</span>
            <span className="font-medium">
              {userLoggedIn?.user_postal_code}
            </span>
          </div>
        </div>
      </div>

      <div className="w-full rounded-3xl bg-white p-6 shadow-[24px_20px_135px_-31px_rgba(37,51,131,0.30)] flex flex-col gap-4">
        <h2 className="text-purple-500 font-bold text-lg flex items-center gap-2">
          <FaSuitcase /> Professional Information
        </h2>

        <div className="flex items-center gap-4 rounded-xl bg-primary/10 px-5 py-3 shadow-lg">
          <div className="flex items-center justify-center">
            <BsPersonVcard className="size-5 text-primary" />
          </div>
          <div className="flex flex-col gap-1 items-start leading-[1]">
            <span className="text-sm text-content">License Number</span>
            <span className="font-medium">
              {userLoggedIn?.user_license || "-"}
            </span>
          </div>
        </div>
      </div>

      <div className="w-full rounded-3xl bg-white p-6 shadow-[24px_20px_135px_-31px_rgba(37,51,131,0.30)] flex flex-col gap-4">
        <h2 className="text-orange-500 font-bold text-lg flex items-center gap-2">
          <BsGearWideConnected /> Account Information
        </h2>

        <div className="flex items-center gap-4 rounded-xl bg-primary/10 px-5 py-3 shadow-lg">
          <div className="flex items-center justify-center">
            <MdAlternateEmail className="size-5 text-primary" />
          </div>
          <div className="flex flex-col gap-1 items-start leading-[1]">
            <span className="text-sm text-content">Username</span>
            <span className="font-medium">{userLoggedIn?.username || "-"}</span>
          </div>
        </div>

        <div className="flex items-center gap-4 rounded-xl bg-primary/10 px-5 py-3 shadow-lg">
          <div className="flex items-center justify-center">
            <BsHash className="size-5 text-primary" />
          </div>
          <div className="flex flex-col gap-1 items-start leading-[1]">
            <span className="text-sm text-content">User ID</span>
            <span className="font-medium">{userLoggedIn?.user_id || "-"}</span>
          </div>
        </div>

        <div className="flex items-center gap-4 rounded-xl bg-primary/10 px-5 py-3 shadow-lg">
          <div className="flex items-center justify-center">
            <LuCalendarClock className="size-5 text-primary" />
          </div>
          <div className="flex flex-col gap-1 items-start leading-[1]">
            <span className="text-sm text-content">Account Created</span>
            <span className="font-medium">
              {formatToDateTime(userLoggedIn?.created_at as string) || "-"}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4 rounded-xl bg-primary/10 px-5 py-3 shadow-lg">
          <div className="flex items-center justify-center">
            <PiClockCounterClockwiseBold className="size-5 text-primary" />
          </div>
          <div className="flex flex-col gap-1 items-start leading-[1]">
            <span className="text-sm text-content">Last Updated</span>
            <span className="font-medium">
              {formatToDateTime(userLoggedIn?.updated_at as string) || "-"}
            </span>
          </div>
        </div>
      </div>

      <div className="w-full flex items-center justify-center mt-4">
        <Button
          className="w-full h-12 text-base bg-[#FE4237]"
          onClick={handleLogout}
        >
          <CgLogOut className="size-6" />
          Logout
        </Button>
      </div>
    </>
  );
}
