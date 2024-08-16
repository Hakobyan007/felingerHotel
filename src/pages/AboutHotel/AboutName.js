import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { TbOctagon } from "react-icons/tb";

export default function AboutName() {
  return (
    <div className="about__name__container">
      <div className="about__name__section">
        <h4>
          About <span>Us</span>
        </h4>
        <p>
          Welcome to Felinger Collection Hotel & Spa - your ideal choice for a
          luxurious and comfortable stay in the very center of Yerevan.
        </p>
      </div>
        <div
          data-aos="fade-up-left"
          className="octagon__container rooms__octagon"
          onClick={() => {
            document
              .querySelector(".about__description__container")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          <TbOctagon strokeWidth={0.5} />
          <IoIosArrowDown />
        </div>
    </div>
  );
}
