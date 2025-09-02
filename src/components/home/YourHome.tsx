import { Separator } from "../ui/separator";

export default function YourHome() {
  return (
    <div className="w-full rounded-xl border bg-white flex flex-col items-center gap-4 p-4 py-6 lg:max-w-[60%] xl:max-w-full">
      <div className="w-full flex items-center justify-between">
        <div className="flex flex-col w-fit">
          <h2 className="font-bold text-lg">Sunset Garden Apartments</h2>
          <span className="text-content text-sm">
            123 Maple Street, Unit 4B <br /> Austin, TX 78701
          </span>
        </div>
        <div className="flex flex-col items-center justify-center text-center w-fit">
          <span className="text-primary text-2xl font-bold">$2500</span>
          <span className="text-content text-xs">Monthly Rent</span>
        </div>
      </div>

      <Separator className="w-full" />

      <div className="w-full flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-sm text-content">Lease Period</span>
          <span className="font-bold text-sm">Jan 1 - Dec 31, 2025</span>
        </div>

        <div className="flex flex-col items-center justify-center">
          <span className="text-sm text-content">Status</span>
          <span className="font-bold text-sm bg-green-100 text-green-500 px-4 py-1 rounded-full">
            Active
          </span>
        </div>
      </div>
    </div>
  );
}
