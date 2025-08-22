import { IoCard, IoEllipsisHorizontalCircle } from "react-icons/io5";
import { ScrollArea } from "../ui/scroll-area";
import { FaChartPie } from "react-icons/fa";
import { Input } from "../ui/input";
import { LuDollarSign } from "react-icons/lu";
import { IoIosCalendar } from "react-icons/io";
import { FaShield } from "react-icons/fa6";

export default function MonthlyTermsForm() {
  return (
    <ScrollArea className="h-[calc(100vh-370px)] w-full">
      <div className="w-full flex flex-col gap-2 ">
        <div className="flex items-center justify-start gap-4">
          <IoCard className="text-primary size-6" />
          <div className="flex flex-col items-start gap-0 leading-[1]">
            <h2 className="font-bold text-primary text-2xl">Monthly Terms</h2>
            <p className="text-content text-sm">Ongoing payment structure</p>
          </div>
        </div>

        <div className="w-full p-4 bg-white border rounded-xl flex flex-col gap-6">
          <h2 className="font-bold text-[#5953C6] text-lg flex items-center gap-2">
            <FaChartPie className="text-[#5953C6] size-6" />
            Deposit will be credited as follows
          </h2>

          <div className="flex flex-col gap-1">
            <label className="flex items-center gap-2 text-content font-normal">
              <span className="size-4 flex items-center justify-center rounded-full bg-primary/70 text-white text-xs">
                1
              </span>
              To First Month Rent
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

          <div className="flex flex-col gap-1">
            <label className="flex items-center gap-2 text-content font-normal">
              <IoIosCalendar className="text-primary/80" />
              To Last Month Rent
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

          <div className="flex flex-col gap-1">
            <label className="flex items-center gap-2 text-content font-normal">
              <FaShield className="text-primary/80" />
              To Security Deposit
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

          <div className="flex flex-col gap-1">
            <label className="flex items-center gap-2 text-content font-normal">
              <IoEllipsisHorizontalCircle className="text-primary/80" />
              To Other
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
