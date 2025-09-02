import { CheckIcon } from "lucide-react";
import { BsGraphUpArrow } from "react-icons/bs";
import { TbPointFilled } from "react-icons/tb";

export default function RentCollection() {
  return (
    <div className="w-full grid grid-cols-2 gap-4">
      <div className="w-full flex flex-col items-center justify-between gap-4 bg-white border rounded-xl p-4">
        <div className="flex flex-col text-center items-center justify-center w-fit">
          <div className="flex items-center justify-center size-10 bg-green-400 rounded-full">
            <BsGraphUpArrow className="size-5 text-white" />
          </div>
          <h2 className="font-bold text-lg">Monthly Revenue</h2>
          <span className="text-content text-sm">August 2025</span>
        </div>
        <div className="flex flex-col items-center justify-center text-center w-fit">
          <span className="text-primary text-2xl font-bold">$10542</span>
          <span className="text-content text-xs">Expected</span>
        </div>
        <div className="flex flex-col w-full">
          <div className="w-full flex items-center justify-between text-xs">
            <span className="text-content">Collected:</span>
            <span className="font-bold text-green-500">$0</span>
          </div>

          <div className="w-full flex items-center justify-between text-xs">
            <span className="text-content">Pending:</span>
            <span className="font-bold text-orange-500">$10542</span>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col items-center justify-between gap-4 bg-white border rounded-xl p-4">
        <div className="flex flex-col text-center items-center justify-center w-fit">
          <div className="flex items-center justify-center size-10 bg-green-400 rounded-full">
            <CheckIcon className="size-5 text-white" />
          </div>
          <h2 className="font-bold text-lg">Collection Status</h2>
          <span className="text-content text-sm">All Properties</span>
        </div>
        <div className="w-full flex flex-col items-center justify-center text-center">
          <div className="w-full text-xs flex items-center justify-between">
            <span className="w-20 flex">
              <TbPointFilled className="text-green-400 size-4" />
              The Road...
            </span>{" "}
            <span className="text-content"> Vacant </span>
          </div>
          <div className="w-full text-xs flex items-center justify-between">
            <span className="w-20 flex">
              {" "}
              <TbPointFilled className="text-green-400 size-4" />
              Test
            </span>{" "}
            <span className="text-content"> Vacant </span>
          </div>
          <div className="w-full text-xs flex items-center justify-between">
            <span className="w-20 flex">
              <TbPointFilled className="text-green-400 size-4" />
              Test
            </span>{" "}
            <span className="text-content"> Vacant </span>
          </div>
        </div>

        <div className="w-full flex flex-col items-center justify-center text-center gap-1">
          <span className="font-medium text-green-400 text-2xl">0%</span>
          <span className="text-xs text-content">Collected</span>
        </div>
      </div>
    </div>
  );
}
