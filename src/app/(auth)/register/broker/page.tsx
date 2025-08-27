"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useState } from "react";
import { FaRegMap, FaRegUser, FaSuitcase } from "react-icons/fa";
import { HiOutlineHashtag, HiOutlinePhone } from "react-icons/hi2";
import { LuBuilding2 } from "react-icons/lu";
import { PiCity, PiUserCircleFill } from "react-icons/pi";
import { TbLocation } from "react-icons/tb";
import { HiOutlineMail } from "react-icons/hi";
import { FiLock } from "react-icons/fi";
import { IoDocumentTextOutline } from "react-icons/io5";

export default function BrokerRegisterPage() {
  const [companyName, setCompanyName] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  return (
    <div className="w-full bg-[#F7F8FA] h-full min-h-screen relative pt-12">
      <div className="h-12 w-full flex items-center justify-between bg-white border-b fixed top-0 left-0 right-0 px-4">
        <Link href={"/register"} className="text-primary font-medium text-base">
          Cancel
        </Link>
        <Button
          variant={"ghost"}
          className="text-primary font-medium text-base w-auto px-0"
        >
          Save
        </Button>
      </div>
      <div className="px-4 pt-8 w-full flex flex-col gap-2 items-center justify-center">
        <FaSuitcase className="size-16 text-primary" />
        <h1 className="text-4xl font-bold text-primary">Broker Registration</h1>
        <p className="text-content text-base text-balance">
          Create your account to get started
        </p>
      </div>

      <div className="w-full grid grid-cols-6 gap-4 px-4 pt-4 pb-8">
        {/* COMPANY NAME */}
        <div className="flex flex-col w-full col-span-6 gap-1">
          <Label className="text-content text-sm font-medium">
            <LuBuilding2 className="size-4" />
            Company
            <span className="text-red-500">*</span>
          </Label>
          <Input
            placeholder="Company Name"
            className="h-12 w-full placeholder:text-content/50 placeholder:text-sm bg-white"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </div>

        {/* FIRST NAME */}
        <div className="flex flex-col w-full col-span-3 gap-1">
          <Label className="text-content text-sm font-medium">
            <FaRegUser className="size-4" />
            First Name
            <span className="text-red-500">*</span>
          </Label>
          <Input
            placeholder="First Name"
            className="h-12 w-full placeholder:text-content/50 placeholder:text-sm bg-white"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        {/* LAST NAME */}
        <div className="flex flex-col w-full col-span-3 gap-1">
          <Label className="text-content text-sm font-medium">
            <FaRegUser className="size-4" />
            Last Name
            <span className="text-red-500">*</span>
          </Label>
          <Input
            placeholder="Last Name"
            className="h-12 w-full placeholder:text-content/50 placeholder:text-sm bg-white"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        {/* ADDRESS LINE 1 */}
        <div className="flex flex-col w-full col-span-6 gap-1">
          <Label className="text-content text-sm font-medium">
            <TbLocation className="size-4" />
            Address Line 1<span className="text-red-500">*</span>
          </Label>
          <Input
            placeholder="Street address"
            className="h-12 w-full placeholder:text-content/50 placeholder:text-sm bg-white"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </div>

        {/* ADDRESS LINE 2 */}
        <div className="flex flex-col w-full col-span-6 gap-1">
          <Label className="text-content text-sm font-medium">
            <TbLocation className="size-4" />
            Address Line 2
          </Label>
          <Input
            placeholder="Apt, Suite, etc."
            className="h-12 w-full placeholder:text-content/50 placeholder:text-sm bg-white"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </div>

        <div className="flex flex-col w-full col-span-2 gap-1">
          <Label className="text-content text-sm font-medium">
            <PiCity className="size-4" />
            City
            <span className="text-red-500">*</span>
          </Label>
          <Input
            placeholder="City"
            className="h-12 w-full placeholder:text-content/50 placeholder:text-sm bg-white"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </div>

        <div className="flex flex-col w-full col-span-2 gap-1">
          <Label className="text-content text-sm font-medium">
            <FaRegMap className="size-4" />
            State
            <span className="text-red-500">*</span>
          </Label>
          <Input
            placeholder="State"
            className="h-12 w-full placeholder:text-content/50 placeholder:text-sm bg-white"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </div>

        <div className="flex flex-col w-full col-span-2 gap-1">
          <Label className="text-content text-sm font-medium">
            <HiOutlineHashtag className="size-4" />
            ZIP
            <span className="text-red-500">*</span>
          </Label>
          <Input
            placeholder="ZIP"
            className="h-12 w-full placeholder:text-content/50 placeholder:text-sm bg-white"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </div>

        <div className="flex flex-col w-full col-span-6 gap-1">
          <Label className="text-content text-sm font-medium">
            <HiOutlineMail className="size-4" />
            Email
            <span className="text-red-500">*</span>
          </Label>
          <Input
            placeholder="Email Address"
            className="h-12 w-full placeholder:text-content/50 placeholder:text-sm bg-white"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </div>

        <div className="flex flex-col w-full col-span-6 gap-1">
          <Label className="text-content text-sm font-medium">
            <PiUserCircleFill className="size-4" />
            Username
            <span className="text-red-500">*</span>
          </Label>
          <Input
            placeholder="Username"
            className="h-12 w-full placeholder:text-content/50 placeholder:text-sm bg-white"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </div>

        <div className="flex flex-col w-full col-span-6 gap-1">
          <Label className="text-content text-sm font-medium">
            <FiLock className="size-4" />
            Password
            <span className="text-red-500">*</span>
          </Label>
          <Input
            placeholder="Password"
            className="h-12 w-full placeholder:text-content/50 placeholder:text-sm bg-white"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </div>

        <div className="flex flex-col w-full col-span-6 gap-1">
          <Label className="text-content text-sm font-medium">
            <FiLock className="size-4" />
            Confirm Password
            <span className="text-red-500">*</span>
          </Label>
          <Input
            placeholder="Confirm Password"
            className="h-12 w-full placeholder:text-content/50 placeholder:text-sm bg-white"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </div>

        <div className="flex flex-col w-full col-span-3 gap-1">
          <Label className="text-content text-sm font-medium">
            <HiOutlinePhone className="size-4" />
            Cell Phone
          </Label>
          <Input
            placeholder="Cell Phone"
            className="h-12 w-full placeholder:text-content/50 placeholder:text-sm bg-white"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </div>

        <div className="flex flex-col w-full col-span-3 gap-1">
          <Label className="text-content text-sm font-medium">
            <HiOutlinePhone className="size-4" />
            Business Phone
            <span className="text-red-500">*</span>
          </Label>
          <Input
            placeholder="Business Phone"
            className="h-12 w-full placeholder:text-content/50 placeholder:text-sm bg-white"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </div>

        <div className="flex flex-col w-full col-span-6 gap-1">
          <Label className="text-content text-sm font-medium">
            <IoDocumentTextOutline className="size-4" />
            Real Estate License No.
            <span className="text-red-500">*</span>
          </Label>
          <Input
            placeholder="License Number"
            className="h-12 w-full placeholder:text-content/50 placeholder:text-sm bg-white"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
