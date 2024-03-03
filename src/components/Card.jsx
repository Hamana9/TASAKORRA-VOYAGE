import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import "./style/Card.css";


const Card = ({ titre, duree, btnId }) => {
  console.log(titre, duree, btnId );

  const [isHovered, setIsHovered] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

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

  const buttonStyle = {
    backgroundColor: "white",
    fontFamily: "RobotoSerif",
    letterSpacing: isSmallScreen ? "2px" : "3px",
    textDecoration: "none",
    color: "black",
    opacity: "80%",
    display: "inline-block",
    borderRadius: "5px",
    //marginTop: "3%",
    fontSize: isSmallScreen ? "0.8rem" : "1.5rem",
  };

  return (
    <div
      className={`card ${isHovered ? "hovered" : ""}`}
      style={{
        width: isSmallScreen ? "9rem" : "18rem",
        height: isSmallScreen ? "17rem" : "25rem",

        // right: isSmallScreen ? "0%" : "20%",   height: ;
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="pseudo1"></div>
      <div className="pseudo2"></div>
      <div className="pseudo3"></div>
      <div className="card-head"></div>
      <div className="card-body">
        <h3
          className="card-title"
          style={{
            fontSize: isSmallScreen ? "1rem" : "1.5rem",
            fontFamily: "AngleciaProDisplay",
          }}
        >
          {titre}


        </h3>
        <p
          className="card-text"
          style={{
            fontSize: isSmallScreen ? "0.5rem" : "0.9rem",
            fontFamily: "RobotoSerif",
          }}
        >
          {duree}
        </p>
        <button style={buttonStyle}>
      
          <Link to={`/detail/${btnId}`}
            className="btn "
            style={{ color: "black", textDecoration: "none", fontFamily: "RobotoSerif", }}
          >
            Plus de détails
          </Link>

          {/* </a> */}
        </button>
      </div>
    </div>
  );
};

export default Card;
