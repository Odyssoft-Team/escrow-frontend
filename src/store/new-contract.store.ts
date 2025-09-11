import { create } from "zustand";

interface NewContractStore {
  // step 1
  landlordId: string;
  tenantId: string;
  propertyId: string;
  isRented: boolean;
  leaseStartDate: Date;
  leaseEndDate: Date;
  leaseAgreementDueBy: Date;
  leasePreparedBy: string;
  setLandlordId: (id: string) => void;
  setTenantId: (id: string) => void;
  setPropertyId: (id: string) => void;
  setIsRented: (state: boolean) => void;
  setLeaseStartDate: (date: Date) => void;
  setLeaseEndDate: (date: Date) => void;
  setLeaseAgreementDueBy: (date: Date) => void;
  setLeasePreparedBy: (name: string) => void;

  // step 2
  firstMonthRent: number;
  firstMonthDueOn: Date;
  advanceRentMonth: Date;
  advanceRent: number;
  advanceRentDueOn: Date;
  lastMonthRent: number;
  lastMonthDueOn: Date;
  securityDeposit: number;
  securityDepositDueOn: Date;
  securityDepositAssociation: number;
  securityDepositAssociationDueOn: Date;
  rentsafeDeposit: number;
  petDeposit: number;
  petDepositDueOn: Date;
  petDepositRefundable: boolean;
  setFirstMonthRent: (amount: number) => void;
  setFirstMonthDueOn: (date: Date) => void;
  setAdvanceRentMonth: (date: Date) => void;
  setAdvanceRent: (amount: number) => void;
  setAdvanceRentDueOn: (date: Date) => void;
  setLastMonthRent: (amount: number) => void;
  setLastMonthDueOn: (date: Date) => void;
  setSecurityDeposit: (amount: number) => void;
  setSecurityDepositDueOn: (date: Date) => void;
  setSecurityDepositAssociation: (amount: number) => void;
  setSecurityDepositAssociationDueOn: (date: Date) => void;
  setRentsafeDeposit: (amount: number) => void;
  setPetDeposit: (amount: number) => void;
  setPetDepositDueOn: (date: Date) => void;
  setPetDepositRefundable: (state: boolean) => void;

  // step 3
  toFirstMonthRent: number;
  toLastMonthRent: number;
  toSecurityDeposit: number;
  toOther: number;
  totalRent: number;
  tenantWillPay: string;
  dayOfEachmonth: string;
  monthlyRent: number;
  paymentDate: Date;
  paymentTotalAmount: number;
  petsAllowed: boolean;
  smokingAllowed: boolean;
  setToFirstMonthRent: (amount: number) => void;
  setToLastMonthRent: (amount: number) => void;
  setToSecurityDeposit: (amount: number) => void;
  setToOther: (amount: number) => void;
  setTotalRent: (amount: number) => void;
  setTenantWillPay: (amount: string) => void;
  setDayOfEachmonth: (amount: string) => void;
  setMonthlyRent: (amount: number) => void;
  setPaymentDate: (date: Date) => void;
  setPaymentTotalAmount: (amount: number) => void;
  setPetsAllowed: (state: boolean) => void;
  setSmokingAllowed: (state: boolean) => void;

  // step 4
  utilitiesExeption: string;
  associationDeposit: number;
  associationFees: number;
  associationAppDue: Date;
  tenantPaysAssociationFee: boolean;
  serviceMemberTenant: boolean;
  maintenanceException: string;
  additionalTerms: string;
  setUtilitiesExeption: (amount: string) => void;
  setAssociationDeposit: (amount: number) => void;
  setAssociationFees: (amount: number) => void;
  setAssociationAppDue: (date: Date) => void;
  setTenantPaysAssociationFee: (state: boolean) => void;
  setServiceMemberTenant: (state: boolean) => void;
  setMaintenanceException: (amount: string) => void;
  setAdditionalTerms: (amount: string) => void;

  isReadyToCreate: () => boolean;
  getMissingFields: () => string[];
}

const requiredFields = [
  { key: "landlordId", label: "Landlord" },
  { key: "tenantId", label: "Tenant" },
  { key: "propertyId", label: "Property" },
  { key: "firstMonthRent", label: "First month rent" },
  { key: "firstMonthDueOn", label: "First month due on" },
  { key: "toFirstMonthRent", label: "To first month rent" },
  { key: "toLastMonthRent", label: "To last month rent" },
  { key: "toSecurityDeposit", label: "To security deposit" },
  { key: "utilitiesExeption", label: "Utilities exeption" },
  { key: "associationDeposit", label: "Association deposit" },
  { key: "associationFees", label: "Association fees" },
];

export const useNewContractStore = create<NewContractStore>((set, get) => ({
  // step 1
  landlordId: "",
  tenantId: "",
  propertyId: "",
  isRented: false,
  leaseStartDate: new Date(),
  leaseEndDate: new Date(),
  leaseAgreementDueBy: new Date(),
  leasePreparedBy: "landlord",
  setLandlordId: (id) => set({ landlordId: id }),
  setTenantId: (id) => set({ tenantId: id }),
  setPropertyId: (id) => set({ propertyId: id }),
  setIsRented: (state) => set({ isRented: state }),
  setLeaseStartDate: (date) => set({ leaseStartDate: date }),
  setLeaseEndDate: (date) => set({ leaseEndDate: date }),
  setLeaseAgreementDueBy: (date) => set({ leaseAgreementDueBy: date }),
  setLeasePreparedBy: (name) => set({ leasePreparedBy: name }),

  // step 2
  firstMonthRent: 0,
  firstMonthDueOn: new Date(),
  advanceRentMonth: new Date(),
  advanceRent: 0,
  advanceRentDueOn: new Date(),
  lastMonthRent: 0,
  lastMonthDueOn: new Date(),
  securityDeposit: 0,
  securityDepositDueOn: new Date(),
  securityDepositAssociation: 0,
  securityDepositAssociationDueOn: new Date(),
  rentsafeDeposit: 0,
  petDeposit: 0,
  petDepositDueOn: new Date(),
  petDepositRefundable: false,
  setFirstMonthRent: (amount) => set({ firstMonthRent: amount }),
  setFirstMonthDueOn: (date) => set({ firstMonthDueOn: date }),
  setAdvanceRentMonth: (date) => set({ advanceRentMonth: date }),
  setAdvanceRent: (amount) => set({ advanceRent: amount }),
  setAdvanceRentDueOn: (date) => set({ advanceRentDueOn: date }),
  setLastMonthRent: (amount) => set({ lastMonthRent: amount }),
  setLastMonthDueOn: (date) => set({ lastMonthDueOn: date }),
  setSecurityDeposit: (amount) => set({ securityDeposit: amount }),
  setSecurityDepositDueOn: (date) => set({ securityDepositDueOn: date }),
  setSecurityDepositAssociation: (date) =>
    set({ securityDepositAssociation: date }),
  setSecurityDepositAssociationDueOn: (amount) =>
    set({ securityDepositAssociationDueOn: amount }),
  setRentsafeDeposit: (amount) => set({ rentsafeDeposit: amount }),
  setPetDeposit: (amount) => set({ petDeposit: amount }),
  setPetDepositDueOn: (date) => set({ petDepositDueOn: date }),
  setPetDepositRefundable: (state) => set({ petDepositRefundable: state }),

  // step 3
  toFirstMonthRent: 0,
  toLastMonthRent: 0,
  toSecurityDeposit: 0,
  toOther: 0,
  totalRent: 0,
  tenantWillPay: "full",
  dayOfEachmonth: "",
  monthlyRent: 0,
  paymentDate: new Date(),
  paymentTotalAmount: 0,
  petsAllowed: false,
  smokingAllowed: false,
  setToFirstMonthRent: (amount) => set({ toFirstMonthRent: amount }),
  setToLastMonthRent: (amount) => set({ toLastMonthRent: amount }),
  setToSecurityDeposit: (amount) => set({ toSecurityDeposit: amount }),
  setToOther: (amount) => set({ toOther: amount }),
  setTotalRent: (amount) => set({ totalRent: amount }),
  setTenantWillPay: (amount) => set({ tenantWillPay: amount }),
  setDayOfEachmonth: (amount) => set({ dayOfEachmonth: amount }),
  setMonthlyRent: (amount) => set({ monthlyRent: amount }),
  setPaymentDate: (date) => set({ paymentDate: date }),
  setPaymentTotalAmount: (amount) => set({ paymentTotalAmount: amount }),
  setPetsAllowed: (state) => set({ petsAllowed: state }),
  setSmokingAllowed: (state) => set({ smokingAllowed: state }),

  // step 4
  utilitiesExeption: "",
  associationDeposit: 0,
  associationFees: 0,
  associationAppDue: new Date(),
  tenantPaysAssociationFee: false,
  serviceMemberTenant: false,
  maintenanceException: "",
  additionalTerms: "",
  setUtilitiesExeption: (amount) => set({ utilitiesExeption: amount }),
  setAssociationDeposit: (amount) => set({ associationDeposit: amount }),
  setAssociationFees: (amount) => set({ associationFees: amount }),
  setAssociationAppDue: (date) => set({ associationAppDue: date }),
  setTenantPaysAssociationFee: (state) =>
    set({ tenantPaysAssociationFee: state }),
  setServiceMemberTenant: (state) => set({ serviceMemberTenant: state }),
  setMaintenanceException: (amount) => set({ maintenanceException: amount }),
  setAdditionalTerms: (amount) => set({ additionalTerms: amount }),

  isReadyToCreate: () => {
    const state = get();
    return requiredFields.every(({ key }) => {
      const value = state[key as keyof NewContractStore];
      if (typeof value === "string") return value.trim() !== "";
      if (typeof value === "number") return value !== 0;
      if (value instanceof Date) return !isNaN(value.getTime());
      return value !== null && value !== undefined;
    });
  },

  getMissingFields: () => {
    const state = get();
    return requiredFields
      .filter(({ key }) => {
        const value = state[key as keyof NewContractStore];
        if (typeof value === "string") return value.trim() === "";
        if (typeof value === "number") return value === 0;
        if (value instanceof Date) return isNaN(value.getTime());
        return value === null || value === undefined;
      })
      .map(({ label }) => label);
  },
}));
