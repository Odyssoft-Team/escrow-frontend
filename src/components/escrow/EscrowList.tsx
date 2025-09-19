"use client";

import { CalendarIcon, ChevronLeft, Search, X } from "lucide-react";
import { Input } from "../ui/input";
import { EscrowData } from "@/types/escrow";
import { useMemo, useState } from "react";
import EscrowCard from "./EscrowCard";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Button } from "../ui/button";
import { cn, formatCurrency } from "@/lib/utils";
import { FaUser } from "react-icons/fa";
import { FaCircleDollarToSlot } from "react-icons/fa6";

interface Props {
  list_escrow: EscrowData[];
}

export default function EscrowList({ list_escrow }: Props) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredEscrow = useMemo(() => {
    if (!searchTerm.trim()) return list_escrow;

    return list_escrow.filter((escrow) => {
      const searchLower = searchTerm.toLowerCase();
      return (
        escrow.property_name?.toLowerCase().includes(searchLower) ||
        escrow.lease_status?.toLowerCase().includes(searchLower) ||
        escrow.landlord?.toLowerCase().includes(searchLower) ||
        escrow.tenant?.toLowerCase().includes(searchLower) ||
        escrow.broker?.toLowerCase().includes(searchLower)
      );
    });
  }, [list_escrow, searchTerm]);

  const clearSearch = () => setSearchTerm("");

  const [escrowSelected, setEscrowSelected] = useState<EscrowData | null>(null);
  const [openEscrowDetails, setOpenEscrowDetails] = useState<boolean>(false);

  const handleEscrowSelected = (escrow: EscrowData) => {
    setEscrowSelected(escrow);
    setOpenEscrowDetails(true);
  };

  return (
    <div className="space-y-4">
      {/* Search Input */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <Input
          type="text"
          placeholder="Search escrow..."
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
          Showing {filteredEscrow.length} of {list_escrow.length} properties
        </div>
      )}

      {/* Properties list */}
      <div className="w-full grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-6 2xl:grid-cols-3">
        {filteredEscrow.map((escrow: EscrowData, index) => (
          <EscrowCard
            key={index}
            escrow={escrow}
            handleEscrowSelected={handleEscrowSelected}
          />
        ))}

        {/* No results message */}
        {filteredEscrow.length === 0 && searchTerm && (
          <div className="text-center py-8 text-muted-foreground">
            No properties found matching your search.
          </div>
        )}
      </div>

      <Drawer open={openEscrowDetails} onOpenChange={setOpenEscrowDetails}>
        <DrawerContent className="h-[95dvh] !max-h-screen">
          <DrawerHeader className="pt-2 pb-4 flex justify-between flex-col border-b">
            <div className="w-full flex items-center justify-center relative">
              <DrawerClose asChild>
                <Button
                  variant={"outline"}
                  className="border-none bg-primary/10 text-primary rounded-full text-base !pl-2 !pr-4 absolute left-0"
                  onClick={() => {
                    setOpenEscrowDetails(false);
                    setEscrowSelected(null);
                  }}
                >
                  <ChevronLeft className="size-5" /> Close
                </Button>
              </DrawerClose>
              <DrawerTitle className="text-primary font-bold text-xl">
                Escrow Details
              </DrawerTitle>
            </div>
          </DrawerHeader>
          <div className="bg-[#F7F8FA] w-full h-full p-4 pb-[4rem] flex flex-col items-center gap-4 overflow-y-auto">
            <h2 className="font-bold text-primary text-xl">
              {escrowSelected?.property_name}
            </h2>
            <span
              className={cn(
                "text-content text-sm font-medium leading-[1] xl:text-lg capitalize bg-primary/10 px-2 py-1 rounded-full",
                escrowSelected?.lease_status.toLowerCase() === "deposit"
                  ? "text-primary"
                  : escrowSelected?.lease_status.toLowerCase() === "contract"
                    ? "text-blue-400"
                    : escrowSelected?.lease_status.toLowerCase() === "created"
                      ? "text-green-400"
                      : escrowSelected?.lease_status.toLowerCase() === "sent"
                        ? "text-orange-400"
                        : "text-purple-400"
              )}
            >
              {escrowSelected?.lease_status}
            </span>

            <div className="flex flex-col items-center justify-center gap-1">
              <span className="text-content text-xs">Deposit Amount</span>
              <span className="text-primary font-bold text-xl">
                {formatCurrency(
                  escrowSelected?.lease_holder_deposit_amount as number
                )}
              </span>
            </div>

            <div className="w-full p-4 flex flex-col items-start gap-4 bg-white border rounded-xl">
              <h3
                className={cn(
                  "flex items-center gap-2 text-lg font-medium text-primary"
                )}
              >
                Parties
              </h3>

              <div
                className={cn(
                  "w-full px-4 py-2 border rounded-xl flex items-center justify-start gap-4"
                )}
              >
                <FaUser className={cn("size-5 text-primary")} />
                <div className="flex flex-col gap-0 leading-[1]">
                  <span className="text-content text-sm">Landlord</span>
                  <span className={cn("text-base")}>
                    {escrowSelected?.landlord}
                  </span>
                </div>
              </div>

              <div
                className={cn(
                  "w-full px-4 py-2 border rounded-xl flex items-center justify-start gap-4"
                )}
              >
                <FaUser className={cn("size-5 text-primary")} />
                <div className="flex flex-col gap-0 leading-[1]">
                  <span className="text-content text-sm">Tenant</span>
                  <span className={cn("text-base")}>
                    {escrowSelected?.tenant}
                  </span>
                </div>
              </div>

              <div
                className={cn(
                  "w-full px-4 py-2 border rounded-xl flex items-center justify-start gap-4"
                )}
              >
                <FaUser className={cn("size-5 text-primary")} />
                <div className="flex flex-col gap-0 leading-[1]">
                  <span className="text-content text-sm">Broker</span>
                  <span className={cn("text-base")}>
                    {escrowSelected?.broker}
                  </span>
                </div>
              </div>
            </div>

            <div className="w-full p-4 flex flex-col items-start gap-4 bg-white border rounded-xl">
              <h3
                className={cn(
                  "flex items-center gap-2 text-lg font-medium text-primary"
                )}
              >
                Lease Information
              </h3>

              <div
                className={cn(
                  "w-full px-4 py-2 border rounded-xl flex items-center justify-start gap-4"
                )}
              >
                <CalendarIcon className={cn("size-5 text-primary")} />
                <div className="flex flex-col gap-0 leading-[1]">
                  <span className="text-content text-sm">Start Date</span>
                  <span className={cn("text-base")}>
                    {escrowSelected?.lease_start_date}
                  </span>
                </div>
              </div>

              <div
                className={cn(
                  "w-full px-4 py-2 border rounded-xl flex items-center justify-start gap-4"
                )}
              >
                <CalendarIcon className={cn("size-5 text-primary")} />
                <div className="flex flex-col gap-0 leading-[1]">
                  <span className="text-content text-sm">End Date</span>
                  <span className={cn("text-base")}>
                    {escrowSelected?.lease_end_date}
                  </span>
                </div>
              </div>

              <div
                className={cn(
                  "w-full px-4 py-2 border rounded-xl flex items-center justify-start gap-4"
                )}
              >
                <FaCircleDollarToSlot className={cn("size-5 text-primary")} />
                <div className="flex flex-col gap-0 leading-[1]">
                  <span className="text-content text-sm">Monthly Rent</span>
                  <span className={cn("text-base")}>
                    {formatCurrency(escrowSelected?.rent as number)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
