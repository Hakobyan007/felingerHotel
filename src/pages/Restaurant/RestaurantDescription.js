import React from "react";

export default function RestaurantDescription() {
  return (
    <div className="restaurant__description__container">
      <div className="first__description">
        <h5 data-aos="fade-up-right">At your service</h5>
        <p data-aos="fade-up-right">
          The team of the “Tonir” Restaurant aims to exceed all expectations of
          our guests. Our chef worked hard to develop a unique menu that
          features the best meals of the European cuisine that will match the
          tastes of the most demanding clients. Friendly and attentive waiters
          will ensure that you will enjoy your time in our restaurant.
        </p>
      </div>
      <h5 data-aos="fade-up-left">
        Once you try our cuisine and service, you shall never want to visit
        another restaurant.
      </h5>
    </div>
  );
}
