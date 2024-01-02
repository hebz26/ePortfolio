import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./Slider.css";
import data from "../../utils/slider.json";
import { Link } from "react-router-dom";

const Slider = () => {
  return (
    <section className="slider-section">
      <div className=" innerWidth slider-container">
        <div className="question-text">
          <p>what brings you here?</p>
        </div>
        <div className="slider-background">
          <img src="images/slider-window.png" alt="slider window" width={400} />
        </div>
        <div className="swiper-container">
          <Swiper>
            <SliderButtons />
            {data.map((card, i) => (
              <SwiperSlide key={i}>
                <Link to={card.link}>
                  <div className="folder">
                    <img src={card.image} alt={card.name} />
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="innerWidth  bottom-text">
          quick glance
          <img src="images/down-arrow.png" width={20}></img>
        </div>
      </div>
    </section>
  );
};

export default Slider;

const SliderButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="s-button">
      <img
        src="images/left-arrow.png"
        alt="Left Arrow"
        className="arrow left"
        onClick={() => swiper.slidePrev()}
      />
      <img
        src="images/right-arrow.png"
        alt="Right Arrow"
        className="arrow right"
        onClick={() => swiper.slideNext()}
      />
    </div>
  );
};
