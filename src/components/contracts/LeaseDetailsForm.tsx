import { FaCircleExclamation } from "react-icons/fa6";

export default function LeaseDetailsForm() {
  return (
    <div className="w-full flex flex-col gap-2 bg-white border rounded-xl p-2">
      <div className="flex items-center justify-start gap-4">
        <FaCircleExclamation className="text-primary size-6" />
        <div className="flex flex-col items-start gap-0 leading-[1]">
          <h2 className="font-bold text-primary text-xl">Lease Details</h2>
          <p className="text-content text-sm">Basic contract information</p>
        </div>
      </div>
    </div>
  );
}
