import "./style/Carousel.css";
import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import partenaire1 from "../assets/partenariats/elmoahidine.png";
import partenaire2 from "../assets/partenariats/laccordean.png";
import partenaire3 from "../assets/partenariats/qualityTop.png";
import partenaire4 from "../assets/partenariats/trust.png";
const SliderPartenariat = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isSmallScreen]);

  const delay = 2500;
  const datas = [
    {
      id: 1,
      image: partenaire1,
      title: "Spain Flag",
    },
    {
      id: 2,
      image: partenaire2,
      title: "eeeee",
    },
    {
      id: 3,
      image: partenaire3,
      title: "rrrr",
    },
    {
      id: 4,
      image: partenaire4,
      title: "ttttt",
    },
    {
      id: 1,
      image: partenaire1,
      title: "Spain Flag",
    },
    {
      id: 2,
      image: partenaire2,
      title: "eeeee",
    },
    {
      id: 3,
      image: partenaire3,
      title: "rrrr",
    },
    {
      id: 4,
      image: partenaire4,
      title: "ttttt",
    },
  ];

  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === datas.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div
      className="slideshow"
      style={{ maxWidth: isSmallScreen ? "50%" : "30%" }}
    >
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {datas.map((slide, idx) => (
          <div className="slide" key={idx}>
            <img src={slide.image} alt={slide.title} />
          </div>
        ))}
      </div>

      <div className="slideshowDots">
        {datas.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default SliderPartenariat;
