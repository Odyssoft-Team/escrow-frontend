"use client";

import AssistanCard from "@/components/home/AssistantCard";
import { FaBuilding, FaHandSparkles, FaHome } from "react-icons/fa";
import { BsBarChartFill, BsStars } from "react-icons/bs";
import { AiFillThunderbolt } from "react-icons/ai";
import QuickActions from "@/components/home/QuickActions";
import { IoMdTrendingUp } from "react-icons/io";
import PortfolioStatistics from "@/components/home/PortfolioStatistics";
import { format } from "date-fns";
import { enUS } from "date-fns/locale";
import { useAuthStore } from "@/store/auth.store";
import YourHome from "@/components/home/YourHome";
import PaymentsOverview from "@/components/home/PaymentsOverview";
import PortfolioOverviewLandlord from "@/components/home/PortfolioOverviewLandlord";
import { HiCurrencyDollar } from "react-icons/hi2";
import RentCollection from "@/components/home/RenRentCollection";

export default function HomePage() {
  const { userLoggedIn } = useAuthStore();
  return (
    <div className="bg-[#F7F8FA] px-4 flex flex-col gap-8 pt-[30px] pb-[90px] sm:px-12 xl:pb-[40px] 2xl:px-40">
      <div className="w-full flex flex-col gap-4 xl:flex-row xl:items-center xl:gap-10 xl:justify-between">
        <div className="flex flex-col gap-4">
          <span className="text-content font-medium text-base xl:text-lg">
            {format(new Date(), "EEEE, MMMM do", { locale: enUS })}
          </span>
          <div className="flex flex-col gap-1 mb-10">
            <h1 className="text-3xl text-content font-semibold xl:text-5xl">
              Good Afternon,
            </h1>
            <span className="font-bold text-primary text-4xl flex items-center gap-2 xl:text-6xl capitalize">
              {userLoggedIn?.user_first_name}!{" "}
              <FaHandSparkles className="text-yellow-500" />{" "}
            </span>
          </div>
        </div>

        {userLoggedIn?.user_role === "broker" && (
          <div className="flex flex-col gap-4">
            <h2 className="font-bold text-black text-2xl flex gap-1 leading-[1]">
              <BsStars className="text-primary" />
              Your AI Assistant
            </h2>
            <AssistanCard />
          </div>
        )}
      </div>

      {userLoggedIn?.user_role === "tenant" && (
        <>
          <div className="flex flex-col gap-4">
            <h2 className="font-bold text-black text-2xl flex gap-1 leading-[1]">
              <FaHome className="text-green-500" />
              Your Home
            </h2>
            <YourHome />
          </div>
        </>
      )}

      {userLoggedIn?.user_role === "landlord" && (
        <>
          <div className="flex flex-col gap-4">
            <h2 className="font-bold text-black text-2xl flex gap-1 leading-[1]">
              <FaBuilding className="text-blue-500" />
              Portfolio Overview
            </h2>
            <PortfolioOverviewLandlord />
          </div>
        </>
      )}

      <div className="flex flex-col gap-4 mt-10">
        <h2 className="font-bold text-black text-2xl flex gap-1 leading-[1]">
          <AiFillThunderbolt className="text-yellow-500" />
          Quick Actions
        </h2>
        <QuickActions />
      </div>

      {userLoggedIn?.user_role === "tenant" && (
        <>
          <div className="flex flex-col gap-4">
            <h2 className="font-bold text-black text-2xl flex gap-1 leading-[1]">
              <BsBarChartFill className="text-green-500" />
              Payments Overview
            </h2>
            <PaymentsOverview />
          </div>
        </>
      )}

      {userLoggedIn?.user_role === "broker" && (
        <>
          <div className="flex flex-col gap-4 mt-10">
            <h2 className="font-bold text-black text-2xl flex gap-1 leading-[1]">
              <IoMdTrendingUp className="text-green-500" />
              Portfolio Overview
            </h2>
            <PortfolioStatistics />
          </div>
        </>
      )}

      {userLoggedIn?.user_role === "landlord" && (
        <>
          <div className="flex flex-col gap-4 mt-10">
            <h2 className="font-bold text-black text-2xl flex gap-1 leading-[1]">
              <HiCurrencyDollar className="text-green-500" />
              Rent Collection
            </h2>
            <RentCollection />
          </div>
        </>
      )}
    </div>
  );
}
