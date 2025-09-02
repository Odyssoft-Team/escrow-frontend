"use client";

import { useAuthStore } from "@/store/auth.store";
import Link from "next/link";
import { BsFillFileEarmarkBarGraphFill } from "react-icons/bs";
import {
  FaBuilding,
  FaCreditCard,
  FaFileAlt,
  FaPhoneAlt,
  FaTools,
  FaUserFriends,
} from "react-icons/fa";
import { HiCurrencyDollar, HiMiniUsers } from "react-icons/hi2";

export default function QuickActions() {
  const { userLoggedIn } = useAuthStore();
  return (
    <div className="w-full grid grid-cols-2 gap-4 lg:grid-cols-4 2xl:gap-10">
      {userLoggedIn?.user_role === "tenant" && (
        <>
          <Link href={"/properties"}>
            <div className="bg-white border rounded-3xl flex flex-col gap-2 items-center justify-center p-4 lg:py-8">
              <div className="size-16 flex items-center justify-center border-green-300 border rounded-full bg-green-100">
                <FaCreditCard className="size-8 text-green-500" />
              </div>
              <span className="font-semibold text-lg">Pay Rent</span>
              <p className="text-sm text-center text-content">
                Make monthly payment
              </p>
            </div>
          </Link>

          <Link href={"/properties"}>
            <div className="bg-white border rounded-3xl flex flex-col gap-2 items-center justify-center p-4 lg:py-8">
              <div className="size-16 flex items-center justify-center border-orange-300 border rounded-full bg-orange-100">
                <FaCreditCard className="size-8 text-orange-500" />
              </div>
              <span className="font-semibold text-lg">Maintenance</span>
              <p className="text-sm text-center text-content">Report issues</p>
            </div>
          </Link>

          <Link href={"/properties"}>
            <div className="bg-white border rounded-3xl flex flex-col gap-2 items-center justify-center p-4 lg:py-8">
              <div className="size-16 flex items-center justify-center border-blue-300 border rounded-full bg-blue-100">
                <FaPhoneAlt className="size-8 text-blue-500" />
              </div>
              <span className="font-semibold text-lg">Contact</span>
              <p className="text-sm text-center text-content">Reach landlord</p>
            </div>
          </Link>

          <Link href={"/properties"}>
            <div className="bg-white border rounded-3xl flex flex-col gap-2 items-center justify-center p-4 lg:py-8">
              <div className="size-16 flex items-center justify-center border-purple-300 border rounded-full bg-purple-100">
                <FaFileAlt className="size-8 text-purple-500" />
              </div>
              <span className="font-semibold text-lg">Documents</span>
              <p className="text-sm text-center text-content">
                Lease & receipts
              </p>
            </div>
          </Link>
        </>
      )}

      {userLoggedIn?.user_role === "broker" && (
        <>
          <Link href={"/properties"}>
            <div className="bg-white border rounded-3xl flex flex-col gap-2 items-center justify-center p-4 lg:py-8">
              <div className="size-16 flex items-center justify-center border-primary/30 border rounded-full bg-primary/10">
                <FaBuilding className="size-8 text-primary" />
              </div>
              <span className="font-semibold text-lg">Properties</span>
              <p className="text-sm text-center text-content">
                Manage your portfolio
              </p>
            </div>
          </Link>

          <Link href={"/contracts"}>
            <div className="bg-white border rounded-3xl flex flex-col gap-2 items-center justify-center p-4 lg:py-8">
              <div className="size-16 flex items-center justify-center border-blue-400/30 border rounded-full bg-blue-400/10">
                <FaFileAlt className="size-8 text-blue-600" />
              </div>
              <span className="font-semibold text-lg">Contracts</span>
              <p className="text-sm text-center text-content">
                Handle agreements
              </p>
            </div>
          </Link>

          <Link href={"/contacts"}>
            <div className="bg-white border rounded-3xl flex flex-col gap-2 items-center justify-center p-4 lg:py-8">
              <div className="size-16 flex items-center justify-center border-green-400/30 border rounded-full bg-green-400/10">
                <FaUserFriends className="size-8 text-green-600" />
              </div>
              <span className="font-semibold text-lg">Contacts</span>
              <p className="text-sm text-center text-content">
                Secure deposits
              </p>
            </div>
          </Link>
          <Link href={"/escrow"}>
            <div className="bg-white border rounded-3xl flex flex-col gap-2 items-center justify-center p-4 lg:py-8">
              <div className="size-16 flex items-center justify-center border-purple-400/30 border rounded-full bg-purple-400/10">
                <HiCurrencyDollar className="size-8 text-purple-600" />
              </div>
              <span className="font-semibold text-lg">Escrow</span>
              <p className="text-sm text-center text-content">
                Secure deposits
              </p>
            </div>
          </Link>
        </>
      )}

      {userLoggedIn?.user_role === "landlord" && (
        <>
          <Link href={"/properties"}>
            <div className="bg-white border rounded-3xl flex flex-col gap-2 items-center justify-center p-4 lg:py-8">
              <div className="size-16 flex items-center justify-center border-primary/30 border rounded-full bg-primary/10">
                <FaBuilding className="size-8 text-primary" />
              </div>
              <span className="font-semibold text-lg">Properties</span>
              <p className="text-sm text-center text-content">
                Manage your portfolio
              </p>
            </div>
          </Link>

          <Link href={"/contracts"}>
            <div className="bg-white border rounded-3xl flex flex-col gap-2 items-center justify-center p-4 lg:py-8">
              <div className="size-16 flex items-center justify-center border-blue-400/30 border rounded-full bg-blue-400/10">
                <HiMiniUsers className="size-8 text-blue-600" />
              </div>
              <span className="font-semibold text-lg">Tenants</span>
              <p className="text-sm text-center text-content">Manage tenants</p>
            </div>
          </Link>

          <Link href={"/properties"}>
            <div className="bg-white border rounded-3xl flex flex-col gap-2 items-center justify-center p-4 lg:py-8">
              <div className="size-16 flex items-center justify-center border-orange-300 border rounded-full bg-orange-100">
                <FaTools className="size-8 text-orange-500" />
              </div>
              <span className="font-semibold text-lg">Maintenance</span>
              <p className="text-sm text-center text-content">Report issues</p>
            </div>
          </Link>

          <Link href={"/escrow"}>
            <div className="bg-white border rounded-3xl flex flex-col gap-2 items-center justify-center p-4 lg:py-8">
              <div className="size-16 flex items-center justify-center border-green-400/30 border rounded-full bg-green-400/10">
                <BsFillFileEarmarkBarGraphFill className="size-8 text-green-600" />
              </div>
              <span className="font-semibold text-lg">Reports</span>
              <p className="text-sm text-center text-content">
                Financial insights
              </p>
            </div>
          </Link>
        </>
      )}
    </div>
  );
}
