import { FaCircleExclamation } from "react-icons/fa6";
import { PiUserCircleFill, PiUserCirclePlusFill } from "react-icons/pi";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaRegBuilding } from "react-icons/fa";
import { RiArmchairFill } from "react-icons/ri";
import { ScrollArea } from "../ui/scroll-area";
import { Switch } from "@/components/ui/switch";

export default function LeaseDetailsForm() {
  return (
    <ScrollArea className="h-[calc(100vh-350px)] w-full">
      <div className="w-full flex flex-col gap-2 ">
        <div className="flex items-center justify-start gap-4">
          <FaCircleExclamation className="text-primary size-6" />
          <div className="flex flex-col items-start gap-0 leading-[1]">
            <h2 className="font-bold text-primary text-xl">Lease Details</h2>
            <p className="text-content text-sm">Basic contract information</p>
          </div>
        </div>

        <div className="w-full p-4 bg-white border rounded-xl flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="flex items-center gap-2 text-content font-normal">
              <PiUserCircleFill className="text-primary/80" />
              Landlord *
            </label>
            <Select>
              <SelectTrigger className="w-full !h-12">
                <SelectValue placeholder="Select Landlord" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">landlord 1</SelectItem>
                <SelectItem value="dark">landlord 2</SelectItem>
                <SelectItem value="system">landlord 3</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-1">
            <label className="flex items-center gap-2 text-content font-normal">
              <PiUserCirclePlusFill className="text-primary/80" />
              Tenant *
            </label>
            <Select>
              <SelectTrigger className="w-full !h-12">
                <SelectValue placeholder="Select Tenant" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">tenant 1</SelectItem>
                <SelectItem value="dark">tenant 2</SelectItem>
                <SelectItem value="system">tenant 3</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-1">
            <label className="flex items-center gap-2 text-content font-normal">
              <FaRegBuilding className="text-primary/80" />
              Property *
            </label>
            <Select>
              <SelectTrigger className="w-full !h-12">
                <SelectValue placeholder="Select Property" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">property 1</SelectItem>
                <SelectItem value="dark">property 2</SelectItem>
                <SelectItem value="system">property 3</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-between border rounded-xl p-4">
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <RiArmchairFill className="size-6 text-primary" />
                <h3 className="font-bold text-black">Furnished Property</h3>
              </div>
              <p className="font-light text-content text-sm">
                Is this property furnished?
              </p>
            </div>

            <Switch />
          </div>
        </div>
      </div>
    </ScrollArea>
  );
}
