"use client";

import { IoCard, IoEllipsisHorizontalCircle } from "react-icons/io5";
import { ScrollArea } from "../ui/scroll-area";
import { FaChartPie } from "react-icons/fa";
import { Input } from "../ui/input";
import { LuDollarSign } from "react-icons/lu";
import { IoIosCalendar } from "react-icons/io";
import { FaShield } from "react-icons/fa6";
import { useNewContractStore } from "@/store/new-contract.store";
import { useState } from "react"; // Importamos useState para manejar el estado local

export default function MonthlyTermsForm() {
  const {
    toFirstMonthRent,
    toLastMonthRent,
    toSecurityDeposit,
    toOther,
    setToFirstMonthRent,
    setToLastMonthRent,
    setToSecurityDeposit,
    setToOther,
  } = useNewContractStore();

  // Estados locales para manejar el valor temporal durante la edición
  const [tempToFirstMonthRent, setTempToFirstMonthRent] = useState(
    toFirstMonthRent.toString()
  );
  const [tempToLastMonthRent, setTempToLastMonthRent] = useState(
    toLastMonthRent.toString()
  );
  const [tempToSecurityDeposit, setTempToSecurityDeposit] = useState(
    toSecurityDeposit.toString()
  );
  const [tempToOther, setTempToOther] = useState(toOther.toString());

  const [isToFirstMonthRentFocused, setIsToFirstMonthRentFocused] =
    useState(false);
  const [isToLastMonthRentFocused, setIsToLastMonthRentFocused] =
    useState(false);
  const [isToSecurityDepositFocused, setIsToSecurityDepositFocused] =
    useState(false);
  const [isToOtherFocused, setIsToOtherFocused] = useState(false);

  // Manejadores para To First Month Rent
  const handleToFirstMonthRentFocus = () => {
    setIsToFirstMonthRentFocused(true);
    if (toFirstMonthRent === 0) {
      setTempToFirstMonthRent("");
    }
  };

  const handleToFirstMonthRentBlur = (
    e: React.FocusEvent<HTMLInputElement>
  ) => {
    setIsToFirstMonthRentFocused(false);
    const value = e.target.value;

    if (value === "") {
      setToFirstMonthRent(0);
      setTempToFirstMonthRent("0");
    } else {
      const numValue = Number(value);
      setToFirstMonthRent(numValue);
      setTempToFirstMonthRent(numValue.toString());
    }
  };

  const handleToFirstMonthRentChange = (
    e: React.FocusEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    if (/^\d*\.?\d*$/.test(value)) {
      setTempToFirstMonthRent(value);
    }
  };

  // Manejadores para To Last Month Rent
  const handleToLastMonthRentFocus = () => {
    setIsToLastMonthRentFocused(true);
    if (toLastMonthRent === 0) {
      setTempToLastMonthRent("");
    }
  };

  const handleToLastMonthRentBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsToLastMonthRentFocused(false);
    const value = e.target.value;

    if (value === "") {
      setToLastMonthRent(0);
      setTempToLastMonthRent("0");
    } else {
      const numValue = Number(value);
      setToLastMonthRent(numValue);
      setTempToLastMonthRent(numValue.toString());
    }
  };

  const handleToLastMonthRentChange = (
    e: React.FocusEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    if (/^\d*\.?\d*$/.test(value)) {
      setTempToLastMonthRent(value);
    }
  };

  // Manejadores para To Security Deposit
  const handleToSecurityDepositFocus = () => {
    setIsToSecurityDepositFocused(true);
    if (toSecurityDeposit === 0) {
      setTempToSecurityDeposit("");
    }
  };

  const handleToSecurityDepositBlur = (
    e: React.FocusEvent<HTMLInputElement>
  ) => {
    setIsToSecurityDepositFocused(false);
    const value = e.target.value;

    if (value === "") {
      setToSecurityDeposit(0);
      setTempToSecurityDeposit("0");
    } else {
      const numValue = Number(value);
      setToSecurityDeposit(numValue);
      setTempToSecurityDeposit(numValue.toString());
    }
  };

  const handleToSecurityDepositChange = (
    e: React.FocusEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    if (/^\d*\.?\d*$/.test(value)) {
      setTempToSecurityDeposit(value);
    }
  };

  // Manejadores para To Other
  const handleToOtherFocus = () => {
    setIsToOtherFocused(true);
    if (toOther === 0) {
      setTempToOther("");
    }
  };

  const handleToOtherBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsToOtherFocused(false);
    const value = e.target.value;

    if (value === "") {
      setToOther(0);
      setTempToOther("0");
    } else {
      const numValue = Number(value);
      setToOther(numValue);
      setTempToOther(numValue.toString());
    }
  };

  const handleToOtherChange = (e: React.FocusEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*\.?\d*$/.test(value)) {
      setTempToOther(value);
    }
  };

  return (
    <ScrollArea className="h-[calc(100vh-370px)] w-full">
      <div className="w-full flex flex-col gap-2 ">
        <div className="flex items-center justify-start gap-4">
          <IoCard className="text-primary size-6" />
          <div className="flex flex-col items-start gap-0 leading-[1]">
            <h2 className="font-bold text-primary text-2xl">Monthly Terms</h2>
            <p className="text-content text-sm">Ongoing payment structure</p>
          </div>
        </div>

        <div className="w-full p-4 bg-white border rounded-xl flex flex-col gap-6">
          <h2 className="font-bold text-[#5953C6] text-lg flex items-center gap-2">
            <FaChartPie className="text-[#5953C6] size-6" />
            Deposit will be credited as follows
          </h2>

          <div className="flex flex-col gap-1">
            <label className="flex items-center gap-2 text-content font-normal">
              <span className="size-4 flex items-center justify-center rounded-full bg-primary/70 text-white text-xs">
                1
              </span>
              To First Month Rent
            </label>
            <div className="relative">
              <Input
                className="peer ps-9 h-12"
                placeholder="0.00"
                type="text"
                inputMode="decimal"
                value={
                  isToFirstMonthRentFocused
                    ? tempToFirstMonthRent
                    : toFirstMonthRent === 0
                      ? ""
                      : toFirstMonthRent.toString()
                }
                onChange={handleToFirstMonthRentChange}
                onFocus={handleToFirstMonthRentFocus}
                onBlur={handleToFirstMonthRentBlur}
              />
              <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
                <LuDollarSign size={16} strokeWidth={2.5} aria-hidden="true" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label className="flex items-center gap-2 text-content font-normal">
              <IoIosCalendar className="text-primary/80" />
              To Last Month Rent
            </label>
            <div className="relative">
              <Input
                className="peer ps-9 h-12"
                placeholder="0.00"
                type="text"
                inputMode="decimal"
                value={
                  isToLastMonthRentFocused
                    ? tempToLastMonthRent
                    : toLastMonthRent === 0
                      ? ""
                      : toLastMonthRent.toString()
                }
                onChange={handleToLastMonthRentChange}
                onFocus={handleToLastMonthRentFocus}
                onBlur={handleToLastMonthRentBlur}
              />
              <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
                <LuDollarSign size={16} strokeWidth={2.5} aria-hidden="true" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label className="flex items-center gap-2 text-content font-normal">
              <FaShield className="text-primary/80" />
              To Security Deposit
            </label>
            <div className="relative">
              <Input
                className="peer ps-9 h-12"
                placeholder="0.00"
                type="text"
                inputMode="decimal"
                value={
                  isToSecurityDepositFocused
                    ? tempToSecurityDeposit
                    : toSecurityDeposit === 0
                      ? ""
                      : toSecurityDeposit.toString()
                }
                onChange={handleToSecurityDepositChange}
                onFocus={handleToSecurityDepositFocus}
                onBlur={handleToSecurityDepositBlur}
              />
              <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
                <LuDollarSign size={16} strokeWidth={2.5} aria-hidden="true" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label className="flex items-center gap-2 text-content font-normal">
              <IoEllipsisHorizontalCircle className="text-primary/80" />
              To Other
            </label>
            <div className="relative">
              <Input
                className="peer ps-9 h-12"
                placeholder="0.00"
                type="text"
                inputMode="decimal"
                value={
                  isToOtherFocused
                    ? tempToOther
                    : toOther === 0
                      ? ""
                      : toOther.toString()
                }
                onChange={handleToOtherChange}
                onFocus={handleToOtherFocus}
                onBlur={handleToOtherBlur}
              />
              <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
                <LuDollarSign size={16} strokeWidth={2.5} aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollArea>
  );
}
