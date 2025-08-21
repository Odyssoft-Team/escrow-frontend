"use client";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

import { useState } from "react";

import { FaPlus } from "react-icons/fa";

const steps = [1, 2, 3, 4];

import {
  Stepper,
  StepperIndicator,
  StepperItem,
  StepperSeparator,
  StepperTrigger,
} from "@/components/ui/stepper";
import LeaseDetailsForm from "./LeaseDetailsForm";
import AmountsDueForm from "./AmountsDueForm";

export default function NewContract() {
  const [currentStep, setCurrentStep] = useState<number>(1);
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
        <DrawerHeader className="pt-2 pb-4 flex justify-between flex-col border-b">
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
              New Contract
            </DrawerTitle>
          </div>

          <Stepper
            defaultValue={2}
            className="mt-5 mb-0 pb-0 px-5"
            value={currentStep}
            onValueChange={setCurrentStep}
          >
            {steps.map((step) => (
              <StepperItem key={step} step={step} className="not-last:flex-1">
                <StepperTrigger>
                  <StepperIndicator asChild>{step}</StepperIndicator>
                </StepperTrigger>
                {step < steps.length && <StepperSeparator />}
              </StepperItem>
            ))}
          </Stepper>

          <div className="w-full mt-6">
            <p className="font-medium leading-[1] text-primary text-sm">
              Step {currentStep} of 4
            </p>
            <span className="text-xs text-content">
              {currentStep === 1 && "Lease Details"}
              {currentStep === 2 && "Amounts Due"}
              {currentStep === 3 && "Tenant Details"}
              {currentStep === 4 && "Escrow Account"}
            </span>
          </div>
        </DrawerHeader>

        <div className="bg-[#F7F8FA] w-full h-full p-4">
          {currentStep === 1 && <LeaseDetailsForm />}
          {currentStep === 2 && <AmountsDueForm />}
        </div>

        <DrawerFooter className="border-t fixed bottom-0 w-full bg-white">
          <Button variant="default" onClick={() => setCurrentStep(2)}>
            Next
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
