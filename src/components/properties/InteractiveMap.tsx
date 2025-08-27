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
import type { LatLngExpression, LeafletMouseEvent } from "leaflet";

interface Props {
  latitude: number;
  longitude: number;
  setLatitude: (latitude: number) => void;
  setLongitude: (longitude: number) => void;
}

export default function InteractiveMap({
  latitude,
  longitude,
  setLatitude,
  setLongitude,
}: Props) {
  const position: [number, number] = [latitude, longitude];

  function LocationMarker() {
    useMapEvents({
      click(e: LeafletMouseEvent) {
        const newPos: LatLngExpression = [e.latlng.lat, e.latlng.lng];
        setLatitude(e.latlng.lat);
        setLongitude(e.latlng.lng);
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
            setLatitude(latlng.lat);
            setLongitude(latlng.lng);
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
      <TileLayer url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png" />
      <LocationMarker />
    </MapContainer>
  );
}
