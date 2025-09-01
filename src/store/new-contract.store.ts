import { create } from "zustand";

interface NewContractStore {
  landlordId: string;
  tenantId: string;
  propertyId: string;
  isRented: boolean;
  setLandlordId: (id: string) => void;
  setTenantId: (id: string) => void;
  setPropertyId: (id: string) => void;
  setIsRented: (state: boolean) => void;

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

  toFirstMonthRent: number;
  toLastMonthRent: number;
  toSecurityDeposit: number;
  toOther: number;
  setToFirstMonthRent: (amount: number) => void;
  setToLastMonthRent: (amount: number) => void;
  setToSecurityDeposit: (amount: number) => void;
  setToOther: (amount: number) => void;
}

export const useNewContractStore = create<NewContractStore>((set) => ({
  landlordId: "",
  tenantId: "",
  propertyId: "",
  isRented: false,
  setLandlordId: (id) => set({ landlordId: id }),
  setTenantId: (id) => set({ tenantId: id }),
  setPropertyId: (id) => set({ propertyId: id }),
  setIsRented: (state) => set({ isRented: state }),

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

  toFirstMonthRent: 0,
  toLastMonthRent: 0,
  toSecurityDeposit: 0,
  toOther: 0,
  setToFirstMonthRent: (amount) => set({ toFirstMonthRent: amount }),
  setToLastMonthRent: (amount) => set({ toLastMonthRent: amount }),
  setToSecurityDeposit: (amount) => set({ toSecurityDeposit: amount }),
  setToOther: (amount) => set({ toOther: amount }),
}));
