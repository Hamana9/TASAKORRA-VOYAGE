import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import tasakorraLogo from "../assets/logo/tasakorraLogo.png";
import Card from "../components/Card";
import SliderPartenariat from "../components/Carousel";
import ContactSmallBox from "../components/ContactSmallBox";
const Landing = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [widthLogo, setWidthLogo] = useState();
  const [leftHeroSection, setLeftHeroSection] = useState();
  const [titleSize, setTitleSize] = useState(); //for the tasakorra size

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setWidthLogo("200%");
        setLeftHeroSection("35%");
        setTitleSize("120%");
      } else {
        setWidthLogo("250%");
        setLeftHeroSection("50%");
        setTitleSize("420%");
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isSmallScreen]);

  //to genarate cards dynmcly

  const generateCards = (totalCards) => {
    const cards = [];
    const cardsPerRow = isSmallScreen ? 2 : 4; // Determine the number of cards per row based on screen size
    const numRows = Math.ceil(totalCards / cardsPerRow); // Calculate the number of rows needed
    for (let i = 0; i < numRows; i++) {
      const rowCards = [];
      for (let j = 0; j < cardsPerRow; j++) {
        const cardIndex = i * cardsPerRow + j;
        if (cardIndex < totalCards) {
          rowCards.push(
            <Col
              key={cardIndex}
              xs={6}
              sm={6}
              md={6 / cardsPerRow}
              lg={3}
              xl={3}
              style={{ marginBottom: "5%", marginLeft: "3%" }}
            >
              <Card />
            </Col>
          );
        } else {
          rowCards.push(<Col key={cardIndex} />);
        }
      }
      cards.push(
        <Row
          key={i}
          className="justify-content-center"
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            textAlign: "center",
          }}
        >
          {rowCards}
        </Row>
      );
    }
    return cards;
  };

  //styles

  const logoStyle = {
    width: widthLogo, // Set the desired width 250 ON PC 200 ON PHONE
    //height: "500%", // Set the desired height
    marginTop: "-50%",
  };

  const divStyle = {
    position: "absolute",
    top: "50%",
    left: leftHeroSection, //50 ON PC 35 ON PHONE
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
    //marginTop: "3%",
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "#F0A9A9",
          height: "100%",
          width: "100%",
          //display: "flex",
          // justifyContent: "center",
          //alignItems: "block",
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
                right: isSmallScreen ? "0%" : "40%",
              }}
            >
              <Row className="col-12">
                <h1 style={{ letterSpacing: "5px", fontSize: titleSize }}>
                  {/* 120 on phone on pc */}
                  TASAKORRA
                </h1>
              </Row>
              <Row className="col-12">
                <h3
                  className="heroTextStyle"
                  style={{
                    fontSize: isSmallScreen ? "40%" : "100%", // Adjusted syntax
                    letterSpacing: isSmallScreen ? "3px" : "5px", // Adjusted syntax
                  }}
                >
                  L'exigence de l'excellence
                </h3>
              </Row>
              <Row className="col-12">
                <button style={{ ...buttonStyle, marginTop: "30%" }}>
                  <a
                    href="#offres"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    OFFRES
                  </a>
                </button>
              </Row>
            </Col>

            <Col
              className="col-6"
              style={{
                position: "relative",
                right: isSmallScreen ? "0%" : "20%",
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
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>

      <div
        style={{
          height: "100vh",
          width: "100vw",
        }}
      >
        {/* Content of offres section  */}

        <div className="d-flex flex-column align-items-center">
          <Row
            className="justify-content-center"
            style={{
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <Col className="text-center">
              <h1 className="offres" id="offres">
                Nos Offres
              </h1>
            </Col>
          </Row>
          <Row
            className="justify-content-center"
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              textAlign: "center",
            }}
          >
            <Col className="text-center">
              <p style={{ fontFamily: "AngleciaProDisplay" }}>
                Découvrez nos offres uniques. Réservez maintenant!
              </p>
            </Col>
          </Row>

          {/* Spour generer les cartes */}
          <Row
            className="justify-content-center"
            style={{
              //display: "block",
              //justifyContent: "space-evenly",
            }}
          >
            {generateCards(2)}
          </Row>
          <Row
            className="justify-content-center"
            style={{
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <button style={{ ...buttonStyle, marginBottom: "7%" }}>
              <a
                href="#offres"
                style={{ color: "white", textDecoration: "none" }}
              >
                OFFRES
              </a>
            </button>
          </Row>
          <div className="d-flex flex-column align-items-center">
            <Row
              className="justify-content-center"
              style={{
                display: "flex",
                justifyContent: "space-evenly",
              }}
            >
              <Col className="text-center">
                <h1 className="offres" id="partenaires">
                  Nos partenariats
                </h1>
              </Col>
            </Row>
            <Row
              className="justify-content-center"
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                textAlign: "center",
              }}
            >
              <Col className="text-center">
                <p style={{ fontFamily: "AngleciaProDisplay" }}>
                  Partez en voyage avec nous et profitez d'offres
                  exceptionnelles grâce à nos partenariats privilégiés!
                </p>
              </Col>
            </Row>
            <Row
              className="justify-content-center"
              style={{
                display: "inline-block",
                justifyContent: "center",
                textAlign: "center",
                width: "100%",
                //transform: "translateX(80%)",
              }}
            >
              <SliderPartenariat />
            </Row>

            <Row
              className="justify-content-center col-12"
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                textAlign: "center",
                width: "100%",
              }}
            >
              <Col className="text-center" style={{marginTop: "5%", width: "100%",  display: "flex",
                justifyContent: "space-evenly",
                textAlign: "center",}}>
                <ContactSmallBox />
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
