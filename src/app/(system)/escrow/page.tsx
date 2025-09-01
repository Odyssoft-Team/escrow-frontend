import api from "@/lib/axios";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { EscrowData } from "@/types/escrow";
import EscrowList from "@/components/escrow/EscrowList";

export default async function EscrowPage() {
  const response = await api.get(`/escrow/36`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const list_escrow: EscrowData[] = response.data;

  return (
    <div className="bg-[#F7F8FA] px-4 flex flex-col gap-4 pt-[30px] pb-[90px] sm:px-8 xl:pb-[40px] 2xl:px-[8rem]">
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-primary text-3xl leading-[1] xl:text-4xl 2xl:text-5xl">
          Escrow
        </h1>
        <span className="flex items-center gap-1 font-medium text-primary/70 text-sm xl:text-lg">
          <HiBuildingOffice2 className="size-5 xl:size-6" />
          {response.data.length} properties
        </span>
      </div>

      <EscrowList list_escrow={list_escrow} />
    </div>
  );
}
