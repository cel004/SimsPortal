import React from "react";
import "./Carousel.css";

export const Carousel = ({ data }) => {
    return (
        <div>
            {data.map((item, idx) => (
                <img src={item.src} alt={item.alt} key={idx} />
            ))}
        </div>
    );
};

export default Carousel;