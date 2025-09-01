"use client";

import { useState, useMemo, useEffect } from "react";
import { Property } from "@/types/property";
import PropertyCard from "@/components/properties/PropertyCard";
import { ChevronLeft, RefreshCcw, Search, X } from "lucide-react";
import { Input } from "../ui/input";
import { MdPinDrop, MdTag } from "react-icons/md";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Button } from "../ui/button";
import {
  FaBuilding,
  FaFlag,
  FaLocationArrow,
  FaRegBuilding,
  FaRegMap,
  FaSuitcase,
} from "react-icons/fa";
import { FaCircleCheck, FaGear } from "react-icons/fa6";
import {
  cn,
  formatCurrency,
  formatToDateTime,
  formatToShortDate,
} from "@/lib/utils";
import { BsExclamationCircle } from "react-icons/bs";
import { IoIosCalendar } from "react-icons/io";
import { LuCalendarCog, LuText } from "react-icons/lu";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { TbLocation, TbWorldLatitude, TbWorldLongitude } from "react-icons/tb";
import {
  PiCityLight,
  PiClockCounterClockwiseBold,
  PiUserCircleFill,
  PiUserCircleGearFill,
} from "react-icons/pi";
import { FiFileText, FiHash } from "react-icons/fi";
import { RiEdit2Fill } from "react-icons/ri";
import EditProperty from "./EditProperty";
import api from "@/lib/axios";
import { usePropertiesStore } from "@/store/properties";

interface PropertiesListProps {
  properties: Property[];
}

export function PropertiesList({ properties }: PropertiesListProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [openEdit, setOpenEdit] = useState(false);
  const [listProperties, setListProperties] = useState<Property[]>(properties);
  const { reloadData } = usePropertiesStore();

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
    handleGetProperties();
    setOpenEdit(false);
    setOpenPropertyDetails(false);
  }, [reloadData]);

  const filteredProperties = useMemo(() => {
    if (!searchTerm.trim()) return listProperties;

    return listProperties.filter((property) => {
      const searchLower = searchTerm.toLowerCase();
      return (
        property.property_name?.toLowerCase().includes(searchLower) ||
        property.property_description?.toLowerCase().includes(searchLower) ||
        property.property_address1?.toLowerCase().includes(searchLower) ||
        property.property_city?.toLowerCase().includes(searchLower) ||
        property.property_state?.toLowerCase().includes(searchLower)
      );
    });
  }, [listProperties, searchTerm]);

  const clearSearch = () => setSearchTerm("");

  const [propertySelected, setPropertySelected] = useState<Property | null>(
    null
  );
  const [openPropertyDetails, setOpenPropertyDetails] =
    useState<boolean>(false);

  const handlePropertySelected = (property: Property) => {
    setPropertySelected(property);
    setOpenPropertyDetails(true);
  };

  return (
    <div className="space-y-4">
      {/* Search Input */}
      <div className="flex gap-4">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            type="text"
            placeholder="Search properties..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-10 py-2 h-10 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white placeholder:text-content/60"
          />
          {searchTerm && (
            <button
              onClick={clearSearch}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        <Button
          variant={"outline"}
          className="h-10"
          onClick={() => handleGetProperties()}
        >
          <RefreshCcw className="size-4" />
        </Button>
      </div>

      {/* Results counter */}
      {searchTerm && (
        <div className="text-sm text-muted-foreground">
          Showing {filteredProperties.length} of {listProperties.length}{" "}
          properties
        </div>
      )}

      {/* Properties list */}
      <div className="w-full grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 2xl:grid-cols-3">
        {filteredProperties.map((property: Property) => (
          <PropertyCard
            key={property.property_id}
            property={property}
            handlePropertySelected={handlePropertySelected}
          />
        ))}

        {/* No results message */}
        {filteredProperties.length === 0 && searchTerm && (
          <div className="text-center py-8 text-muted-foreground">
            No properties found matching your search.
          </div>
        )}
      </div>

      <Drawer open={openPropertyDetails} onOpenChange={setOpenPropertyDetails}>
        <DrawerContent className="h-[90vh] !max-h-screen">
          <DrawerHeader className="pt-2 pb-4 flex justify-between flex-col border-b">
            <div className="w-full flex items-center justify-center relative">
              <DrawerClose asChild>
                <Button
                  variant={"outline"}
                  className="border-none bg-primary/10 text-primary rounded-full text-base !px-4 absolute left-0"
                  onClick={() => {
                    setOpenPropertyDetails(false);
                    setPropertySelected(null);
                  }}
                >
                  <ChevronLeft className="size-5" /> Close
                </Button>
              </DrawerClose>
              <DrawerTitle className="text-primary font-bold text-xl">
                Property Details
              </DrawerTitle>
            </div>
          </DrawerHeader>
          <div className="bg-[#F7F8FA] w-full h-full p-4 pb-[4rem] flex flex-col items-center gap-4 overflow-y-auto">
            <h2 className="font-bold text-primary text-2xl">
              {propertySelected?.property_name}
            </h2>

            <div className="w-full p-4 flex flex-col items-start gap-4 bg-white border rounded-xl">
              <h3
                className={cn(
                  "flex items-center gap-2 text-lg font-medium",
                  propertySelected?.property_status.toLowerCase() ===
                    "available"
                    ? "text-green-500"
                    : "text-red-500"
                )}
              >
                <FaFlag className="size-5" />
                Property Status
              </h3>

              <div
                className={cn(
                  "w-full px-4 py-2 border rounded-xl flex items-center justify-start gap-4",
                  propertySelected?.property_status.toLowerCase() ===
                    "available"
                    ? "bg-green-100"
                    : "bg-red-100"
                )}
              >
                <FaCircleCheck
                  className={cn(
                    "size-5",
                    propertySelected?.property_status.toLowerCase() ===
                      "available"
                      ? "text-green-500"
                      : "text-red-500"
                  )}
                />
                <div className="flex flex-col gap-0 leading-[1]">
                  <span className="text-content text-sm">Current Status</span>
                  <span
                    className={cn(
                      "text-base",
                      propertySelected?.property_status.toLowerCase() ===
                        "available"
                        ? "text-green-500"
                        : "text-red-500"
                    )}
                  >
                    {propertySelected?.property_status}
                  </span>
                </div>
              </div>

              <div
                className={cn(
                  "w-full px-4 py-2 border rounded-xl flex items-center justify-start gap-4"
                )}
              >
                <BsExclamationCircle className={cn("size-5 text-primary")} />
                <div className="flex flex-col gap-0 leading-[1]">
                  <span className="text-content text-sm">
                    Status Description
                  </span>
                  <span className={cn("text-base")}>
                    {propertySelected?.property_description}
                  </span>
                </div>
              </div>

              <div
                className={cn(
                  "w-full px-4 py-2 border rounded-xl flex items-center justify-start gap-4"
                )}
              >
                <IoIosCalendar className={cn("size-5 text-primary")} />
                <div className="flex flex-col gap-0 leading-[1]">
                  <span className="text-content text-sm">Last Updated</span>
                  <span className={cn("text-base")}>
                    {formatToShortDate(propertySelected?.updated_at as string)}
                  </span>
                </div>
              </div>
            </div>

            <div className="w-full p-4 flex flex-col items-start gap-4 bg-white border rounded-xl">
              <h3
                className={cn(
                  "flex items-center gap-2 text-lg font-medium text-primary"
                )}
              >
                <FaBuilding className="size-5" />
                Property Information
              </h3>

              <div
                className={cn(
                  "w-full px-4 py-2 border rounded-xl flex items-center justify-start gap-4"
                )}
              >
                <FaRegBuilding className={cn("size-5 text-primary")} />
                <div className="flex flex-col gap-0 leading-[1]">
                  <span className="text-content text-sm">Property Name</span>
                  <span className={cn("text-base")}>
                    {propertySelected?.property_name}
                  </span>
                </div>
              </div>

              <div
                className={cn(
                  "w-full px-4 py-2 border rounded-xl flex items-center justify-start gap-4"
                )}
              >
                <LuText className={cn("size-5 text-primary")} />
                <div className="flex flex-col gap-0 leading-[1]">
                  <span className="text-content text-sm">
                    Property Description
                  </span>
                  <span className={cn("text-base")}>
                    {propertySelected?.property_description}
                  </span>
                </div>
              </div>

              <div
                className={cn(
                  "w-full px-4 py-2 border rounded-xl flex items-center justify-start gap-4"
                )}
              >
                <AiOutlineDollarCircle className={cn("size-5 text-primary")} />
                <div className="flex flex-col gap-0 leading-[1]">
                  <span className="text-content text-sm">Monthly Rent</span>
                  <span className={cn("text-base")}>
                    {formatCurrency(
                      propertySelected?.property_rental_amount as number
                    )}
                  </span>
                </div>
              </div>
            </div>

            <div className="w-full p-4 flex flex-col items-start gap-4 bg-white border rounded-xl">
              <h3
                className={cn(
                  "flex items-center gap-2 text-lg font-medium text-blue-500"
                )}
              >
                <FaLocationArrow className="size-5" />
                Address Information
              </h3>

              <div
                className={cn(
                  "w-full px-4 py-2 border rounded-xl flex items-center justify-start gap-4"
                )}
              >
                <TbLocation className={cn("size-5 text-primary")} />
                <div className="flex flex-col gap-0 leading-[1]">
                  <span className="text-content text-sm">Address Line 1</span>
                  <span className={cn("text-base")}>
                    {propertySelected?.property_address1}
                  </span>
                </div>
              </div>

              <div
                className={cn(
                  "w-full px-4 py-2 border rounded-xl flex items-center justify-start gap-4"
                )}
              >
                <PiCityLight className={cn("size-5 text-primary")} />
                <div className="flex flex-col gap-0 leading-[1]">
                  <span className="text-content text-sm">City</span>
                  <span className={cn("text-base")}>
                    {propertySelected?.property_city}
                  </span>
                </div>
              </div>

              <div
                className={cn(
                  "w-full px-4 py-2 border rounded-xl flex items-center justify-start gap-4"
                )}
              >
                <FaRegMap className={cn("size-5 text-primary")} />
                <div className="flex flex-col gap-0 leading-[1]">
                  <span className="text-content text-sm">State</span>
                  <span className={cn("text-base")}>
                    {propertySelected?.property_state}
                  </span>
                </div>
              </div>

              <div
                className={cn(
                  "w-full px-4 py-2 border rounded-xl flex items-center justify-start gap-4"
                )}
              >
                <FiHash className={cn("size-5 text-primary")} />
                <div className="flex flex-col gap-0 leading-[1]">
                  <span className="text-content text-sm">ZIP Code</span>
                  <span className={cn("text-base")}>
                    {propertySelected?.property_postal_code}
                  </span>
                </div>
              </div>
            </div>

            <div className="w-full p-4 flex flex-col items-start gap-4 bg-white border rounded-xl">
              <h3
                className={cn(
                  "flex items-center gap-2 text-lg font-medium text-orange-400"
                )}
              >
                <MdPinDrop className="size-5" />
                Location Coordinates
              </h3>

              <div
                className={cn(
                  "w-full px-4 py-2 border rounded-xl flex items-center justify-start gap-4"
                )}
              >
                <TbWorldLatitude className={cn("size-5 text-primary")} />
                <div className="flex flex-col gap-0 leading-[1]">
                  <span className="text-content text-sm">Latitude</span>
                  <span className={cn("text-base")}>
                    {propertySelected?.property_xcoord}
                  </span>
                </div>
              </div>

              <div
                className={cn(
                  "w-full px-4 py-2 border rounded-xl flex items-center justify-start gap-4"
                )}
              >
                <TbWorldLongitude className={cn("size-5 text-primary")} />
                <div className="flex flex-col gap-0 leading-[1]">
                  <span className="text-content text-sm">Longitude</span>
                  <span className={cn("text-base")}>
                    {propertySelected?.property_ycoord}
                  </span>
                </div>
              </div>
            </div>

            <div className="w-full p-4 flex flex-col items-start gap-4 bg-white border rounded-xl">
              <h3
                className={cn(
                  "flex items-center gap-2 text-lg font-medium text-green-500"
                )}
              >
                <MdPinDrop className="size-5" />
                Parties Information
              </h3>

              <div
                className={cn(
                  "w-full px-4 py-2 border rounded-xl flex items-center justify-start gap-4"
                )}
              >
                <PiUserCircleGearFill className={cn("size-5 text-primary")} />
                <div className="flex flex-col gap-0 leading-[1]">
                  <span className="text-content text-sm">Current Tenant</span>
                  <span className={cn("text-base")}>
                    {propertySelected?.tenant_id || "No tenant assigned"}
                  </span>
                </div>
              </div>

              <div
                className={cn(
                  "w-full px-4 py-2 border rounded-xl flex items-center justify-start gap-4"
                )}
              >
                <PiUserCircleFill className={cn("size-5 text-primary")} />
                <div className="flex flex-col gap-0 leading-[1]">
                  <span className="text-content text-sm">Landlord</span>
                  <span className={cn("text-base")}>
                    {propertySelected?.landlord_id}
                  </span>
                </div>
              </div>

              <div
                className={cn(
                  "w-full px-4 py-2 border rounded-xl flex items-center justify-start gap-4"
                )}
              >
                <FaSuitcase className={cn("size-5 text-primary")} />
                <div className="flex flex-col gap-0 leading-[1]">
                  <span className="text-content text-sm">Broker</span>
                  <span className={cn("text-base")}>
                    {propertySelected?.broker_id}
                  </span>
                </div>
              </div>
            </div>

            <div className="w-full p-4 flex flex-col items-start gap-4 bg-white border rounded-xl">
              <h3
                className={cn(
                  "flex items-center gap-2 text-lg font-medium text-purple-500"
                )}
              >
                <FaGear className="size-5" />
                System Information
              </h3>

              <div
                className={cn(
                  "w-full px-4 py-2 border rounded-xl flex items-center justify-start gap-4"
                )}
              >
                <MdTag className={cn("size-5 text-primary")} />
                <div className="flex flex-col gap-0 leading-[1]">
                  <span className="text-content text-sm">Property ID</span>
                  <span className={cn("text-base")}>
                    {propertySelected?.property_id}
                  </span>
                </div>
              </div>

              <div
                className={cn(
                  "w-full px-4 py-2 border rounded-xl flex items-center justify-start gap-4"
                )}
              >
                <LuCalendarCog className={cn("size-5 text-primary")} />
                <div className="flex flex-col gap-0 leading-[1]">
                  <span className="text-content text-sm">Created</span>
                  <span className={cn("text-base")}>
                    {formatToDateTime(propertySelected?.created_at || "")}
                  </span>
                </div>
              </div>

              <div
                className={cn(
                  "w-full px-4 py-2 border rounded-xl flex items-center justify-start gap-4"
                )}
              >
                <PiClockCounterClockwiseBold
                  className={cn("size-5 text-primary")}
                />
                <div className="flex flex-col gap-0 leading-[1]">
                  <span className="text-content text-sm">Last Updated</span>
                  <span className={cn("text-base")}>
                    {formatToDateTime(propertySelected?.updated_at || "")}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <DrawerFooter className="border-t flex-row justify-center gap-4">
            <Button
              className="bg-primary text-white h-12"
              onClick={() => {
                setOpenEdit(true);
              }}
            >
              {" "}
              <RiEdit2Fill /> Edit Property
            </Button>
            <Button className="bg-green-400 text-white h-12">
              {" "}
              <FiFileText /> Create Contract
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      {propertySelected && (
        <EditProperty
          data={propertySelected as Property}
          openEdit={openEdit}
          setOpenEdit={setOpenEdit}
        />
      )}
    </div>
  );
}
