import React from "react";
import GetInTouchVectorDark from "../../images/GetInTouchVectorDark.png";
import GetInTouchImage from "../../images/GetInTouchImage.png";
import Star from "../../images/Star.png";

export default function GetInTouchDark() {
  return (
    <div className="getInTouch__container getInTouch__container__dark">
      <div data-aos="fade-up" className="getInTouch__address getInTouch__address__dark">
        <p>+374(11) 20-10-10</p>
        <p>43 Abovyan Street, Yerevan, Armenia</p>
      </div>
      <div className="getInTouch__text getInTouch__text__dark"  data-aos="fade-up">
        <div className="getInTouch__image getInTouch__image__dark">
          <h3 data-aos="fade-up-left">GET IN</h3>
          <img src={Star} alt="" />
          <img data-aos="fade-up" src={GetInTouchImage} alt="" />
        </div>
        <h3>TOUCH</h3>
      </div>
      <img src={GetInTouchVectorDark} data-aos="fade-up" alt="" />
    </div>
  );
}
