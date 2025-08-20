"use client";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Check, ChevronLeft } from "lucide-react";
import { FaBuilding, FaLocationArrow, FaPlus } from "react-icons/fa";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useState } from "react";

export default function CreateProperty() {
  const [tabValue, setTabValue] = useState("tab-1");
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button
          variant="outline"
          className="bg-primary text-white fixed right-4 bottom-[90px] rounded-full py-6 !px-6 w-auto shadow-[0px_0px_35px_5px_rgba(37,51,131,0.50)] border-none text-base"
        >
          <FaPlus />
          New Property
        </Button>
      </DrawerTrigger>
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
              Add Property
            </DrawerTitle>
            <Button
              variant={"outline"}
              className="border-none bg-primary text-white rounded-full text-base !px-4"
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
        <div className="bg-[#F7F8FA] w-full h-full p-4">hola</div>
      </DrawerContent>
    </Drawer>
  );
}
