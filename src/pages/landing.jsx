import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import tasakorraLogo from "../assets/logo/tasakorraLogo.png";
import Card from "../components/Card";
import SliderPartenariat from "../components/Carousel";
import ContactSmallBox from "../components/ContactSmallBox";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
const Landing = () => {
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

  //to genarate cards dynmcly

  const generateCards = (totalCards) => {
    const cards = [];
    const cardsPerRow = isSmallScreen ? 2 : 4; // Determine the number of cards per row based on screen size
    const numRows = Math.ceil(totalCards / cardsPerRow); // Calculate the number of rows needed
    const lastRowCards = totalCards % cardsPerRow; // Calculate the number of cards in the last row
    for (let i = 0; i < numRows; i++) {
      const rowCards = [];
      const isLastRow = i === numRows - 1; // Check if it's the last row
      const numCardsInRow =
        isLastRow && lastRowCards ? lastRowCards : cardsPerRow;
      for (let j = 0; j < numCardsInRow; j++) {
        const cardIndex = i * cardsPerRow + j;
        if (cardIndex < totalCards) {
          rowCards.push(
            <Col
              key={cardIndex}
              xs={6}
              sm={6}
              md={6 / numCardsInRow}
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
 
        <HeroSection title="TASAKORRA" desc = "L'exigence de l'excellence" btnText="OFFRES"/>
        
      

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
            style={
              {
                //display: "block",
                //justifyContent: "space-evenly",
              }
            }
          >
            {generateCards(7)}
          </Row>
          <Row
            className="justify-content-center"
            style={{
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <button style={{ ...buttonStyle, marginBottom: "7%", padding: "" }}>
              <a
                href="#offres"
                style={{ color: "white", textDecoration: "none" }}
              >
                Voir plus
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
              className="justify-content-center"
              style={{
                display: "flex",
                justifyContent: "space-evenly",
              }}
            >
              <Col className="text-center">
                <h1 className="contacter" id="contacter">
                  Nous contacter
                </h1>
              </Col>
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
              <Col
                className="text-center"
                style={{
                  marginTop: "1%",
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-evenly",
                  textAlign: "center",
                }}
              >
                <ContactSmallBox />
              </Col>
            </Row>

            <div>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
