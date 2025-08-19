"use client";

import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import { Input } from "../ui/input";
import ContractCard from "./ContractCard";
import { Contract } from "@/types/contract";

interface ContractsListProps {
  contracts: Contract[];
}

export function ContractsList({ contracts }: ContractsListProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredContracts = useMemo(() => {
    if (!searchTerm.trim()) return contracts;

    return contracts.filter((contract) => {
      const searchLower = searchTerm.toLowerCase();
      return contract.lease_status?.toLowerCase().includes(searchLower);
    });
  }, [contracts, searchTerm]);

  const clearSearch = () => setSearchTerm("");

  return (
    <div className="space-y-4">
      {/* Search Input */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <Input
          type="text"
          placeholder="Search contracts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-10 py-2 h-10 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white placeholder:text-content/60"
        />
        {searchTerm && (
          <button
            onClick={clearSearch}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Results counter */}
      {searchTerm && (
        <div className="text-sm text-muted-foreground">
          Showing 2 of 2 properties
        </div>
      )}

      {/* Properties list */}
      <div className="w-full grid grid-cols-1 gap-4">
        {filteredContracts.map((contract: Contract) => (
          <ContractCard key={contract.lease_id} contract={contract} />
        ))}
      </div>
    </div>
  );
}
