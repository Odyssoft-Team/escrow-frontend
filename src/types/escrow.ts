export interface EscrowData {
  property_name: string; // Nombre de la propiedad [web:1]
  lease_holder_deposit_amount: number; // Monto del depósito [web:1]
  lease_status: string; // Estado del contrato [web:1]
  landlord: string; // Nombre del arrendador [web:1]
  tenant: string; // Nombre del arrendatario [web:1]
  broker: string; // Nombre del corredor [web:1]
  lease_start_date: string; // Fecha de inicio de alquiler (YYYY-MM-DD) [web:1]
  lease_end_date: string; // Fecha de fin de alquiler (YYYY-MM-DD) [web:1]
  rent: number; // Renta mensual [web:1]
}
