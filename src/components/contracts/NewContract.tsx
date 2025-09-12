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
import { CheckCircle, ChevronLeft, ChevronRight, Loader2 } from "lucide-react";

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
import MonthlyTermsForm from "./MonthlyTermsForm";
import AdditionalTermsForm from "./AdditionalTermsForm";
import { useNewContractStore } from "@/store/new-contract.store";
import { toast } from "sonner";
import api from "@/lib/axios";
import { format } from "date-fns";
import { useAuthStore } from "@/store/auth.store";

interface Props {
  onLoading: () => void;
}

export default function NewContract({ onLoading }: Props) {
  const {
    landlordId,
    tenantId,
    propertyId,
    isRented,
    firstMonthRent,
    firstMonthDueOn,
    advanceRentMonth,
    advanceRent,
    advanceRentDueOn,
    toFirstMonthRent,
    toLastMonthRent,
    toSecurityDeposit,
    toOther,
    isReadyToCreate,
    getMissingFields,
    leaseStartDate,
    leaseEndDate,
    leaseAgreementDueBy,
    lastMonthRent,
    lastMonthDueOn,
    securityDeposit,
    securityDepositDueOn,
    securityDepositAssociation,
    securityDepositAssociationDueOn,
    rentsafeDeposit,
    petDeposit,
    petDepositDueOn,
    petDepositRefundable,
    leasePreparedBy,
    totalRent,
    tenantWillPay,
    paymentDate,
    paymentTotalAmount,
    dayOfEachmonth,
    monthlyRent,
    petsAllowed,
    smokingAllowed,
    utilitiesExeption,
    associationDeposit,
    associationFees,
    associationAppDue,
    tenantPaysAssociationFee,
    serviceMemberTenant,
    maintenanceException,
    additionalTerms,
    resetContract,
  } = useNewContractStore();
  const { userLoggedIn } = useAuthStore();
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [loadingCreate, setLoadingCreate] = useState<boolean>(false);
  const [openForm, setOpenForm] = useState<boolean>(false);

  const handleCreateContract = async () => {
    setLoadingCreate(true);
    if (!isReadyToCreate) {
      const missingFields = getMissingFields();
      toast.warning(missingFields, {
        position: "top-right",
        duration: 3000,
      });
      return;
    }

    const response = await api.post("/lease_contracts", {
      landlord_id: landlordId,
      tenant_id: tenantId,
      property_id: propertyId,
      lease_furnished_status: isRented ? "Y" : "N",
      lease_start_date: format(leaseStartDate, "yyyy-MM-dd"),
      lease_end_date: format(leaseEndDate, "yyyy-MM-dd"),
      lease_due_to_complete: format(leaseAgreementDueBy, "yyyy-MM-dd"),
      lease_landlord_agree: leasePreparedBy === "landlord" ? "Y" : "N",
      lease_tenant_agree: leasePreparedBy === "tenant" ? "Y" : "N",

      lease_first_month_rent: firstMonthRent,
      lease_first_month_due_on: format(firstMonthDueOn, "yyyy-MM-dd"),
      lease_advance_rent_month: format(advanceRentMonth, "yyyy-MM-dd"),
      lease_advance_rent: advanceRent,
      lease_advance_rent_due: format(advanceRentDueOn, "yyyy-MM-dd"),
      lease_last_month_rent: lastMonthRent,
      lease_last_month_due_on: format(lastMonthDueOn, "yyyy-MM-dd"),
      lease_security_deposit: securityDeposit,
      lease_security_due_on: format(securityDepositDueOn, "yyyy-MM-dd"),
      xx: securityDepositAssociation,
      lease_association_due_on: format(
        securityDepositAssociationDueOn,
        "yyyy-MM-dd"
      ),
      lease_holder_deposit_amount: rentsafeDeposit,
      lease_pet_deposit: petDeposit,
      lease_pet_due_on: format(petDepositDueOn, "yyyy-MM-dd"),
      lease_pet_deposit_refundable: petDepositRefundable ? "Y" : "N",

      lease_to_first_month_rent: toFirstMonthRent,
      lease_to_last_month_rent: toLastMonthRent,
      lease_to_security_deposit: toSecurityDeposit,
      lease_to_other: toOther,
      lease_total_rent: totalRent,
      lease_pay_in_full_check: tenantWillPay === "full" ? "Y" : "N",
      lease_pay_monthly_check: tenantWillPay === "monthly" ? "Y" : "N",
      lease_pay_in_full_on: format(paymentDate, "yyyy-MM-dd"),
      lease_full_amount: paymentTotalAmount,
      lease_day_of_month: dayOfEachmonth,
      lease_monthly_rent: monthlyRent,
      lease_pets_allowed: petsAllowed ? "Y" : "N",
      lease_smoking_allowed: smokingAllowed ? "Y" : "N",

      lease_utilities_exception: utilitiesExeption,
      lease_association_deposit: associationDeposit,
      lease_association_fees: associationFees,
      lease_association_aproval: format(associationAppDue, "yyyy-MM-dd"),
      lease_tenant_will_pay_association_fee: tenantPaysAssociationFee
        ? "Y"
        : "N",
      lease_tenant_service_member: serviceMemberTenant ? "Y" : "N",
      lease_maintenance_exception: maintenanceException,
      lease_additional_terms: additionalTerms,

      lease_status: "Contract",
      broker_id: userLoggedIn?.user_id,
      lease_pets_condition: "",
      lease_tenant_will_pay: "",
      lease_to_first_month_rent_check: "",
      lease_to_last_month_rent_check: "",
      lease_to_security_deposit_check: "",
      lease_to_other_check: "",
      lease_deposit_holder: "",
      lease_due_before_occupancy: 80,
    });

    if (response.status === 200) {
      toast.success("Contract created successfully", {
        position: "top-right",
        duration: 3000,
      });
      setLoadingCreate(false);
      setOpenForm(false);
      resetContract();
      onLoading();
    } else {
      toast.error("Error creating contract", {
        position: "top-right",
        duration: 3000,
      });
    }
    setLoadingCreate(false);
  };

  return (
    <Drawer open={openForm} onOpenChange={setOpenForm}>
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
                onClick={resetContract}
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
                <StepperTrigger asChild>
                  <StepperIndicator />
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
              {currentStep === 3 && "Monthly Terms"}
              {currentStep === 4 && "Additional Terms"}
            </span>
          </div>
        </DrawerHeader>

        <div className="bg-[#F7F8FA] w-full h-full p-4">
          {currentStep === 1 && <LeaseDetailsForm />}
          {currentStep === 2 && <AmountsDueForm />}
          {currentStep === 3 && <MonthlyTermsForm />}
          {currentStep === 4 && <AdditionalTermsForm />}
        </div>

        <DrawerFooter className="border-t fixed bottom-0 right-0 left-0 w-screen bg-white flex-row justify-between">
          <div className="w-full flex items-center justify-between gap-4">
            {currentStep !== 1 && (
              <Button
                variant="outline"
                onClick={() => setCurrentStep((prev) => Math.max(1, prev - 1))}
                className="flex-1 bg-primary/10 border border-primary/30"
              >
                <ChevronLeft />
                Prev
              </Button>
            )}

            {currentStep === 4 ? (
              <Button
                variant="default"
                onClick={handleCreateContract}
                className="flex-1 bg-green-500 text-white hover:bg-green-500 hover:text-white"
              >
                {loadingCreate ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  <CheckCircle />
                )}
                Create Contract
              </Button>
            ) : (
              <Button
                variant="default"
                onClick={() => setCurrentStep((prev) => Math.min(4, prev + 1))}
                className="flex-1"
              >
                Next
                <ChevronRight />
              </Button>
            )}
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
