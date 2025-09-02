import { FaHome, FaUserAlt } from "react-icons/fa";
import { HiHome } from "react-icons/hi2";

export default function PortfolioOverviewLandlord() {
  return (
    <div className="w-full grid grid-cols-3 gap-4">
      <div className="w-full flex flex-col items-center justify-between gap-4 bg-white border rounded-xl p-4">
        <div className="flex flex-col text-center items-center justify-center w-fit">
          <FaHome className="size-6 text-blue-500" />
          <h2 className="font-bold text-lg">8</h2>
          <span className="text-content text-sm">Properties</span>
        </div>
      </div>

      <div className="w-full flex flex-col items-center justify-between gap-4 bg-white border rounded-xl p-4">
        <div className="flex flex-col text-center items-center justify-center w-fit">
          <FaUserAlt className="size-6 text-green-500" />
          <h2 className="font-bold text-lg">0</h2>
          <span className="text-content text-sm">Occupied</span>
        </div>
      </div>

      <div className="w-full flex flex-col items-center justify-between gap-4 bg-white border rounded-xl p-4">
        <div className="flex flex-col text-center items-center justify-center w-fit">
          <HiHome className="size-6 text-orange-500" />
          <h2 className="font-bold text-lg">8</h2>
          <span className="text-content text-sm">Vacant</span>
        </div>
      </div>

      <div className="w-full flex flex-col items-center justify-between gap-2 bg-white border rounded-xl px-4 py-3 col-span-3">
        <div className="w-full flex items-center justify-between">
          <h3 className="font-medium leading-[1]">The Roads 3 bedroom house</h3>
          <span className="font-bold leading-[1]">$5000</span>
        </div>

        <div className="w-full flex items-center justify-between">
          <h3 className="text-content text-sm leading-[1]">325 SW 31st Rd</h3>
          <span className="text-xs text-orange-500 bg-orange-100 px-3 py-1 rounded-full leading-[1]">
            Pending
          </span>
        </div>
      </div>

      <div className="w-full flex flex-col items-center justify-between gap-2 bg-white border rounded-xl px-4 py-3 col-span-3">
        <div className="w-full flex items-center justify-between">
          <h3 className="font-medium leading-[1]">Test</h3>
          <span className="font-bold leading-[1]">$100</span>
        </div>

        <div className="w-full flex items-center justify-between">
          <h3 className="text-content text-sm leading-[1]">
            615 Brickell Key Dr
          </h3>
          <span className="text-xs text-orange-500 bg-orange-100 px-3 py-1 rounded-full leading-[1]">
            Pending
          </span>
        </div>
      </div>
    </div>
  );
}
