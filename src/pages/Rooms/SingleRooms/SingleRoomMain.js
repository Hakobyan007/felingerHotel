import React from "react";
import SingleName from "./SingleName";
import AboutRooms from "./AboutRooms";
import PremierStandart from "./PremierStandart";
import BookRoom from "./BookRoom";

export default function SingleRoomMain() {
  return (
    <div className="single__room__main">
      <SingleName />
      <AboutRooms />
      <PremierStandart />
      <BookRoom />
    </div>
  );
}
