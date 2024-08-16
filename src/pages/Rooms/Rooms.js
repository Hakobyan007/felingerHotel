
import { roomsImg } from "../../lists/roomsImg";
import { TbOctagon } from "react-icons/tb";
import { IoIosArrowDown, IoMdClose } from "react-icons/io";
import { FaPeopleGroup } from "react-icons/fa6";
import { BsArrowsAngleExpand } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Autoplay, Navigation} from "swiper/modules";

export default function Rooms() {
  const today = useSelector((state) => state.today);
  const months = useSelector((state) => state.months);
  const slideImageIndex = useSelector((state) => state.slideImageIndex);
  const openImageSlider = useSelector((state) => state.openImageSlider);

  const dispatch = useDispatch();
  const styles = {
    opacity: openImageSlider ? 1 : 0,
    visibility: openImageSlider ? "visible" : "hidden",
  };
  document.body.style.overflowY = openImageSlider ? "hidden" : "visible";



  return (
    <div className="rooms__page__container">
      <div className="rooms__page__container__text">
        <div className="rooms__page__container__text__button">
          <h2 data-aos="fade-up-right">
            Felinger Hotel<span  data-aos="fade-up">'</span>s <span data-aos="fade-up-left">Rooms</span>
          </h2>
          <div
            className="octagon__container rooms__octagon"
            data-aos="fade-up-left"
            onClick={() => {
              document
                .querySelector(".every__room__container")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            <TbOctagon strokeWidth={0.5} />
            <IoIosArrowDown />
          </div>
        </div>
        <p  data-aos="fade-up">Exceptionally luxurious and cozy accommodations.</p>
      </div>
      <div className="every__room__container">
        {roomsImg.map((item, index) => {
          return (
            <div className="every__room" key={index} data-aos="fade-down-right">
              <img
                src={item.src[0]}
                onClick={() => {
                  dispatch({
                    type: "CHANGE_SLIDE_IMAGE_INDEX",
                    payload: index,
                  });
                  dispatch({ type: "OPEN_IMAGE_SLIDER", payload: true });
                }}
                alt=""
              />
              <div className="about__every__container">
                <Link
                  to={item.name.replaceAll(" ", "-")}
                  className="about__every__room"
                  onClick={() => {
                    dispatch({ type: "CHANGE_ROOMINDEX", payload: index });
                    localStorage.setItem("Room_Index", index);
                  }}
                >
                  <h4>{item.name}</h4>
                  <div className="guest__every__room">
                    <p>
                      <FaPeopleGroup />
                      {item.guestsNum === 1
                        ? item.guestsNum + " guest"
                        : "up to " + item.guestsNum + " guests"}
                    </p>
                    <p>
                      <BsArrowsAngleExpand />
                      <span>
                        {item.square} m<sup>2</sup>
                      </span>
                    </p>
                  </div>
                  <div className="price__every__room">
                    <p>
                      from <span>$</span>
                      <span>{item.priceForNight}</span>
                    </p>
                    <p>
                      for 1 night, {today.getDate()}{" "}
                      {months[today.getUTCMonth()].slice(0, 3)}
                    </p>
                  </div>
                </Link>
                <button>check prices for other dates</button>
              </div>
            </div>
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
          
          loop={openImageSlider}
        >
          {roomsImg[slideImageIndex].src.map((slide, slideIndex) => {
            return (
              <SwiperSlide key={slideIndex}>
                <img src={slide} alt="" />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <IoMdClose
          onClick={() => {
            dispatch({ type: "OPEN_IMAGE_SLIDER", payload: false });
          }}
        />
      </div>
    </div>
  );
}
