// fixer l href

import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import tasakorraLogo from "../assets/logo/tasakorraLogo.png";
import "@fortawesome/fontawesome-free/css/all.css";


const HeroSection = ({title, desc, btnText}) => {
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

  const logoStyle = {
    width: isSmallScreen ? "200%" : "250%", // Set the desired width 250 ON PC 200 ON PHONE
    //height: "500%", // Set the desired height
    marginTop: "-50%",
  };

  const divStyle = {
    position: "absolute",
    top: "50%",
    left: isSmallScreen ? "35%" : "50%", //50 ON PC 35 ON PHONE
    transform: "translate(-50%, -50%)",
  };

  const wavyStyle = {
    position: "absolute",
    bottom: "10%", // Adjust as needed
    left: "50%",
    transform: "translateX(-50%)", // Center horizontally
    width: "60%", // Adjust the width of the SVG
  };
  const buttonStyle = {
    backgroundColor: "black",
    fontFamily: "AngleciaProDisplay",
    padding: "1% 3%", // Add padding for a button-like appearance
    letterSpacing: "3px",
    textDecoration: "none", // Remove default link underline
    color: "white", // Set text color
    display: "inline-block", // Make it inline-block to set a specific width
    borderRadius: "20px", // Add rounded corners
  };

  return (
    <div
      style={{
        backgroundColor: "#F0A9A9",
        height: "100%",
        width: "100%",
      }}
    >
      <div className="d-flex flex-column align-items-center" style={divStyle}>
        <Row
          className="justify-content-around"
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Col
            className="col-6"
            style={{
              position: "relative",
              right: isSmallScreen ? "-5%" : "40%",
              width: "75%"
            }}
          >
            <Row className="col-12" style={{textAlign: "center"}}>
              <h1 style={{ letterSpacing:  "5px", fontSize: isSmallScreen ? "1.2rem" : "3em"}}>
                {/* 120 on phone on pc */}
                {title}
              </h1>
            </Row>
            <Row className="col-12" style={{textAlign: "center"}}>
              <h3
                className="heroTextStyle"
                style={{
                  fontSize: isSmallScreen ? "40%" : "100%", // Adjusted syntax
                  letterSpacing: "3px", // Adjusted syntax
                }}
                dangerouslySetInnerHTML={{ __html: desc.replace(/\n/g, "<br>") }}
              >
                
              </h3>
            </Row>
                {
                  btnText === "false" ? ( <Row className="col-12" style={{textAlign: "center"}}>
                    <i
                  className="fas fa-caret-down icon dropdown"
                  
                > <a href="#aboutSection"></a>
                </i>
                  </Row>
                    
                  ) : (<Row className="col-12">
                  <button style={{ ...buttonStyle, marginTop: "30%" }}>
                    <a
                      href="#offres"
                      style={{ color: "white", textDecoration: "none" }}
                    >
                      {btnText}
                    </a>
                  </button>
                </Row>)
                }
            
            
          </Col>

          <Col
            className="col-6"
            style={{
              position: "relative",
              right: isSmallScreen ? "-2%" : "20%",

              width: "40%"
            }}
          >
            {" "}
            <img src={tasakorraLogo} alt="nuage logo" style={logoStyle} />
          </Col>
        </Row>
      </div>

      <div style={wavyStyle}>
        <svg
          width="100%"
          viewBox="0 0 1002 102"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 51C34.3333 -15.6667 67.6667 -15.6667 101 51C134.333 117.667 167.667 117.667 201 51C234.333 -15.6667 267.667 -15.6667 301 51C334.333 117.667 367.667 117.667 401 51C434.333 -15.6667 467.667 -15.6667 501 51C534.333 117.667 567.667 117.667 601 51C634.333 -15.6667 667.667 -15.6667 701 51C734.333 117.667 767.667 117.667 801 51C834.333 -15.6667 867.667 -15.6667 901 51C934.333 117.667 967.667 117.667 1001 51"
            stroke="#C60001"
            strokeWidth= {isSmallScreen ? "7" :"2" } 
          />
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
