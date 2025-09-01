import { create } from "zustand";

interface NewContractStore {
  // step 1
  landlordId: string;
  tenantId: string;
  propertyId: string;
  isRented: boolean;
  setLandlordId: (id: string) => void;
  setTenantId: (id: string) => void;
  setPropertyId: (id: string) => void;
  setIsRented: (state: boolean) => void;

  // step 2
  firstMonthRent: number;
  firstMonthDueOn: Date;
  advanceRentMonth: Date;
  advanceRent: number;
  advanceRentDueOn: Date;
  setFirstMonthRent: (amount: number) => void;
  setFirstMonthDueOn: (date: Date) => void;
  setAdvanceRentMonth: (date: Date) => void;
  setAdvanceRent: (amount: number) => void;
  setAdvanceRentDueOn: (date: Date) => void;

  // step 3
  toFirstMonthRent: number;
  toLastMonthRent: number;
  toSecurityDeposit: number;
  toOther: number;
  setToFirstMonthRent: (amount: number) => void;
  setToLastMonthRent: (amount: number) => void;
  setToSecurityDeposit: (amount: number) => void;
  setToOther: (amount: number) => void;

  // step 4
  utilitiesExeption: string;
  associationDeposit: number;
  associationFees: number;
  setUtilitiesExeption: (amount: string) => void;
  setAssociationDeposit: (amount: number) => void;
  setAssociationFees: (amount: number) => void;

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
  setLandlordId: (id) => set({ landlordId: id }),
  setTenantId: (id) => set({ tenantId: id }),
  setPropertyId: (id) => set({ propertyId: id }),
  setIsRented: (state) => set({ isRented: state }),

  // step 2
  firstMonthRent: 0,
  firstMonthDueOn: new Date(),
  advanceRentMonth: new Date(),
  advanceRent: 0,
  advanceRentDueOn: new Date(),
  setFirstMonthRent: (amount) => set({ firstMonthRent: amount }),
  setFirstMonthDueOn: (date) => set({ firstMonthDueOn: date }),
  setAdvanceRentMonth: (date) => set({ advanceRentMonth: date }),
  setAdvanceRent: (amount) => set({ advanceRent: amount }),
  setAdvanceRentDueOn: (date) => set({ advanceRentDueOn: date }),

  // step 3
  toFirstMonthRent: 0,
  toLastMonthRent: 0,
  toSecurityDeposit: 0,
  toOther: 0,
  setToFirstMonthRent: (amount) => set({ toFirstMonthRent: amount }),
  setToLastMonthRent: (amount) => set({ toLastMonthRent: amount }),
  setToSecurityDeposit: (amount) => set({ toSecurityDeposit: amount }),
  setToOther: (amount) => set({ toOther: amount }),

  // step 4
  utilitiesExeption: "",
  associationDeposit: 0,
  associationFees: 0,
  setUtilitiesExeption: (amount) => set({ utilitiesExeption: amount }),
  setAssociationDeposit: (amount) => set({ associationDeposit: amount }),
  setAssociationFees: (amount) => set({ associationFees: amount }),

  isReadyToCreate: () => {
    const state = get();
    return requiredFields.every(({ key }) => {
      const value = (state as any)[key];
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
        const value = (state as any)[key];
        if (typeof value === "string") return value.trim() === "";
        if (typeof value === "number") return value === 0;
        if (value instanceof Date) return isNaN(value.getTime());
        return value === null || value === undefined;
      })
      .map(({ label }) => label);
  },
}));
