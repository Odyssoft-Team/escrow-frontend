"use client"; // Si usas App Router

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet-defaulticon-compatibility";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import { useState } from "react";
import type { LatLngExpression, LeafletMouseEvent } from "leaflet";

const initialPosition: LatLngExpression = [40.7128, -74.006];

export default function InteractiveMap() {
  const [position, setPosition] = useState<LatLngExpression>(initialPosition);

  function LocationMarker() {
    useMapEvents({
      click(e: LeafletMouseEvent) {
        const newPos: LatLngExpression = [e.latlng.lat, e.latlng.lng];
        setPosition(newPos);
        console.log("Ubicación por click:", newPos); // Muestra en consola al hacer click
      },
    });

    return (
      <Marker
        draggable
        position={position}
        eventHandlers={{
          dragend: (e) => {
            const latlng = e.target.getLatLng();
            const newPos: LatLngExpression = [latlng.lat, latlng.lng];
            setPosition(newPos);
            console.log("Ubicación después de arrastrar:", newPos); // Muestra en consola al soltar el marcador
          },
        }}
      >
        <Popup>
          Latitud: {Array.isArray(position) ? position[0] : ""}
          <br />
          Longitud: {Array.isArray(position) ? position[1] : ""}
        </Popup>
      </Marker>
    );
  }

  return (
    <MapContainer
      center={position}
      zoom={18}
      zoomControl={false}
      attributionControl={false}
      style={{
        height: "300px",
        width: "100%",
        borderRadius: "20px",
        overflow: "hidden",
      }}
    >
      {/* <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="© OpenStreetMap contributors"
      /> */}

      {/* <TileLayer
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        attribution="© CARTO"
      /> */}

      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        // attribution="© CARTO"
      />
      <LocationMarker />
    </MapContainer>
  );
}
