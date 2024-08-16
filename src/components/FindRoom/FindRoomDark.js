import React from "react";
import { RiArrowUpSLine,RiArrowDownSLine } from "react-icons/ri";

export default function FindRoomDark() {
  return (
    <div className="findRoom__container findRoom__container__dark">
      <p data-aos="fade-up-right">FIND A ROOM</p>
      <div className="find__container find__container__dark" data-aos="fade-up">
        <div className="find__check__in" data-aos="fade-up">
          <p>CHECK IN</p>
          <RiArrowDownSLine />
        </div>
        <span />
        <div className="find__check__out" data-aos="fade-up">
          <p>CHECK OUT</p>
          <RiArrowUpSLine />
        </div>
        <button className="find__book__room find__book__room__dark" data-aos="fade-up">BOOK ROOM</button>
      </div>
    </div>
  );
}
