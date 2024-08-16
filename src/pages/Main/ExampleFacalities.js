import React from "react";
import Restaurant from "../../images/Restaurant.jpg";
import openRestaurant from "../../images/openRestaurant.png";
import Spa from "../../images/Spa.png";
import openSpa from "../../images/openSpa.jpg";
import gym from "../../images/gym.jpg";
import openGym from "../../images/openGym.jpg";
import swimmingPool from "../../images/swimmingPool.jpg";
import openSwimmingPool from "../../images/openSwimmingPool.jpg";
import WineBar from "../../images/WineBar.png";
import openWineBar from "../../images/openWineBar.jpg";
import { useDispatch, useSelector } from "react-redux";
import { BsArrowRight, BsArrowDown } from "react-icons/bs";
import { FiOctagon } from "react-icons/fi";

export default function ExampleFacalities() {
  const HotelsFacalities = [
    {
      id: 1,
      img: Restaurant,
      imgOpen: openRestaurant,
      name: "Ice restaurant",
      description: `The hotel’s exclusive infrastructure is complemented by the unique
        atmosphere of the Safe Restaurant. Author’s menu, extensive wine
        card, and live music will set you for the correct mood.`,
    },
    {
      id: 2,
      img: Spa,
      imgOpen: openSpa,
      name: "SPA Salon",
      description: `Embark on a personalized wellness journey crafted just for
        you. Our skilled spa therapists curate a range of treatments, from indulgent
        massages to revitalizing facials, tailored to your unique needs and preferences.
        Each session is a symphony of rejuvenating techniques designed to restore
        balance to your mind, body, and spirit.`,
    },
    {
      id: 3,
      img: WineBar,
      imgOpen: openWineBar,
      name: "Wine bar “reserve”",
      description: `"Reserve" isn't just a wine bar; it's an experience. Join us for an evening of 
        refined elegance, where every sip tells a story and every moment is crafted for your pleasure.
        Cheers to sophistication, taste, and the pleasure of indulging in the finest wines at "Reserve."`,
    },
    {
      id: 4,
      img: gym,
      imgOpen: openGym,
      name: "Gym",
      description: `At Felinger Hotel, we believe in holistic wellness. In addition to our cutting-edge
        gym facilities, guests can indulge in post-workout relaxation at our spa or enjoy a refreshing
        dip in our sparkling pool. Our commitment to well-being extends to our culinary offerings,
        with a menu that features nutritious and delicious options crafted by our expert chefs.

      `,
    },
    {
      id: 5,
      img: swimmingPool,
      imgOpen: openSwimmingPool,
      name: "Swimming Pool",
      description: `Step into a realm of aqua elegance as you discover our opulent swimming pool. 
      The glistening waters beckon, surrounded by chic loungers and plush cabanas, creating an
      ambiance of sheer sophistication. Felinger Hotel's pool is not just a place to swim;
      it's a sanctuary of relaxation and indulgence.`,
    },
  ];

  const open = useSelector((state) => state.open);
  const dispatch = useDispatch();


  const openpopup = (index) => {
    if (index >= 0 && index < HotelsFacalities.length) {
      const newOpenState = open.map((value, i) =>
        i === index ? !value : false
      );
      dispatch({ type: "OPEN_FACALITIES", payload: newOpenState });
      setTimeout(() => {
        document
          .querySelector(".facalities__part__open")
          .scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      index = 0;
      const newOpenState = open.map((value, i) =>
        i === index ? !value : false
      );
      dispatch({ type: "OPEN_FACALITIES", payload: newOpenState });
      setTimeout(() => {
        document
          .querySelector(".facalities__part__open")
          .scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <div className="example__container">
      {HotelsFacalities.map((item, index) => {
        return (
          <div
            key={index}
            className={`facalities__part ${
              open[index] === true ? "facalities__part__open" : ""
            }`}
          >
            <img
              src={open[index] === true ? item.imgOpen : item.img}
              alt=""
              data-aos={open[index] ? "fade-up-left" : "fade-up-right"}
            />
            <div
              className={`about__restaurant ${
                open[index] === true ? "about__restaurant__open" : ""
              }`}
            >
              <p data-aos="fade-up">{item.id < 10 ? "0" + item.id : item.id}</p>
              <h4 data-aos="fade-up">{item.name}</h4>
              <p data-aos="fade-up">{item.description}</p>
            </div>
            {open[index] === false ? (
              <BsArrowRight
                onClick={() => openpopup(index)}
                data-aos-offset="800"
                data-aos="fade-up"
              />
            ) : (
              <div
                data-aos="fade-up-right"
                className="room__octagon facalities__octagon"
                onClick={() => openpopup(index + 1)}
              >
                <FiOctagon strokeWidth={0.5} />
                <BsArrowDown
                  strokeWidth={0.2}
                  style={{
                    transform:
                      index === HotelsFacalities.length - 1
                        ? "rotate(180deg) translate(-50%, -50%)"
                        : "",
                    transformOrigin: "0 0",
                  }}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
