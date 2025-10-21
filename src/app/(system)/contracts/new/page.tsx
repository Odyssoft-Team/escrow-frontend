"use client";

import NewContract from "@/components/contracts/NewContract";
import api from "@/lib/axios";
import { useAuthStore } from "@/store/auth.store";
import { useEffect } from "react";

export default function ContractsNewPage() {
  const { userLoggedIn } = useAuthStore();

  const getContracts = async () => {
    await api.get(`/lease_contracts_by_brokers/${userLoggedIn?.user_id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  useEffect(() => {
    if (userLoggedIn?.user_id) {
      getContracts();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userLoggedIn?.user_id]);

  return <NewContract onLoading={getContracts} />;
}
