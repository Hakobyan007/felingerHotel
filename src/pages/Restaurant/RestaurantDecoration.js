import React from "react";
import { restaurantsImage } from "../../lists/restaurantsImage";

export default function RestaurantDecoration() {
  return (
    <div className="restaurant__decoration__container">
      <div data-aos="fade-up-right" className="first__part__decoration">
        <img src={restaurantsImage[6].image} alt="" />
        <p>
          All room decoration was made with ecological certified and safe
          materials.
        </p>
      </div>
      <div className="second__part__decoration">
        <img src={restaurantsImage[8].image} data-aos="fade-up" alt="" />
        <div className="second__part__decoration__about" data-aos="fade-up">
          <h5>Spend Your Time With Us</h5>
          <p>
            If you are looking for an exclusive place to have a romantic dinner,
            organize a business meeting, or spend an enjoyable evening with
            friends, visit Tonir Restaurant in Felinger Hotel. With our delicious
            meals, unique interior design, and atmosphere of comfort and
            exquisiteness you shall never want to go to a different restaurant.
          </p>
        </div>
      </div>
    </div>
  );
}
