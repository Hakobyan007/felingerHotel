import React from "react";
import gallery1 from "../../images/gallery1.png";
import gallery2 from "../../images/gallery2.png";
import gallery3 from "../../images/gallery3.png";
import gallery4 from "../../images/gallery4.png";
import gallery5 from "../../images/gallery5.png";
import galleryText from "../../images/galleryText.png";
import { BsOctagonFill } from "react-icons/bs";

export default function OurGallery() {
  return (
    <div className="ourGallery__container">
      <div className="gallery1" data-aos="fade-up-right" >
        <p data-aos="fade-up-right">Art & Congress hall</p>
        <img src={gallery1} alt="" />
        <img src={gallery2}  alt="" />
      </div>
       <div className="gallery2">
        <img src={galleryText} alt="" data-aos="fade-up"/>
        <h3 data-aos="fade-up">our Gallery</h3>
        <p data-aos="fade-up">
          Explore our spacious rooms with the gorgeous view to the historical
          part of the city. Each room has an exclusive interior design decorated
          with modern art pieces that will make your stay unforgettable.
        </p>
        <img src={gallery3} data-aos="fade-up" alt="" />
        <div className="gallery__octagon" data-aos="fade-up">
            <BsOctagonFill />
            <p>It is our pleasure to meet your most unrealistic expectations.</p>
        </div>
      </div>
      <div className="gallery3" data-aos="fade-up-left">
        <img src={gallery4}   alt="" />
        <img src={gallery5} alt="" />
      </div>
    </div>
  );
}
