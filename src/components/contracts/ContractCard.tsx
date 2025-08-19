import { formatToShortDate } from "@/lib/utils";
import { Contract } from "@/types/contract";
import { ChevronRight } from "lucide-react";
import { FaRegCircle } from "react-icons/fa";
import { LuCalendar, LuCalendarClock } from "react-icons/lu";
import { PiUserCircleFill, PiUserCirclePlusFill } from "react-icons/pi";

interface Props {
  contract: Contract;
}

export default function ContractCard({ contract }: Props) {
  return (
    <div className="w-full border rounded-3xl bg-white p-5 flex flex-col gap-4 relative shadow-[24px_20px_135px_-31px_rgba(37,51,131,0.30)]">
      <div className="w-full flex items-start justify-between">
        <div className="flex flex-col items-start gap-2">
          <h2 className="text-primary font-bold text-xl">
            Contract #{contract.lease_id}
          </h2>
          <span className="text-content text-base font-medium leading-[1]">
            Property # {contract.property_id}
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-center gap-1 px-2 py-1 border rounded-2xl bg-content/20 text-content">
            <FaRegCircle className="size-3" />
            <span className="leading-[1] text-xs capitalize">
              {contract.lease_status}
            </span>
          </div>
          <div className="flex flex-col items-end">
            <b className="text-primary font-bold text-xl">
              ${contract.lease_monthly_rent}
            </b>
            <span className="text-xs text-content font-normal">per month</span>
          </div>
        </div>
      </div>

      <div className="w-full px-5 py-3 bg-primary/10 rounded-2xl flex items-start justify-start gap-8">
        <div className="flex flex-col gap-1 items-start leading-[1]">
          <span className="flex gap-1 items-center text-sm text-content">
            <PiUserCircleFill className="text-blue-500 size-4" /> Landlord
          </span>
          <span className="font-medium">Marcus Lee</span>
        </div>

        <div className="flex flex-col gap-1 items-start leading-[1]">
          <span className="flex gap-1 items-center text-sm text-content">
            <PiUserCirclePlusFill className="text-green-500 size-4" /> Tenant
          </span>
          <span className="font-medium">Marcus Lee</span>
        </div>
      </div>

      <div className="w-full flex items-start justify-between">
        <div className="flex flex-col items-start">
          <span className="flex gap-2 items-center text-xs text-content">
            <LuCalendar className="text-primary" /> Start Date
          </span>
          <b>{formatToShortDate(contract.lease_start_date)}</b>
        </div>
        <div className="flex flex-col items-start">
          <span className="flex gap-2 items-center text-xs text-content">
            <LuCalendarClock className="text-primary" /> End Date
          </span>
          <b>{formatToShortDate(contract.lease_end_date)}</b>
        </div>
        <div className="flex flex-col items-start">
          <span className="flex gap-2 items-center text-xs text-content">
            <LuCalendarClock className="text-content" /> Due Day
          </span>
          <b>{contract.lease_day_of_month || "-"}</b>
        </div>
      </div>

      <div className="w-full flex items-center justify-end">
        <span className="text-primary/60">
          <ChevronRight />
        </span>
      </div>
    </div>
  );
}
