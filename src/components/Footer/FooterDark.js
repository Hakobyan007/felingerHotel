import React from "react";
import { RxArrowRight } from "react-icons/rx";
import { SlClose } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";

export default function FooterDark() {
  const notificationOpen = useSelector((state) => state.notificationOpen);
  const today = useSelector((state) => state.today);
  const dispatch = useDispatch();
  const styles = {
    opacity: notificationOpen === true ? 1 : 0,
    visibility: notificationOpen === true ? "visible" : "hidden",
  };
  document.body.style.overflowY =
    notificationOpen === true ? "hidden" : "visible";
  return (
    <footer className="footer__dark">
      <div className="footer__line"></div>
      <div className="footer">
        <div className="footer__about footer__about__dark">
          <p>
            <span>/</span> ABOUT US
          </p>
          <p>
            The five-star hotel in a beautiful Armenian city with a modern
            restaurant, conference-hall, and art-bar.
          </p>
          <p>
            ©{today.getFullYear()} All rights reserved. FelingerHotel
          </p>
        </div>
        <div className="footer__news footer__news__dark">
          <p>
            <span>/</span>News
          </p>
          <p>
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
            <label>
              <input type="email" placeholder="EMAIL" />
              <RxArrowRight strokeWidth={0.2} />
              <input type="submit" />
            </label>
          </form>
        </div>
        <div className="footer__social footer__social__dark">
          <p>
            <span>/</span>SOCIAL
          </p>
          <a href="https://felingerhotel.com/docs/638352048744459985-3db9f730-3b2a-4f37-bd7f-cd42ad643a82.pdf">
            Privacy policy
          </a>
          <div className="social__pages">
            <p>Facebook</p>
            <p>Instagram</p>
            <p>Twitter</p>
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
          <p>
            Your details were sent to our operator who will contact you ASAP.
          </p>
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
