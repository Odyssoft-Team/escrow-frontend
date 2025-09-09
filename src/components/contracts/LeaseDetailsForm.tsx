"use client";

import { FaCircleExclamation } from "react-icons/fa6";
import { PiUserCircleFill, PiUserCirclePlusFill } from "react-icons/pi";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaCheck, FaRegBuilding, FaSignature } from "react-icons/fa";
import { RiArmchairFill } from "react-icons/ri";
import { ScrollArea } from "../ui/scroll-area";
import { Switch } from "@/components/ui/switch";
import api from "@/lib/axios";
import { useEffect, useState } from "react";
import { UserData } from "@/types/user";
import { Property } from "@/types/property";
import { useNewContractStore } from "@/store/new-contract.store";
import { IoIosCalendar } from "react-icons/io";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import { format } from "date-fns";
import { enUS } from "date-fns/locale";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";

export default function LeaseDetailsForm() {
  const [listUsers, setListUsers] = useState<UserData[]>([]);
  const handleGetUsers = async () => {
    const response = await api.get("/users", {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200) {
      setListUsers(response.data);
    } else {
      console.log(response);
      setListUsers([]);
    }
  };

  const [listProperties, setListProperties] = useState<Property[]>([]);
  const handleGetProperties = async () => {
    const response = await api.get("/properties", {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200) {
      setListProperties(response.data);
    } else {
      console.log(response);
      setListProperties([]);
    }
  };

  useEffect(() => {
    handleGetUsers();
    handleGetProperties();
  }, []);

  const {
    tenantId,
    landlordId,
    propertyId,
    isRented,
    setLandlordId,
    setTenantId,
    setPropertyId,
    setIsRented,
    leaseStartDate,
    leaseEndDate,
    leaseAgreementDueBy,
    setLeaseStartDate,
    setLeaseEndDate,
    setLeaseAgreementDueBy,
    leasePreparedBy,
    setLeasePreparedBy,
  } = useNewContractStore();

  return (
    <ScrollArea className="h-[calc(100vh-350px)] w-full pb-6">
      <div className="w-full flex flex-col gap-2 ">
        <div className="flex items-center justify-start gap-4">
          <FaCircleExclamation className="text-primary size-6" />
          <div className="flex flex-col items-start gap-0 leading-[1]">
            <h2 className="font-bold text-primary text-2xl">Lease Details</h2>
            <p className="text-content text-sm">Basic contract information</p>
          </div>
        </div>

        <div className="w-full p-4 bg-white border rounded-xl flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <label className="flex items-center gap-2 text-content font-normal">
              <PiUserCircleFill className="text-primary/80" />
              Landlord *
            </label>
            <Select value={landlordId} onValueChange={setLandlordId}>
              <SelectTrigger className="w-full !h-12">
                <SelectValue placeholder="Select Landlord" />
              </SelectTrigger>
              <SelectContent>
                {listUsers
                  .filter((user) => user.user_role === "landlord")
                  .map((user) => (
                    <SelectItem
                      key={user.user_id}
                      value={String(user.user_id)}
                      className="capitalize"
                    >
                      {user.user_first_name} {user.user_last_name}
                    </SelectItem>
                  ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-1">
            <label className="flex items-center gap-2 text-content font-normal">
              <PiUserCirclePlusFill className="text-primary/80" />
              Tenant *
            </label>
            <Select value={tenantId} onValueChange={setTenantId}>
              <SelectTrigger className="w-full !h-12">
                <SelectValue placeholder="Select Tenant" />
              </SelectTrigger>
              <SelectContent>
                {listUsers
                  .filter((user) => user.user_role === "tenant")
                  .map((user) => (
                    <SelectItem
                      key={user.user_id}
                      value={String(user.user_id)}
                      className="capitalize"
                    >
                      {user.user_first_name} {user.user_last_name}
                    </SelectItem>
                  ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-1">
            <label className="flex items-center gap-2 text-content font-normal">
              <FaRegBuilding className="text-primary/80" />
              Property *
            </label>
            <Select value={propertyId} onValueChange={setPropertyId}>
              <SelectTrigger className="w-full !h-12">
                <SelectValue placeholder="Select Property" />
              </SelectTrigger>
              <SelectContent>
                {listProperties.map((property) => (
                  <SelectItem
                    key={property.property_id}
                    value={String(property.property_id)}
                    className="capitalize"
                  >
                    {property.property_name}
                  </SelectItem>
                ))}
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

            <Switch checked={isRented} onCheckedChange={setIsRented} />
          </div>

          <div className="flex flex-col gap-1">
            <label className="flex items-center gap-2 text-content font-normal">
              <IoIosCalendar className="text-primary/80" />
              Lease Start Date *
            </label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  data-empty={!leaseStartDate}
                  className="data-[empty=true]:text-muted-foreground w-full h-12 justify-start text-left font-normal"
                >
                  {leaseStartDate ? (
                    <span className="truncate">
                      {format(leaseStartDate, "MMM d, yyyy", {
                        locale: enUS,
                      })}
                    </span>
                  ) : (
                    <span className="text-muted-foreground text-base font-normal">
                      Pick a date
                    </span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={leaseStartDate}
                  onSelect={setLeaseStartDate}
                  required
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="flex flex-col gap-1">
            <label className="flex items-center gap-2 text-content font-normal">
              <IoIosCalendar className="text-primary/80" />
              Lease End Date *
            </label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  data-empty={!leaseEndDate}
                  className="data-[empty=true]:text-muted-foreground w-full h-12 justify-start text-left font-normal"
                >
                  {leaseEndDate ? (
                    <span className="truncate">
                      {format(leaseEndDate, "MMM d, yyyy", {
                        locale: enUS,
                      })}
                    </span>
                  ) : (
                    <span className="text-muted-foreground text-base font-normal">
                      Pick a date
                    </span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={leaseEndDate}
                  onSelect={setLeaseEndDate}
                  required
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="flex flex-col gap-1">
            <label className="flex items-center gap-2 text-content font-normal">
              <IoIosCalendar className="text-primary/80" />
              Lease agreement due by
            </label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  data-empty={!leaseAgreementDueBy}
                  className="data-[empty=true]:text-muted-foreground w-full h-12 justify-start text-left font-normal"
                >
                  {leaseAgreementDueBy ? (
                    <span className="truncate">
                      {format(leaseAgreementDueBy, "MMM d, yyyy", {
                        locale: enUS,
                      })}
                    </span>
                  ) : (
                    <span className="text-muted-foreground text-base font-normal">
                      Pick a date
                    </span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={leaseAgreementDueBy}
                  onSelect={setLeaseAgreementDueBy}
                  required
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>

        <div className="bg-white p-4 border rounded-xl flex flex-col gap-6 mb-16">
          <div className="flex items-center gap-2">
            {/* Puedes sustituir por tu ícono preferido */}
            <FaSignature className="size-5 text-blue-700" />
            <span className="text-blue-700 font-semibold text-lg">
              Contract Preparation
            </span>
          </div>
          <div>
            <span className="font-medium">Lease prepared by:</span>
            <RadioGroup
              value={leasePreparedBy}
              onValueChange={setLeasePreparedBy}
              className="mt-2 space-y-1"
            >
              <div
                className="flex items-center gap-3 px-4 h-10 bg-gray-50 rounded-lg border border-gray-300"
                data-state={leasePreparedBy === "landlord" ? "checked" : ""}
              >
                <RadioGroupItem
                  value="landlord"
                  id="landlord"
                  className="peer"
                />
                <Label
                  htmlFor="landlord"
                  className="cursor-pointer peer-data-[state=checked]:font-semibold"
                >
                  Landlord
                </Label>
                {leasePreparedBy === "landlord" && (
                  <span className="ml-auto text-green-600">
                    {/* Check icon */}
                    <FaCheck className="size-3" />
                  </span>
                )}
              </div>
              <div
                className="flex items-center gap-3 px-4 h-10 bg-gray-50 rounded-lg border border-gray-300"
                data-state={leasePreparedBy === "tenant" ? "checked" : ""}
              >
                <RadioGroupItem value="tenant" id="tenant" className="peer" />
                <Label
                  htmlFor="tenant"
                  className="cursor-pointer peer-data-[state=checked]:font-semibold"
                >
                  Tenant
                </Label>
                {leasePreparedBy === "tenant" && (
                  <span className="ml-auto text-green-600">
                    {/* Check icon */}
                    <FaCheck className="size-3" />
                  </span>
                )}
              </div>
            </RadioGroup>
          </div>
        </div>
      </div>
    </ScrollArea>
  );
}
