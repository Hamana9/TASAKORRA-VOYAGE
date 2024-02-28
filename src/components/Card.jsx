import React, { useState, useEffect } from "react";

const Card = () => {
  const [isHovered, setIsHovered] = useState(false);
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

  const buttonStyle = {
    backgroundColor: "white",
    fontFamily: "RobotoSerif",
    padding: "1.5% 4%",
    letterSpacing: "3px",
    textDecoration: "none",
    color: "black",
    opacity: "80%",
    display: "inline-block",
    borderRadius: "5px",
    marginTop: "3%",

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
        <h3 className="card-title" style={{
          fontSize: isSmallScreen ? "1rem" : "1.5rem",
          fontFamily : "AngleciaProDisplay",
        }}>-Center of Turkiye-</h3>
        <p className="card-text" style={{
          fontSize: isSmallScreen ? "0.5rem" : "0.9rem",
          fontFamily : "RobotoSerif",
        }}>
          Ankara is Turkiye's capital and second-largest city, while Istanbul is
          its largest city
        </p>
        <button style={buttonStyle}>
          <a
            href="#"
            className="btn "
            style={{ color: "black", textDecoration: "none" }}
          >
            Plus de détails 
          </a>
        </button>
      </div>
    </div>
  );
};

export default Card;
