import React, { useEffect, useRef } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  ZoomControl,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useSelector } from "react-redux";

export default function Map() {
  const position = [40.1902881, 44.526507];

  const customIcon = new L.Icon({
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });

  const openBurger = useSelector((state) => state.openBurger);
  const mapRef = useRef(null);

  useEffect(() => {
    const map = mapRef.current;

    if (map) {
      if (openBurger) {
        map.getContainer().classList.remove("map__container__maps");
      } else {
        map.getContainer().classList.add("map__container__maps");
      }
    }
  }, [openBurger]);

  return (
    <MapContainer
      center={position}
      zoom={15}
      style={{ height: "700px", width: "100%" }}
      scrollWheelZoom={false}
      zoomControl={false}
      ref={mapRef}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position} icon={customIcon}>
        <Popup>
          Felinger Collection Hotel & Spa, 43 Abovyan Street, Yerevan, 0009,
          Armenia
        </Popup>
      </Marker>
      <ZoomControl position="topleft" />
    </MapContainer>
  );
}
