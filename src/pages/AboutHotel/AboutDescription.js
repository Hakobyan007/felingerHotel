import React from "react";
import FelingerOutside from "../../images/FelingerOutside.jpg";
import FelingerInside from "../../images/FelingerInside.jpg";
export default function AboutDescription() {
  return (
    <div className="about__description__container">
      <div className="about__description__first__section">
        <img src={FelingerOutside} alt="" />
        <p>
          Our 91 well-equipped rooms and the famous specialty restaurants
          "Tondyr" and "Portofino" invite you to enjoy the flavors of Armenian
          and Italian cuisine. Our rooftop bar with spectacular views of the
          city is the perfect place to relax with a cocktail. Our lobby bar
          creates a relaxed atmosphere where you can relax with a glass of
          various drinks.
        </p>
      </div>
      <div className="about__description__second__section">
        <img src={FelingerInside} alt="" />
        <p>
          Relax and unwind in our Spa with three luxurious treatment rooms and a
          wide range of rejuvenating treatments and massages. Our fully equipped
          gym and cozy 14-meter indoor pool will help you maintain your health
          and fitness during your stay. Located in the heart of the city, our
          Spa hotel will allow you to easily reach cultural values, shops and
          nightclubs.
        </p>
      </div>
    </div>
  );
}
