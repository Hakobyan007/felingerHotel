import React from "react";
import bestApartaments from "../../images/bestApartaments.png";

export default function BestApartaments() {
  return (
    <div className="bestApartaments__container" >
      <img src={bestApartaments} alt="" data-aos="fade-up"/>
      <div className="bestApartaments__text" >
        <h3 data-aos="fade-up-right">Best apartments</h3>
        <p data-aos="fade-up-right" >All room decoration was made with ecological certified and safe materials.</p>
      </div>
    </div>
  );
}
