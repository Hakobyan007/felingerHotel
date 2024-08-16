import React from "react";
import { RiArrowUpSLine,RiArrowDownSLine } from "react-icons/ri";

export default function FindRoom() {
  return (
    <div className="findRoom__container">
      <p data-aos="fade-down-right">FIND A ROOM</p>
      <div className="find__container" data-aos="fade-up">
        <div className="find__check__in" data-aos="fade-up">
          <p>CHECK IN</p>
          <RiArrowDownSLine />
        </div>
        <span />
        <div className="find__check__out" data-aos="fade-up">
          <p>CHECK OUT</p>
          <RiArrowUpSLine />
        </div>
        <button className="find__book__room" data-aos="fade-up">BOOK ROOM</button>
      </div>
    </div>
  );
}
