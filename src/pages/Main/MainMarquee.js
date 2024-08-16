import React from "react";
import Marquee from "react-fast-marquee";

export default function MainMarquee() {
  return (
    <div className="mainMarquee__container">
      <Marquee autoFill={true} loop={0}>
        {/*gradient={true} gradientColor='rgba(255,255,255,0.2)'*/}
        <p>Felinger Hotel </p>
        <p>Felinger Hotel </p>
        <p>Felinger Hotel </p>
        <p>Felinger Hotel </p>
        <p>Felinger Hotel </p>
        <p>Felinger Hotel </p>
        <p>Felinger Hotel </p>
        <p>Felinger Hotel </p>
        <p>Felinger Hotel </p>
        <p>Felinger Hotel </p>
      </Marquee>
      <Marquee delay={5} autoFill={true} loop={0}>
        <p>Felinger Hotel</p>
        <p>Felinger Hotel</p>
        <p>Felinger Hotel</p>
        <p>Felinger Hotel</p>
        <p>Felinger Hotel</p>
        <p>Felinger Hotel</p>
        <p>Felinger Hotel</p>
        <p>Felinger Hotel</p>
        <p>Felinger Hotel</p>
        <p>Felinger Hotel</p>
      </Marquee>
    </div>
  );
}
