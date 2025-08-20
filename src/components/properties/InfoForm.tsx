import { FaRegBuilding } from "react-icons/fa";
import { HiCurrencyDollar, HiInformationCircle } from "react-icons/hi2";
import { Input } from "../ui/input";
import { GrTextAlignLeft } from "react-icons/gr";
import { Textarea } from "../ui/textarea";
import { AiOutlineDollar } from "react-icons/ai";
import { LuDollarSign } from "react-icons/lu";
import { ScrollArea } from "../ui/scroll-area";

export default function InfoForm() {
  return (
    <ScrollArea className="h-[calc(100vh-270px)] w-full">
      <div className="grid grid-cols-1 gap-4 w-full">
        {/* BASIC INFORMATION */}
        <div className="w-full rounded-xl bg-white p-5 flex flex-col gap-4 border">
          <h2 className="flex items-center gap-2 text-primary font-bold text-lg">
            <HiInformationCircle className="size-6" />
            Basic Information
          </h2>

          <div className="flex flex-col gap-1">
            <label className="flex items-center gap-2 text-content font-normal">
              <FaRegBuilding className="text-primary/80" />
              Property Name *
            </label>
            <Input
              placeholder="e.g., Sunset Apartments"
              className="h-12 placeholder:text-content/60"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="flex items-center gap-2 text-content font-normal">
              <GrTextAlignLeft className="text-primary/80" />
              Description
            </label>
            <Textarea
              placeholder="Enter property description..."
              className="h-30 placeholder:text-content/60"
            />
          </div>
        </div>

        {/* FINANCIAL DETAILS */}
        <div className="w-full rounded-xl bg-white p-5 flex flex-col gap-4 border">
          <h2 className="flex items-center gap-2 text-green-500 font-bold text-lg">
            <HiCurrencyDollar className="size-6" />
            Financial Details
          </h2>

          <div className="flex flex-col gap-1">
            <label className="flex items-center gap-2 text-content font-normal">
              <AiOutlineDollar className="text-primary/80" />
              Monthly Rent *
            </label>
            <div className="relative">
              <Input
                className="peer ps-9 h-12"
                placeholder="0.00"
                type="number"
              />
              <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
                <LuDollarSign size={16} strokeWidth={2.5} aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollArea>
  );
}
