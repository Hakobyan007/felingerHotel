import React from "react";
import Star from "../../images/Star.png";
import { TbOctagon } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";

export default function About() {
  return (
    <div className="about__container">
      <div className="about__hotel">
        <h1>
          Felinger<span>Hotel</span>
        </h1>
        <h3>ROOMS // RESTAURANT // CONGRESS HALL // WINE BAR</h3>
      </div>
      <div className="since__hotel">
        <div className="details__hotel">
          <div className="since__container">
            <img src={Star} alt="Star" />
            <p>Since 1973</p>
          </div>
          <div className="octagon__container" onClick={() =>{
            document.querySelector('.first__swiper__container').scrollIntoView({ behavior: 'smooth' })
          }}>
            <TbOctagon strokeWidth={.5}/>
            <IoIosArrowDown />
          </div>
        </div>
        <p>
          The luxurious hotel in the most beautiful Armenian city with an
          exclusive restaurant, conference-hall, and art-bar.
        </p>
      </div>
    </div>
  );
}
