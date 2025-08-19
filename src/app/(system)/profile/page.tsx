import { Avatar, AvatarFallback } from "@/components/ui/avatar";

import { FaBriefcase, FaPhoneAlt, FaUser } from "react-icons/fa";
import { CiUser } from "react-icons/ci";

export default async function ProfilePage() {
  return (
    <div className="bg-[#F7F8FA] px-4 flex flex-col gap-4 pb-[90px] pt-[20px]">
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-primary text-3xl leading-[1]">Profile</h1>
        <span className="flex items-center gap-1 font-medium text-primary/70 text-sm">
          <Avatar className="bg-primary text-white size-32">
            <AvatarFallback className="size-full bg-primary text-white font-bold text-5xl">
              J
            </AvatarFallback>
          </Avatar>
          <span className="bg-amber-500 text-white px-4 py-1 rounded-full">
            Broker
          </span>
        </span>
        <span className="flex flex-col items-center gap-1 font-medium text-primary/70 text-sm">
          <span className="text-primary px-4 py-1 rounded-full  font-bold text-3xl ">
            John TheBroker
          </span>
          <span className="text-neutral-700 font-medium text-lg px-4 py-1 rounded-full">
            rodney@networkcorp.net
          </span>
        </span>
      </div>

      <div className="w-full grid grid-cols-1 gap-4">
        <div className="w-full rounded-3xl bg-white p-4 shadow-2xl shadow-neutral-200">
          <div className="w-full flex items-start justify-between">
            <div className="flex flex-col items-start">
              <h2 className="text-primary font-extrabold">
                <FaUser /> Personal Information
              </h2>

              <div className="flex w-full bg-[#F7F8FA] rounded-2xl px-4 py-3">
                <CiUser /> First Name
              </div>

              <div>Last Name</div>
              <div>
                <FaBriefcase /> Role
              </div>
            </div>
            <div className="flex flex-col items-end"></div>
          </div>
        </div>
        <div className="w-full rounded-3xl bg-white p-4 shadow-2xl shadow-neutral-200">
          <div className="w-full flex items-start justify-between">
            <div className="flex flex-col items-start">
              <h2 className="flex gap-2 text-blue-500 font-extrabold">
                {/* {property.property_name} */}
                <FaPhoneAlt /> Contact Information
              </h2>
              {/* <span>{property.property_address1}</span> */}
              <div className="flex w-full bg-[#F7F8FA] rounded-2xl px-4 py-3">
                First Name
              </div>

              <div>Last Name</div>
              <div>Role</div>
            </div>
            <div className="flex flex-col items-end"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
