"use client";

import { useState, useMemo } from "react";
import { Property } from "@/types/property";
import PropertyCard from "@/components/properties/PropertyCard";
import { ChevronLeft, Search, X } from "lucide-react";
import { Input } from "../ui/input";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Button } from "../ui/button";
import { FaBuilding, FaFlag, FaRegBuilding } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { cn, formatToShortDate } from "@/lib/utils";
import { BsExclamationCircle } from "react-icons/bs";
import { IoIosCalendar } from "react-icons/io";
import { LuText } from "react-icons/lu";

interface PropertiesListProps {
  properties: Property[];
}

export function PropertiesList({ properties }: PropertiesListProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProperties = useMemo(() => {
    if (!searchTerm.trim()) return properties;

    return properties.filter((property) => {
      const searchLower = searchTerm.toLowerCase();
      return (
        property.property_name?.toLowerCase().includes(searchLower) ||
        property.property_description?.toLowerCase().includes(searchLower) ||
        property.property_address1?.toLowerCase().includes(searchLower) ||
        property.property_city?.toLowerCase().includes(searchLower) ||
        property.property_state?.toLowerCase().includes(searchLower)
      );
    });
  }, [properties, searchTerm]);

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
      <div className="relative">
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

      {/* Results counter */}
      {searchTerm && (
        <div className="text-sm text-muted-foreground">
          Showing {filteredProperties.length} of {properties.length} properties
        </div>
      )}

      {/* Properties list */}
      <div className="w-full grid grid-cols-1 gap-4">
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
          <div className="bg-[#F7F8FA] w-full h-full p-4 flex flex-col items-center gap-4">
            <h2 className="font-bold text-primary text-2xl">
              {propertySelected?.property_name}
            </h2>

            <div className="w-full p-4 flex flex-col items-start gap-4 bg-white border rounded-xl">
              <h3
                className={cn(
                  "flex items-center gap-2 text-lg font-medium",
                  propertySelected?.property_status === "Available"
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
                  propertySelected?.property_status === "Available"
                    ? "bg-green-100"
                    : "bg-red-100"
                )}
              >
                <FaCircleCheck
                  className={cn(
                    "size-5",
                    propertySelected?.property_status === "Available"
                      ? "text-green-500"
                      : "text-red-500"
                  )}
                />
                <div className="flex flex-col gap-0 leading-[1]">
                  <span className="text-content text-sm">Current Status</span>
                  <span
                    className={cn(
                      "text-base",
                      propertySelected?.property_status === "Available"
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
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
