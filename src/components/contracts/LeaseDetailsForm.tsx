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
import { FaRegBuilding } from "react-icons/fa";
import { RiArmchairFill } from "react-icons/ri";
import { ScrollArea } from "../ui/scroll-area";
import { Switch } from "@/components/ui/switch";
import api from "@/lib/axios";
import { useEffect, useState } from "react";
import { UserData } from "@/types/user";
import { Property } from "@/types/property";
import { useNewContractStore } from "@/store/new-contract.store";

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

    console.log("response properties", response);

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
  } = useNewContractStore();

  return (
    <ScrollArea className="h-[calc(100vh-350px)] w-full">
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
        </div>
      </div>
    </ScrollArea>
  );
}
