"use client";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

import { useEffect, useState } from "react";

import { FaPlus } from "react-icons/fa";

export default function NewContract() {
  const [currentStep, setCurrentStep] = useState("1");

  useEffect(() => {
    setCurrentStep("1");
  }, [currentStep]);
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button
          variant="outline"
          className="bg-primary text-white fixed right-4 bottom-[90px] rounded-full py-6 !px-6 w-auto shadow-[0px_0px_35px_5px_rgba(37,51,131,0.50)] border-none text-base"
        >
          <FaPlus />
          New Contract
        </Button>
      </DrawerTrigger>
      <DrawerContent className="h-[90vh] !max-h-screen">
        <DrawerHeader className="pt-2 pb-0 flex justify-between flex-col border-b">
          <div className="w-full flex items-center justify-center relative">
            <DrawerClose asChild>
              <Button
                variant={"outline"}
                className="border-none bg-primary/10 text-primary rounded-full text-base !px-4 absolute left-0"
              >
                <ChevronLeft className="size-5" /> Cancel
              </Button>
            </DrawerClose>
            <DrawerTitle className="text-primary font-bold text-xl">
              New Property
            </DrawerTitle>
          </div>

          <div className="w-full mt-6">
            <p className="text-content text-base font-medium leading-[1]">
              {currentStep} of 3
            </p>
          </div>
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
}
