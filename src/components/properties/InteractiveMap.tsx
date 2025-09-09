"use client";

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet-defaulticon-compatibility";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
  useMap,
} from "react-leaflet";
import type { LatLngExpression, LeafletMouseEvent } from "leaflet";

import { useEffect } from "react";

interface Props {
  latitude: number;
  longitude: number;
  setLatitude: (latitude: number) => void;
  setLongitude: (longitude: number) => void;
}

// Componente para recentrar el mapa cuando cambian las coordenadas
function RecenterMap({
  latitude,
  longitude,
}: {
  latitude: number;
  longitude: number;
}) {
  const map = useMap();
  useEffect(() => {
    map.setView([latitude, longitude]);
  }, [latitude, longitude, map]);
  return null;
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
        console.log("Ubicación por click:", newPos);
      },
    });

    return (
      <Marker
        key={position.toString()}
        draggable
        position={position}
        eventHandlers={{
          dragend: (e) => {
            const latlng = e.target.getLatLng();
            const newPos: LatLngExpression = [latlng.lat, latlng.lng];
            setLatitude(latlng.lat);
            setLongitude(latlng.lng);
            console.log("Ubicación después de arrastrar:", newPos);
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
      <TileLayer url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}" />
      <LocationMarker />
      <RecenterMap latitude={latitude} longitude={longitude} />
    </MapContainer>
  );
}
