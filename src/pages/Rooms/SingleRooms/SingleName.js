import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { roomsImg } from "../../../lists/roomsImg";
import { BsOctagonFill } from "react-icons/bs";

export default function SingleName() {
  const roomIndex = useSelector((state) => state.roomIndex);

    useEffect(() =>{
        window.scrollTo(0, 0);
    },[])

  return (
    <div className="single__name__container" style={{background:`url(${roomsImg[roomIndex].src[0]}) no-repeat center center/cover fixed`}}>
      <div className="room__container__name" >
        <h4 data-aos="fade-up">{roomsImg[roomIndex].name}</h4>
        <p data-aos="fade-up-right">
          All room decoration was made with ecological certified and safe
          materials.
        </p>
      </div>
      <div
        className="book__room__room"
        data-aos="fade-up-left"
      >
        <div className="book__room__room__container">
                <BsOctagonFill />
                <p>Book room</p>
              </div>
      </div>
    </div>
  );
}
