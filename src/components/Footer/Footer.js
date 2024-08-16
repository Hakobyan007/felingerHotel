import React from "react";
import { RxArrowRight } from "react-icons/rx";
import { SlClose } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";

export default function Footer() {
  const notificationOpen = useSelector((state) => state.notificationOpen);
  const dispatch = useDispatch();
  const styles = {
    opacity: notificationOpen === true ? 1 : 0,
    visibility: notificationOpen === true ? "visible" : "hidden",
  };
  document.body.style.overflowY = notificationOpen === true ? 'hidden' : 'visible';
  return (
    <footer>
      <div className="footer__line"></div>
      <div className="footer">
        <div className="footer__about">
          <p data-aos="fade-up-right">
            <span>/</span> ABOUT US
          </p>
          <p data-aos="fade-up-right">
            The five-star hotel in a beautiful Armenian city with a modern
            restaurant, conference-hall, and art-bar.
          </p>
          <p data-aos="fade-up-right">
            ©2021 All rights reserved. FelingerHotel
          </p>
        </div>
        <div className="footer__news">
          <p data-aos="fade-up">
            <span>/</span>News
          </p>
          <p data-aos="fade-up">
            Sign up to our newsletter not to miss exclusive offers and
            information about the upcoming events.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              dispatch({ type: "OPEN_NOTIFICATION", payload: true });
              // setTimeout(() => {
              //   dispatch({type: 'OPEN_NOTIFICATION',payload:false})
              // },3000)
            }}
          >
            <label data-aos="fade-up">
              <input type="email" placeholder="EMAIL" />
              <RxArrowRight strokeWidth={0.2} />
              <input type="submit" />
            </label>
          </form>
        </div>
        <div className="footer__social">
          <p data-aos="fade-up-left">
            <span>/</span>SOCIAL
          </p>
          <div className="social__pages">
            <p data-aos="fade-up-left">Facebook</p>
            <p data-aos="fade-up-left">Instagram</p>
            <p data-aos="fade-up-left">Twitter</p>
          </div>
        </div>
      </div>
      <div className="footer__main__notification__container" style={styles}>
      <div className="footer__information">
        <div className="footer__information__text">
          <h5>We’ll contact you ASAP</h5>
          <SlClose
            onClick={() => {
              dispatch({ type: "OPEN_NOTIFICATION", payload: false });
            }}
          />
        </div>
        <p>Your details were sent to our operator who will contact you ASAP.</p>
        <button
          onClick={() => {
            dispatch({ type: "OPEN_NOTIFICATION", payload: false });
          }}
        >
          ok
        </button>
      </div>
      </div>
    </footer>
  );
}
