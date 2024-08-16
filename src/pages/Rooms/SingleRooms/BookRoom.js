import React from "react";
import { useSelector } from "react-redux";
import { roomsImg } from "../../../lists/roomsImg";
import roomsLabel from '../../../images/roomsLabel.png'

export default function BookRoom() {
  const roomIndex = useSelector((state) => state.roomIndex);
  return (
    <div className="bookroom__main__container">
      <div className="bookroom__first__part">
        <img src={roomsImg[roomIndex].src[2]} data-aos="fade-up-right" alt="" />
        <img src={roomsLabel} alt="" data-aos="fade-up-right"/>
        <h6 data-aos="fade-up-right">{roomsImg[roomIndex].name}</h6>
        <p data-aos="fade-up-right">
          All rooms in Felinger Hotel have a special charm achieved through a
          combination of modern functional design and original 20th century
          layout.
        </p>
        <button data-aos="fade-up">/BOOK ROOM</button>
      </div>
      <div className="bookroom__second__part">
      <img data-aos="fade-up-left" src={roomsImg[roomIndex].src[3]} alt="" />
      <p data-aos="fade-up-left">{roomsImg[roomIndex].about}</p>
      </div>
    </div>
  );
}
