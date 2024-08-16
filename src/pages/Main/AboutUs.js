import React from "react";
import aboutUsPic1 from "../../images/aboutUsPic1.png";
import aboutUsPic2 from "../../images/aboutUsPic2.png";
import aboutUsPic3 from "../../images/aboutUsPic3.png";
import { TbOctagon } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";

export default function AboutUs() {
  return (
    <div className="aboutUs__container">
      <div className="aboutUs__image1" >
        <img src={aboutUsPic1} alt=""/>

        <div className="aboutUs__textPart">
          <h2>
            ABOUT
            <br />
            <span>US</span>
          </h2>
          <div className="aboutUs__text" >
            <h4>High Quality</h4>
            <p>
              The five-star Felinger Hotel was reopened to visitors in 2016. The
              building was renovated and modernized to meet the expectations of
              the most demanding guests. We offer luxurious rooms, numerous
              facilities, and exceptional service.
            </p>
          </div>
        </div>
      </div>
      <div className="aboutUs__next" data-aos="fade-up-left">
        <img src={aboutUsPic3} alt="" />
        <img src={aboutUsPic2} alt="" />
        <div
          className="octagon__part2"
          onClick={() => {
            document
              .querySelector(".rooms__container")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          <TbOctagon strokeWidth={0.5} />
          <div className="octagon__part2__text">
            <p>Rooms</p>
            <p>and</p>
            <p>apartments</p>
            <IoIosArrowDown />
          </div>
        </div>
      </div>
    </div>
  );
}
