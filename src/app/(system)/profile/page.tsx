import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default async function EscrowPage() {
  return (
    <div className="bg-[#F7F8FA] px-4 flex flex-col gap-4 pb-[90px] pt-[20px]">
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-primary text-3xl leading-[1]">Profile</h1>
        <span className="flex items-center gap-1 font-medium text-primary/70 text-sm">
          <Avatar className="bg-primary text-white size-32">
            <AvatarFallback className="size-full bg-primary text-white font-bold text-5xl">
              J
            </AvatarFallback>
          </Avatar>
          <span className="bg-amber-500 text-white px-4 py-1 rounded-full">
            Broker
          </span>
        </span>
        <span className="flex flex-col items-center gap-1 font-medium text-primary/70 text-sm">
          <span className="text-primary px-4 py-1 rounded-full  font-bold text-3xl ">
            John TheBroker
          </span>
          <span className="text-neutral-700 font-medium text-lg px-4 py-1 rounded-full">
            rodney@networkcorp.net
          </span>
        </span>
      </div>

      <div className="w-full grid grid-cols-1 gap-4">
        <div className="w-full rounded-3xl bg-white p-4 shadow-2xl shadow-neutral-200">
          <div className="w-full flex items-start justify-between">
            <div className="flex flex-col items-start">
              <h2 className="text-primary font-extrabold">
                {/* {property.property_name} */}
                Personal Information
              </h2>
              {/* <span>{property.property_address1}</span> */}
              <div className="flex w-full bg-[#F7F8FA] rounded-2xl px-4 py-3">
                First Name
              </div>

              <div>Last Name</div>
              <div>Role</div>
            </div>
            <div className="flex flex-col items-end">
              {/* <b>${property.property_rental_amount}</b>
          <span>per month</span> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
