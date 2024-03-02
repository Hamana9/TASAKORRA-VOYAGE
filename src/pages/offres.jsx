import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import HeroSection from "../components/HeroSection";
import Card from "../components/Card";
import Footer from "../components/Footer";
const offres = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    // Faites une requête pour obtenir les données JSON
    fetch("/src/offres.json")
      .then((response) => response.json())
      .then((data) => setCardsData(data))
      .catch((error) =>
        console.error("Erreur lors de la récupération des données:", error)
      );
  }, []);

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

  const generateCards = (cardsData, isSmallScreen) => {
    const cards = [];
    const cardsPerRow = isSmallScreen ? 2 : 4; // Determine the number of cards per row based on screen size
    const numRows = Math.ceil(cardsData.length / cardsPerRow); // Calculate the number of rows needed
    const lastRowCards = cardsData.length % cardsPerRow; // Calculate the number of cards in the last row
    for (let i = 0; i < numRows; i++) {
      const rowCards = [];
      const isLastRow = i === numRows - 1; // Check if it's the last row
      const numCardsInRow =
        isLastRow && lastRowCards ? lastRowCards : cardsPerRow;
      for (let j = 0; j < numCardsInRow; j++) {
        const cardIndex = i * cardsPerRow + j;
        if (cardIndex < cardsData.length) {
          const card = cardsData[cardIndex];
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
              <Card titre={card.titre} duree={card.duree} btnId={card.id} />
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

  return (
    <>
      <HeroSection
        title="Nos Offres"
        desc="Découvrez nos offres uniques. <br/>Réservez maintenant!"
        btnText="OFFRES"
      />
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

          {/* pour generer les cartes */}
          <Row className="justify-content-center">
            {generateCards(cardsData, isSmallScreen)}
          </Row>
        </div>
        <div
          className="d-flex flex-column align-items-center"
          style={{ bottom: "0" }}
        >
          <Footer />
        </div>
      </div>
    </>
  );
};

export default offres;
