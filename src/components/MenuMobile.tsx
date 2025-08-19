import Link from "next/link";
import { FaBuilding, FaFileAlt, FaHome, FaUser } from "react-icons/fa";
import { HiCurrencyDollar } from "react-icons/hi2";

export default function MenuMobile() {
  return (
    <div className="bg-white border-t flex items-center justify-around fixed bottom-0 w-full left-0 right-0 pt-2 pb-4">
      <Link href="/" className="flex flex-col items-center gap-1">
        <FaHome className="size-6 text-primary" />
        <span className="text-xs font-semibold text-primary leading-[1]">
          Home
        </span>
      </Link>

      <Link href="/properties" className="flex flex-col items-center gap-1">
        <FaBuilding className="size-6 text-content" />
        <span className="text-xs font-semibold text-content leading-[1]">
          Properties
        </span>
      </Link>

      <Link href="/contracts" className="flex flex-col items-center gap-1">
        <FaFileAlt className="size-6 text-content" />
        <span className="text-xs font-semibold text-content leading-[1]">
          Contracts
        </span>
      </Link>

      <Link href="/escrow" className="flex flex-col items-center gap-1">
        <HiCurrencyDollar className="size-6 text-content" />
        <span className="text-xs font-semibold text-content leading-[1]">
          Escrow
        </span>
      </Link>

      <Link href="/profile" className="flex flex-col items-center gap-1">
        <FaUser className="size-6 text-content" />
        <span className="text-xs font-semibold text-content leading-[1]">
          Profile
        </span>
      </Link>
    </div>
  );
}
