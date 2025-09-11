"use client";

import { ContractsList } from "@/components/contracts/ContractsList";
import NewContract from "@/components/contracts/NewContract";
import api from "@/lib/axios";
import { useAuthStore } from "@/store/auth.store";
import { Contract } from "@/types/contract";
import { useEffect, useState } from "react";
import { FaFileAlt } from "react-icons/fa";

export default function ContractsData() {
  const { userLoggedIn } = useAuthStore();
  const [listContracts, setListContracts] = useState<Contract[]>([]);

  const getContracts = async () => {
    const response = await api.get(
      `/lease_contracts_by_brokers/${userLoggedIn?.user_id}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log("response contracts:", response.data);

    setListContracts(response.data);
  };

  useEffect(() => {
    if (userLoggedIn?.user_id) {
      getContracts();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userLoggedIn?.user_id]);
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-primary text-3xl leading-[1] xl:text-4xl 2xl:text-5xl">
          Contracts
        </h1>
        <span className="flex items-center gap-1 font-medium text-primary/70 text-sm xl:text-lg">
          <FaFileAlt className="size-5 xl:size-6" />
          {listContracts.length} Contracts
        </span>
      </div>

      <ContractsList contracts={listContracts} />

      <NewContract onLoading={getContracts} />
    </>
  );
}
