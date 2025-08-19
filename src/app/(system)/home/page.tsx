import AssistanCard from "@/components/home/AssistantCard";
import { FaHandSparkles } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import { AiFillThunderbolt } from "react-icons/ai";
import QuickActions from "@/components/home/QuickActions";
import { IoMdTrendingUp } from "react-icons/io";
import PortfolioStatistics from "@/components/home/PortfolioStatistics";

export default function HomePage() {
  return (
    <div className="min-h-svh bg-[#F7F8FA] px-4 flex flex-col gap-4 pb-[90px]">
      <div className="flex flex-col gap-1 mb-10">
        <h1 className="text-3xl text-content font-semibold">Good Afternon,</h1>
        <span className="font-bold text-primary text-4xl flex items-center gap-2">
          John! <FaHandSparkles className="text-yellow-500" />{" "}
        </span>
      </div>

      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-black text-2xl flex gap-1 leading-[1]">
          <BsStars className="text-primary" />
          Your AI Assistant
        </h2>
        <AssistanCard />
      </div>

      <div className="flex flex-col gap-4 mt-10">
        <h2 className="font-bold text-black text-2xl flex gap-1 leading-[1]">
          <AiFillThunderbolt className="text-yellow-500" />
          Quick Actions
        </h2>
        <QuickActions />
      </div>

      <div className="flex flex-col gap-4 mt-10">
        <h2 className="font-bold text-black text-2xl flex gap-1 leading-[1]">
          <IoMdTrendingUp className="text-green-500" />
          Portfolio Overview
        </h2>
        <PortfolioStatistics />
      </div>
    </div>
  );
}
