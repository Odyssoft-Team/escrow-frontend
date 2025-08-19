import PropertyCard from "@/components/properties/PropertyCard";
import api from "@/lib/axios";
import { Property } from "@/types/property";
import { FaFileAlt } from "react-icons/fa";

export default async function EscrowPage() {
  const response = await api.get("/properties", {
    headers: {
      "Content-Type": "application/json",
    },
  });

  console.log(response.data);

  return (
    <div className="bg-[#F7F8FA] px-4 flex flex-col gap-4 pb-[90px] pt-[20px]">
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-primary text-3xl leading-[1]">
          Escrow
        </h1>
        {/* <span className="flex items-center gap-1 font-medium text-primary/70 text-sm">
          <FaFileAlt className="size-5" />
          {response.data.length} Escrow
        </span> */}
      </div>

      {/* <div>buscador aqui</div>
 */}
      <div className="w-full grid grid-cols-1 gap-4">
        
      </div>
    </div>
  );
}
