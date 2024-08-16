import React, { useEffect } from "react";
import Star from "../../images/Star.png";
import roomsSlider11 from "../../images/roomsSlider11.jpg";
import roomsSlider12 from "../../images/roomsSlider12.jpg";
import roomsSlider21 from "../../images/roomsSlider21.jpg";
import roomsSlider22 from "../../images/roomsSlider22.jpg";
import roomsSlider31 from "../../images/roomsSlider31.jpg";
import roomsSlider32 from "../../images/roomsSlider32.jpg";
import roomsSlider41 from "../../images/roomsSlider41.jpg";
import roomsSlider42 from "../../images/roomsSlider42.jpg";
import { FiOctagon, FiArrowRight } from "react-icons/fi";
import { BsOctagonFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";

export default function Rooms() {
  const imageClass = useSelector((state) => state.imageClass);
  const roomSliderIndex = useSelector((state) => state.roomSliderIndex);
  const dispatch = useDispatch();
  const sliderImages = [
    {
      id: 1,
      img1: roomsSlider11,
      img2: roomsSlider12,
      comment: `Deluxe Double Room
      The spacious air-conditioned suite features a flat-screen TV, a 
      wardrobe, a safe deposit box, an electric kettle as well as city 
      views. The unit has 2 beds.`,
      name: `Deluxe Double`,
    },
    {
      id: 2,
      img1: roomsSlider21,
      img2: roomsSlider22,
      comment: `Deluxe Premium 2 Twin Beds
      The spacious air-conditioned twin/double room offers a flat-screen TV, a wardrobe, a safe deposit box,
       an electric kettle as well as city views. The unit offers 2 beds, and can put 2 extra beds.`,
      name: `Deluxe Premium`,
    },
    {
      id: 3,
      img1: roomsSlider31,
      img2: roomsSlider32,
      comment: `Standard Suite Room
      The spacious air-conditioned twin/double room provides a flat-screen TV,
      a wardrobe, a safe deposit box, an electric kettle as well as a quiet street view. It has 2 rooms.`,
      name: `Standard Suite`,
    },
    {
      id: 4,
      img1: roomsSlider41,
      img2: roomsSlider42,
      comment: `Standard Premium Room
      The spacious air-conditioned family room provides a flat-screen TV,
      a wardrobe, a safe deposit box, an electric kettle as well as city views.`,
      name: `Standard Premium`,
    },
  ];

  useEffect(() => {
    dispatch({ type: "SET_IMAGE_CLASS", payload: "image__visable" });

    setTimeout(() => {
      dispatch({ type: "SET_IMAGE_CLASS", payload: "" });
    }, 2000);
  }, [roomSliderIndex, dispatch]);

  return (
    <div className="rooms__container">
      <div className="rooms__text">
        <h3 data-aos="fade-right">
          ROOMS
          <br />& APARTMENTS
        </h3>
        <p data-aos="fade-left">
          All room decoration was made with ecological certified and safe
          materials.
        </p>
      </div>
      <div className={`rooms__slider ${imageClass}`}>
        <div className="rooms__next__page" data-aos="fade-up-right">
          <img
            src={sliderImages[roomSliderIndex].img1}
            className={imageClass}
            alt=""
          />
          <div
            className="room__octagon"
            data-aos="fade-up-right"
            onClick={() => {
              dispatch({
                type: "CHANGE_INDEX",
                payload:
                  roomSliderIndex < sliderImages.length - 1
                    ? roomSliderIndex + 1
                    : 0,
              });
            }}
          >
            <FiOctagon strokeWidth={0.5} />
            <FiArrowRight strokeWidth={1} />
          </div>
        </div>
        <div className="rooms__about">
          <div className={`rooms__since ${imageClass}`}>
            <div
              className="since__container room__since__container"
              data-aos="fade-up"
            >
              <img src={Star} alt="Star" />
              <p>Since 1973</p>
            </div>
            <div className="rooms__comment" data-aos="fade-up">
              <h4>{sliderImages[roomSliderIndex].name}</h4>
              <p>{sliderImages[roomSliderIndex].comment}</p>
              <p>
                {roomSliderIndex + 1 < 10
                  ? "0" + (roomSliderIndex + 1)
                  : roomSliderIndex + 1}{" "}
                <span>
                  /{" "}
                  {sliderImages.length < 10
                    ? "0" + sliderImages.length
                    : sliderImages.length}
                </span>
              </p>
            </div>
          </div>
          <div className={`rooms__main__image ${imageClass}`}>
            <img
              src={sliderImages[roomSliderIndex].img2}
              data-aos="fade-up-left"
              alt=""
            />
            <div className="book__room__image" data-aos="fade-up-left">
              <div className="book__room__image__part">
                <BsOctagonFill />
                <p>Book room</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="room__line"></div>
    </div>
  );
}
