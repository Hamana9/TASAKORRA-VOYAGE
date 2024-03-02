import "./style/Carousel.css";
import React, { useState, useEffect, useRef } from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import partenaire1 from "../assets/partenariats/elmoahidine.png";
import partenaire2 from "../assets/partenariats/laccordean.png";
import partenaire3 from "../assets/partenariats/qualityTop.png";
import partenaire4 from "../assets/partenariats/trust.png";

import service1 from "../assets/serviceSlides/1.png";
import service2 from "../assets/serviceSlides/2.png";
import service3 from "../assets/serviceSlides/3.png";
import service4 from "../assets/serviceSlides/4.png";
import service5 from "../assets/serviceSlides/5.png";
import service6 from "../assets/serviceSlides/6.png";
import { Row } from "react-bootstrap";
const SliderPartenariat = ({ ifLanding }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const [data, setData] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 900);
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
    },
    {
      id: 2,
      image: partenaire2,
    },
    {
      id: 3,
      image: partenaire3,
    },
    {
      id: 4,
      image: partenaire4,
    },
    {
      id: 1,
      image: partenaire1,
    },
    {
      id: 2,
      image: partenaire2,
    },
    {
      id: 3,
      image: partenaire3,
    },
    {
      id: 4,
      image: partenaire4,
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
    setData(ifLanding === "true" ? datas : dataAbout);
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === data.length - 1 ? 0 : prevIndex + 1
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
        <Row>
          {ifLanding === "true"
            ? datas.map((slide, idx) => (
                <div className="slide" key={idx}>
                  <img src={slide.image} />
                </div>
              ))
            : dataAbout.map((slide, idx) => (
                <div className="slide" key={idx}>
                  <img
                    src={slide.image}
                    alt={slide.title}
                    style={{ width: "128px" }}
                  />
                </div>
              ))}
        </Row>

      </div>
      <Row style={{display: "flex", justifyContent: "center"}}>
      {ifLanding === "true" ? (
        <div className="slideshowDots ">
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
      ) : (
        <div className="slideshowTitle">
          {dataAbout.map((slide, idx) => (
            <div
              key={idx}
              className={`slideshowTitle${index === idx ? " active" : ""}`}
              onClick={() => {
                setIndex(idx);
              }}
            >
              <p
                style={{
                  color: "black",
                  display: index === idx ? "block" : "none",
                }}
              >
                {slide.title}
              </p>
            </div>
          ))}
        </div>
      )}
      </Row>
      
      
    </div>
  );
};

export default SliderPartenariat;

const dataAbout = [
  {
    id: 1,
    image: service1,
    title: "Voyages organisés et à la carte.",
  },
  {
    id: 2,
    image: service2,
    title: "Hébergements de luxe à tarifs compétitifs.",
  },
  {
    id: 3,
    image: service3,
    title: "Transferts confortables, sorties exclusives.",
  },
  {
    id: 4,
    image: service4,
    title: "Traitement rapide des visas, billetterie simplifiée.",
  },
  {
    id: 5,
    image: service5,
    title: "Assistance proactive en cas de problème.",
  },
  {
    id: 6,
    image: service6,
    title: "Conseils avisés pour des voyages enrichissants.",
  },
];
