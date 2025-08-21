import { FaBuilding, FaFileAlt, FaUserFriends } from "react-icons/fa";
import { HiCurrencyDollar } from "react-icons/hi2";

export default function QuickActions() {
  return (
    <div className="w-full grid grid-cols-2 gap-4 lg:grid-cols-4 2xl:gap-10">
      <div className="bg-white border rounded-3xl flex flex-col gap-2 items-center justify-center p-4 lg:py-8">
        <div className="size-16 flex items-center justify-center border-primary/30 border rounded-full bg-primary/10">
          <FaBuilding className="size-8 text-primary" />
        </div>
        <span className="font-semibold text-lg">Properties</span>
        <p className="text-sm text-center text-content">
          Manage your portfolio
        </p>
      </div>
      <div className="bg-white border rounded-3xl flex flex-col gap-2 items-center justify-center p-4 lg:py-8">
        <div className="size-16 flex items-center justify-center border-blue-400/30 border rounded-full bg-blue-400/10">
          <FaFileAlt className="size-8 text-blue-600" />
        </div>
        <span className="font-semibold text-lg">Contracts</span>
        <p className="text-sm text-center text-content">Handle agreements</p>
      </div>
      <div className="bg-white border rounded-3xl flex flex-col gap-2 items-center justify-center p-4 lg:py-8">
        <div className="size-16 flex items-center justify-center border-green-400/30 border rounded-full bg-green-400/10">
          <FaUserFriends className="size-8 text-green-600" />
        </div>
        <span className="font-semibold text-lg">Contacts</span>
        <p className="text-sm text-center text-content">Secure deposits</p>
      </div>
      <div className="bg-white border rounded-3xl flex flex-col gap-2 items-center justify-center p-4 lg:py-8">
        <div className="size-16 flex items-center justify-center border-purple-400/30 border rounded-full bg-purple-400/10">
          <HiCurrencyDollar className="size-8 text-purple-600" />
        </div>
        <span className="font-semibold text-lg">Escrow</span>
        <p className="text-sm text-center text-content">Secure deposits</p>
      </div>
    </div>
  );
}
