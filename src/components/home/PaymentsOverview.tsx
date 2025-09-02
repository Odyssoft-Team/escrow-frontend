import { CalendarIcon, CheckIcon } from "lucide-react";
import { Button } from "../ui/button";
import { TbPointFilled } from "react-icons/tb";

export default function PaymentsOverview() {
  return (
    <div className="w-full grid grid-cols-2 gap-4">
      <div className="w-full flex flex-col items-center justify-between gap-4 bg-white border rounded-xl p-4">
        <div className="flex flex-col text-center items-center justify-center w-fit">
          <div className="flex items-center justify-center size-10 bg-orange-400 rounded-full">
            <CalendarIcon className="size-5 text-white" />
          </div>
          <h2 className="font-bold text-lg">Next Payment</h2>
          <span className="text-content text-sm">Due January 1st</span>
        </div>
        <div className="flex flex-col items-center justify-center text-center w-fit">
          <span className="text-primary text-2xl font-bold">$2500</span>
          <span className="text-content text-xs">Monthly Rent</span>
        </div>
        <Button className="bg-green-500">Pay Now</Button>
      </div>

      <div className="w-full flex flex-col items-center justify-between gap-4 bg-white border rounded-xl p-4">
        <div className="flex flex-col text-center items-center justify-center w-fit">
          <div className="flex items-center justify-center size-10 bg-green-400 rounded-full">
            <CheckIcon className="size-5 text-white" />
          </div>
          <h2 className="font-bold text-lg">Payment History</h2>
          <span className="text-content text-sm">Last 6 months</span>
        </div>
        <div className="w-full flex flex-col items-center justify-center text-center">
          <div className="w-full text-xs flex items-center justify-between">
            <span className="w-20 flex">
              <TbPointFilled className="text-green-400 size-4" />
              December
            </span>{" "}
            <span className="text-green-400"> Paid </span>
          </div>
          <div className="w-full text-xs flex items-center justify-between">
            <span className="w-20 flex">
              {" "}
              <TbPointFilled className="text-green-400 size-4" />
              November
            </span>{" "}
            <span className="text-green-400"> Paid </span>
          </div>
          <div className="w-full text-xs flex items-center justify-between">
            <span className="w-20 flex">
              <TbPointFilled className="text-green-400 size-4" />
              October
            </span>{" "}
            <span className="text-green-400"> Paid </span>
          </div>
        </div>

        <div className="w-full flex flex-col items-center justify-center text-center gap-1">
          <span className="font-medium text-green-400 text-2xl">100%</span>
          <span className="text-xs text-content">On Time</span>
        </div>
      </div>
    </div>
  );
}
