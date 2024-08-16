import React from "react";
import { useSelector } from "react-redux";
import { roomsImg } from "../../../lists/roomsImg";
import Star from '../../../images/Star.png'

export default function AboutRooms() {
    const roomIndex = useSelector((state) => state.roomIndex)
  return (
    <div className="about__rooms">
      <div className="about__rooms__first">
        <div className="since__container" data-aos="fade-up">
          <img src={Star} alt="Star" />
          <p>Since 1973</p>
        </div>
        <p data-aos="fade-up-right">
          All suites have a unique design because we want our every guest to
          feel special.
        </p>
      </div>
      <p data-aos="fade-up-left">{roomsImg[roomIndex].about}</p>
    </div>
  );
}
