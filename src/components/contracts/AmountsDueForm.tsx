"use client";

import { FaMoneyBill } from "react-icons/fa";
import { ScrollArea } from "../ui/scroll-area";
import { BiDollarCircle } from "react-icons/bi";
import { Input } from "../ui/input";
import { LuDollarSign } from "react-icons/lu";
import { IoIosCalendar } from "react-icons/io";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "../ui/button";
import { format } from "date-fns";
import { enUS } from "date-fns/locale";
import { FaClockRotateLeft } from "react-icons/fa6";
import { useNewContractStore } from "@/store/new-contract.store";

export default function AmountsDueForm() {
  const {
    firstMonthRent,
    firstMonthDueOn,
    advanceRentMonth,
    advanceRent,
    advanceRentDueOn,
    setFirstMonthRent,
    setFirstMonthDueOn,
    setAdvanceRentMonth,
    setAdvanceRent,
    setAdvanceRentDueOn,
  } = useNewContractStore();
  return (
    <ScrollArea className="h-[calc(100vh-350px)] w-full">
      <div className="w-full flex flex-col gap-2 ">
        <div className="flex items-center justify-start gap-4">
          <FaMoneyBill className="text-primary size-6" />
          <div className="flex flex-col items-start gap-0 leading-[1]">
            <h2 className="font-bold text-primary text-2xl">Amounts Due</h2>
            <p className="text-content text-sm">
              Payment details and due dates
            </p>
          </div>
        </div>

        <div className="w-full p-4 bg-white border rounded-xl flex flex-col gap-6">
          <h2 className="font-bold text-primary text-lg flex items-center gap-2">
            <span className="size-6 flex items-center justify-center rounded-full bg-primary text-white text-sm">
              1
            </span>
            First month rent plus taxes
          </h2>
          <div className="w-full grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label className="flex items-center gap-2 text-content font-normal">
                <BiDollarCircle className="text-primary/80" />
                Amount
              </label>
              <div className="relative">
                <Input
                  className="peer ps-9 h-12"
                  placeholder="0.00"
                  type="number"
                  value={firstMonthRent}
                  onChange={(e) => {
                    setFirstMonthRent(Number(e.target.value));
                  }}
                />
                <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
                  <LuDollarSign
                    size={16}
                    strokeWidth={2.5}
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label className="flex items-center gap-2 text-content font-normal">
                <IoIosCalendar className="text-primary/80" />
                Due Date
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    data-empty={!firstMonthDueOn}
                    className="data-[empty=true]:text-muted-foreground w-full h-12 justify-start text-left font-normal"
                  >
                    {firstMonthDueOn ? (
                      format(firstMonthDueOn, "EEEE, MMMM do", { locale: enUS })
                    ) : (
                      <span className="text-muted-foreground text-base font-normal">
                        Pick a date
                      </span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={firstMonthDueOn}
                    onSelect={setFirstMonthDueOn}
                    required
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <h2 className="font-bold text-purple-500 text-xl flex items-center gap-2">
            <FaClockRotateLeft className="text-purple-500 size-6" />
            Advance Rent
          </h2>

          <div className="flex flex-col gap-1">
            <label className="flex items-center gap-2 text-content font-normal">
              <IoIosCalendar className="text-primary/80" />
              Month of
            </label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  data-empty={!advanceRentMonth}
                  className="data-[empty=true]:text-muted-foreground w-full h-12 justify-start text-left font-normal"
                >
                  {advanceRentMonth ? (
                    format(advanceRentMonth, "MMMM do", { locale: enUS })
                  ) : (
                    <span className="text-muted-foreground text-base font-normal">
                      e.g., December 2025
                    </span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={advanceRentMonth}
                  onSelect={setAdvanceRentMonth}
                  required
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="w-full grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label className="flex items-center gap-2 text-content font-normal">
                <BiDollarCircle className="text-primary/80" />
                Amount
              </label>
              <div className="relative">
                <Input
                  className="peer ps-9 h-12"
                  placeholder="0.00"
                  type="number"
                  value={advanceRent}
                  onChange={(e) => {
                    setAdvanceRent(Number(e.target.value));
                  }}
                />
                <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
                  <LuDollarSign
                    size={16}
                    strokeWidth={2.5}
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label className="flex items-center gap-2 text-content font-normal">
                <IoIosCalendar className="text-primary/80" />
                Due Date
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    data-empty={!advanceRentDueOn}
                    className="data-[empty=true]:text-muted-foreground w-full h-12 justify-start text-left font-normal"
                  >
                    {advanceRentDueOn ? (
                      format(advanceRentDueOn, "EEEE, MMMM do", {
                        locale: enUS,
                      })
                    ) : (
                      <span className="text-muted-foreground text-base font-normal">
                        Pick a date
                      </span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={advanceRentDueOn}
                    onSelect={setAdvanceRentDueOn}
                    required
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>
      </div>
    </ScrollArea>
  );
}
