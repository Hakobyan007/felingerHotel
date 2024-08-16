import React from "react";
import { useSelector } from "react-redux";
import RoomsCurve from "../../../images/RoomsCurve.png";
import { roomsImg } from "../../../lists/roomsImg";

export default function PremierStandart() {
  const roomIndex = useSelector((state) => state.roomIndex);

  return (
    <div className="premier__standart__container">
      <img src={RoomsCurve} alt="" />
      <div className="premier__standart__main">
      <div className="premier__standart__text">
        <p  data-aos="fade-up-right">Premier Standard</p>
      </div>
      <img src={roomsImg[roomIndex].src[1]} data-aos="fade-up" alt="" />
      </div>
    </div>
  );
}
