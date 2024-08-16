import React from "react";
import restaurantBankHotel from "../../images/restaurantBankHotel.png";

export default function RestaurantName() {
  return (
    <div className="restaurant__name__container">
      <h2 data-aos="fade-up-right">“Tonir” <span data-aos="fade-up-left">Restaurant</span></h2>
      <div className="restaurant__name">
        <h4 data-aos="fade-up">One of a Kind</h4>
        <div className="restaurant__about">
          <img src={restaurantBankHotel} alt="" data-aos="fade-up-left"/>
          <p data-aos="fade-up-left">
            Felinger Collection Hotel & Spa has 2 restaurants - " Tonir
            Restaurant" which has armenian cuisine menu, and " Portofino "
            restaurant, which has italian cuisine menu. Our hotel has 3 Bars,
            one in the 9th floor of the hotel, the second is a lobby bar, and
            the third one is " White Rabbit " Bar.
          </p>
        </div>
      </div>
    </div>
  );
}
