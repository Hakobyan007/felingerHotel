import React from "react";
import Map from "./Map";
import ContactName from "./ContactName";

export default function ContactMain() {


  return (
    <div className="map__container">
      <ContactName />
      <Map />
    </div>
  );
}
