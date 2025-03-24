import React, { useState } from "react";
import "./Carousel.css";

export const Carousel = ({ data }) => {
    const [slide, setSlide] = useState(0);
  
    const nextSlide = () => {
      setSlide(slide === data.length - 1 ? 0 : slide + 1);
    };
  
    const prevSlide = () => {
      setSlide(slide === 0 ? data.length - 1 : slide - 1);
    };
  
    return (
      <div className="carousel">
        <img src ="/assets/arrow-left.png"
        alt="Left arrow"
        className="left-arrow"
        onClick={prevSlide}/>
        {data.map((item, idx) => {
          return (
            <img
              src={item.src}
              alt={item.alt}
              key={idx}
              className={slide === idx ? "slide" : "slide slide-hidden"}
            />
          );
        })}
        <img src ="/assets/arrow-right.png"
        alt="Right arrow"
        className="right-arrow"
        onClick={nextSlide}
        />
        <span className="indicators">
          {data.map((_, idx) => {
            return (
              <button
                key={idx}
                className={
                  slide === idx ? "indicator" : "indicator indicator-inactive"
                }
                onClick={() => setSlide(idx)}
              ></button>
            );
          })}
        </span>
      </div>
    );
  };

export default Carousel;



