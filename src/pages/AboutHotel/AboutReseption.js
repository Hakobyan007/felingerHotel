import React from "react";
import FelingerReseption from '../../images/FelingerReseption.png'

export default function AboutReseption() {
  return (
    <div className="about__reseption__container">
      <p>
        Our attentive staff is ready to make your stay unforgettable by
        providing first-class service and unsurpassed comfort. Book your stay at
        Felinger Collection Hotel & Spa and make your visit to Yerevan
        unforgettable!
      </p>
        <img src={FelingerReseption} alt="" />
    </div>
  );
}
