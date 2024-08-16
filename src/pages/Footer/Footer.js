import React from "react";
import { RxArrowRight } from "react-icons/rx";

export default function Footer() {
  return (
      <footer>
      <div className="footer__line"></div>
        <div className="footer">
          <div className="footer__about">
            <p data-aos="fade-up-right">
              <span>/</span> ABOUT US
            </p>
            <p data-aos="fade-up-right">
              The five-star hotel in a beautiful European city with a modern
              restaurant, conference-hall, and art-bar.
            </p>
            <p data-aos="fade-up-right">©2021 All rights reserved. BankHotel</p>
          </div>
          <div className="footer__news">
            <p data-aos="fade-up">
              <span>/</span>News
            </p>
            <p data-aos="fade-up">
              Sign up to our newsletter not to miss exclusive offers and
              information about the upcoming events.
            </p>
            <label data-aos="fade-up">
              <input type="email" placeholder="EMAIL" />
              <RxArrowRight strokeWidth={0.2} />
            </label>
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
      </footer>
  );
}
