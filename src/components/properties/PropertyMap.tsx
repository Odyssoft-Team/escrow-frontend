"use client";

import { useNewPropertyStore } from "@/store/new-property";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  MapMouseEvent,
} from "@vis.gl/react-google-maps";
import { memo } from "react";
import { FaMapPin } from "react-icons/fa6";

interface Props {
  apiKey: string;
}

const PropertyMapInner = memo(function PropertyMapInner() {
  const { position, setPosition } = useNewPropertyStore();

  const handleDragEnd = (e: google.maps.MapMouseEvent) => {
    if (e.latLng) {
      setPosition({
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
      });
    }
  };

  const handleMapClick = (event: MapMouseEvent) => {
    const latLng = event.detail?.latLng;
    if (latLng) {
      setPosition({
        lat: latLng.lat,
        lng: latLng.lng,
      });
    }
  };

  return (
    <Map
      defaultCenter={position}
      defaultZoom={18}
      style={{
        height: "250px",
        width: "100%",
        borderRadius: "20px",
        overflow: "hidden",
        border: "1px solid oklch(1 0 0 / 10%)",
      }}
      mapId="a7fbcfaf12930dbe6fa1a6e3"
      disableDefaultUI
      onClick={handleMapClick}
    >
      <AdvancedMarker position={position} draggable onDragEnd={handleDragEnd}>
        <div className="flex flex-col items-center">
          <FaMapPin size={36} color="blue" />
        </div>
      </AdvancedMarker>
    </Map>
  );
});

export default function PropertyMap({ apiKey }: Props) {
  return (
    <APIProvider apiKey={apiKey}>
      <PropertyMapInner />
    </APIProvider>
  );
}
