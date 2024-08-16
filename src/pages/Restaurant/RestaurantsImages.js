import React from "react";
import { restaurantsShowImage } from "../../lists/restaurantsShowImage";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { restaurantsImage } from "../../lists/restaurantsImage";

export default function RestaurantsImages() {
  const openRestaurantSlider = useSelector(
    (state) => state.openRestaurantSlider
  );

  const dispatch = useDispatch();
  const styles = {
    opacity: openRestaurantSlider ? 1 : 0,
    visibility: openRestaurantSlider ? "visible" : "hidden",
  };
  document.body.style.overflowY = openRestaurantSlider ? "hidden" : "visible";
  return (
    <>
      <div className="restaurants__images__container">
        {restaurantsShowImage.map((item, index) => {
          return (
            <div
              key={index}
              className="every__image__container"
              style={{
                background: `url(${item.image}) no-repeat center/cover`,
              }}
              data-aos="fade-down-right"
              onClick={() => {
                if (index === restaurantsShowImage.length - 1) {
                  dispatch({ type: "OPEN_RESTAURANT_SLIDER", payload: true });
                }
              }}
            ></div>
          );
        })}
      </div>
      <div className="swiper__rooms__images" style={styles}>
        <Swiper
          modules={[Autoplay, Navigation]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
          navigation
          slidesPerView={1}
          loop={openRestaurantSlider}
        >
          {restaurantsImage.map((slide, slideIndex) => {
            return (
              <SwiperSlide key={slideIndex}>
                <img src={slide.image} alt="" />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <IoMdClose
          onClick={() => {
            dispatch({ type: "OPEN_RESTAURANT_SLIDER", payload: false });
          }}
        />
      </div>
    </>
  );
}
