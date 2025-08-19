export interface Contract {
  broker_id: number;
  landlord_id: number;
  lease_advance_rent: number;
  lease_advance_rent_due: string; // e.g. "2025-07-28"
  lease_advance_rent_month: string; // e.g. "August 2025"
  lease_association_aproval: string; // e.g. "2025-07-31"
  lease_association_deposit: number;
  lease_association_due_on: string;
  lease_association_fees: number;
  lease_contract_link: string | null;
  lease_created_at: string; // e.g. "2025-07-25T09:40:53"
  lease_day_of_month: string; // e.g. "1st of the month"
  lease_deposit_holder: string | null;
  lease_due_before_occupancy: number;
  lease_due_to_complete: string; // e.g. "2025-07-28"
  lease_end_date: string;
  lease_envelope_id: string;
  lease_first_month_due_on: string;
  lease_first_month_rent: number;
  lease_full_amount: number;
  lease_furnished_status: string; // e.g. "N"
  lease_holder_deposit_amount: number;
  lease_id: number;
  lease_landlord_agree: string; // e.g. "N"
  lease_last_month_due_on: string;
  lease_last_month_rent: number;
  lease_letter_sent: string; // e.g. "N"
  lease_maintenance_exception: string;
  lease_monthly_rent: number;
  lease_pay_in_full_check: string | null;
  lease_pay_in_full_on: string;
  lease_pay_monthly_check: string | null;
  lease_payment_reference: string | null;
  lease_pet_deposit: number;
  lease_pet_deposit_refundable: string; // "N"
  lease_pet_due_on: string;
  lease_pets_allowed: string; // "N"
  lease_pets_condition: string | null;
  lease_qr_code_url: string | null;
  lease_security_deposit: number;
  lease_security_due_on: string;
  lease_smoking_allowed: string; // "N"
  lease_start_date: string;
  lease_status: string; // e.g. "Contract"
  lease_tenant_agree: string; // "N"
  lease_tenant_service_member: string; // "N"
  lease_tenant_will_pay_association_fee: string | null;
  lease_to_first_month_rent: number;
  lease_to_first_month_rent_check: string | null;
  lease_to_last_month_rent: number;
  lease_to_last_month_rent_check: string | null;
  lease_to_other: number;
  lease_to_other_check: string | null;
  lease_to_security_deposit: number;
  lease_to_security_deposit_check: string | null;
  lease_total_rent: number;
  lease_updated_at: string;
  lease_utilities_exception: string;
  property_id: number;
  tenant_id: number;
}
