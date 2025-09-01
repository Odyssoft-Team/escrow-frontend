"use client";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Check, ChevronLeft } from "lucide-react";
import { FaBuilding, FaLocationArrow } from "react-icons/fa";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useState } from "react";
import InfoForm from "./InfoForm";
import LocationForm from "./LocationForm";

export interface Location {
  address1: string;
  address2: string;
  city: string;
  state: string;
  zip: string;
  latitude: number;
  longitude: number;
}

export interface InfoFormData {
  propertyName: string;
  propertyDescription: string;
  monthlyRent: number;
}

interface Props {
  data: {
    property_name: string;
    property_description: string;
    property_rental_amount: number;
    property_address1: string;
    property_address2: string;
    property_city: string;
    property_state: string;
    property_postal_code: string;
    property_xcoord: string;
    property_ycoord: string;
  };
  openEdit: boolean;
  setOpenEdit: (state: boolean) => void;
}

export default function EditProperty({ data, openEdit, setOpenEdit }: Props) {
  const [tabValue, setTabValue] = useState("tab-1");

  const [infoData, setInfoData] = useState<InfoFormData>({
    propertyName: data.property_name,
    propertyDescription: data.property_description,
    monthlyRent: data.property_rental_amount,
  });

  const [locationData, setLocationData] = useState<Location>({
    address1: data.property_address1,
    address2: data.property_address2,
    city: data.property_city,
    state: data.property_state,
    zip: data.property_postal_code,
    latitude: Number(data.property_xcoord),
    longitude: Number(data.property_ycoord),
  });

  const sendData = async () => {
    console.log(infoData, locationData);
  };

  return (
    <Drawer open={openEdit} onOpenChange={setOpenEdit}>
      <DrawerContent className="h-[90vh] !max-h-screen">
        <DrawerHeader className="pt-2 pb-0 flex justify-between flex-col border-b">
          <div className="w-full flex items-center justify-between">
            <DrawerClose asChild>
              <Button
                variant={"outline"}
                className="border-none bg-primary/10 text-primary rounded-full text-base !px-4"
              >
                <ChevronLeft className="size-5" /> Cancel
              </Button>
            </DrawerClose>
            <DrawerTitle className="text-primary font-bold text-xl">
              Edit Property
            </DrawerTitle>
            <Button
              variant={"outline"}
              className="border-none bg-primary text-white rounded-full text-base !px-4"
              onClick={sendData}
            >
              <Check className="size-5" />
              Save
            </Button>
          </div>

          <div className="w-full mt-6">
            <Tabs onValueChange={setTabValue} value={tabValue}>
              <ScrollArea>
                <TabsList className="text-foreground h-auto gap-2 rounded-none bg-transparent px-0 py-1 w-full">
                  <TabsTrigger
                    value="tab-1"
                    className="hover:bg-accent text-content hover:text-foreground data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent relative after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:shadow-none text-lg data-[state=active]:font-bold"
                  >
                    <FaBuilding
                      className="-ms-0.5 me-1.5"
                      size={16}
                      aria-hidden="true"
                    />
                    Property Info
                  </TabsTrigger>
                  <TabsTrigger
                    value="tab-2"
                    className="hover:bg-accent text-content hover:text-foreground data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent relative after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:shadow-none text-lg data-[state=active]:font-bold"
                  >
                    <FaLocationArrow
                      className="-ms-0.5 me-1.5"
                      size={16}
                      aria-hidden="true"
                    />
                    Location
                  </TabsTrigger>
                </TabsList>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </Tabs>
          </div>
        </DrawerHeader>
        <div className="bg-[#F7F8FA] w-full h-full p-4">
          {tabValue === "tab-1" && (
            <InfoForm infoData={infoData} setInfoData={setInfoData} />
          )}
          {tabValue === "tab-2" && (
            <LocationForm
              locationData={locationData}
              setLocationData={setLocationData}
            />
          )}
        </div>
      </DrawerContent>
    </Drawer>
  );
}
