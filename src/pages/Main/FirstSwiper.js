import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import mainFirstSwiper1 from "../../images/mainFirstSwiper1.jpg";
import mainFirstSwiper2 from "../../images/mainFirstSwiper2.jpg";
import mainFirstSwiper3 from "../../images/mainFirstSwiper3.jpg";
import mainFirstSwiper4 from "../../images/mainFirstSwiper4.jpg";
import mainFirstSwiper5 from "../../images/mainFirstSwiper5.jpg";
import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";
import { Autoplay } from "swiper/modules";

export default function FirstSwiper() {
  const images = [
    mainFirstSwiper1,
    mainFirstSwiper2,
    mainFirstSwiper3,
    mainFirstSwiper4,
    mainFirstSwiper5,
  ];

  return (
    <div className="first__swiper__container">
      <Swiper
        loop={1}
        grabCursor={1}
        modules={[Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="check__container">
        <div className="check__in__container check__part">
          <p>CHECK IN</p>
          <RiArrowUpSLine />
        </div>
        <span />
        <div className="check__out__container check__part">
          <p>CHECK OUT</p>
          <RiArrowDownSLine />
        </div>
        <button className="book__room__button check__part">BOOK ROOM</button>
      </div>
    </div>
  );
}
