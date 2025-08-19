import { ContractsList } from "@/components/contracts/ContractsList";
import api from "@/lib/axios";
import { Contract } from "@/types/contract";
import { FaFileAlt } from "react-icons/fa";

export default async function ContractsPage() {
  const response = await api.get("/lease_contracts_by_brokers/36", {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const contracts: Contract[] = response.data;

  return (
    <div className="bg-[#F7F8FA] px-4 flex flex-col gap-4 pb-[90px] pt-[20px]">
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-primary text-3xl leading-[1]">
          Contracts
        </h1>
        <span className="flex items-center gap-1 font-medium text-primary/70 text-sm">
          <FaFileAlt className="size-5" />
          {response.data.length} Contracts
        </span>
      </div>

      <ContractsList contracts={contracts} />
    </div>
  );
}
