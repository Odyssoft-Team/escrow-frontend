export interface Property {
  broker_id: number;
  created_at: string; // También podría ser Date, depende de cómo se maneje en tu app
  landlord_id: number;
  property_address1: string;
  property_address2: string;
  property_city: string;
  property_description: string;
  property_id: number;
  property_name: string;
  property_postal_code: string;
  property_rental_amount: number;
  property_state: string;
  property_status: "Available" | "Rented" | "Pending" | string; // lo puedes acotar más si conoces los posibles estados
  property_xcoord: string; // Si lo vas a usar como número, cámbialo a number
  property_ycoord: string; // Igual que arriba
  tenant_id: number | null;
  updated_at: string; // o Date2
}
