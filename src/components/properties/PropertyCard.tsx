import { Property } from "@/types/property";

interface Props {
  property: Property;
}

export default function PropertyCard({ property }: Props) {
  return (
    <div className="w-full border rounded-3xl bg-white p-4">
      <div className="w-full flex items-start justify-between">
        <div className="flex flex-col items-start">
          <h2 className="text-primary font-extrabold">
            {property.property_name}
          </h2>
          <span>{property.property_address1}</span>
        </div>
        <div className="flex flex-col items-end">
          <b>${property.property_rental_amount}</b>
          <span>per month</span>
        </div>
      </div>
    </div>
  );
}
