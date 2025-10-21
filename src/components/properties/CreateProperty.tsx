"use client";

import Link from "next/link";
import { FaPlus } from "react-icons/fa";

export default function CreateProperty() {
  return (
    <Link
      href="/properties/new"
      className="bg-primary text-white fixed right-4 bottom-[90px] rounded-full py-3 !px-6 w-auto shadow-[0px_0px_35px_5px_rgba(37,51,131,0.50)] border-none text-base flex items-center gap-2"
    >
      <FaPlus />
      New Property
    </Link>
  );
}
