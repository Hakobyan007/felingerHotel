import React from "react";
import GetInTouchLine from "../../images/GetInTouchLine.png";
import GetInTouchImage from "../../images/GetInTouchImage.png";
import Star from "../../images/Star.png";

export default function GetInTouch() {
  return (
    <div className="getInTouch__container">
      <div className="getInTouch__address">
        <p data-aos="fade-up-right">+374(11) 20-10-10</p>
        <p data-aos="fade-up-left">43 Abovyan Street, Yerevan, Armenia</p>
      </div>
      <div className="getInTouch__text">
        <div className="getInTouch__image">
          <h3 data-aos="fade-up-left">GET IN</h3>
          <img src={Star} alt="" />
          <img  data-aos="fade-up" src={GetInTouchImage} alt="" />
        </div>
        <h3>TOUCH</h3>
      </div>
      <img src={GetInTouchLine} data-aos="fade-up" alt="" />
    </div>
  );
}
