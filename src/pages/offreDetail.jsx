import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";

import Image from "../assets/annonceImages/image.jpg";

const offres = () => {
  const { id } = useParams();
  console.log("id : " + id);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const response = await fetch("https://api-tasakorra.koyeb.app/offre");
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des données");
        }
        const data = await response.json();
        // Filtrer les offres en fonction de l'ID
        const filteredOffers = data.filter((offer) => offer.id === Number(id));
        setCardsData(filteredOffers);
      } catch (error) {
        console.error("Erreur lors de la récupération des données:", error);
      }
    };

    fetchOffers();
  }, [id]);
  console.info(cardsData.titre);

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
            {/* keep this haka it s not a mistake, i meant the two h1 */}
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
              justifyContent: "center",
            }}
          >
            <div className="container" style={{ width: "70%" }}>
              {cardsData.map((offer) => (
                <div key={offer.id}>
                  <Row
                    className="justify-content-center"
                    style={{
                      display: "flex",
                      justifyContent: "space-evenly",
                    }}
                  >
                    <Col className="text-center">
                      <h1 className="offres" id="offres">
                        {offer.titre}
                      </h1>
                    </Col>
                  </Row>
                  <Row
                    className="justify-content-center"
                    style={{
                      display: "flex",
                      justifyContent: "start",
                    }}
                  >
                    <Col className="text-center">
                      <h3 className="offres" id="offres">
                        ⏳Durée:
                      </h3>
                    </Col>
                  </Row>
                  <Row
                    className="justify-content-center"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      fontFamily: "FrankRuhl"
                    }}
                  >
                    <Col className="text-center">
                      <p className="offres" id="offres"  style={{fontSize:"1.2rem"}}>
                        •˚∘✮🌙 {offer.duree} 🌆˙•˚∘
                      </p>
                    </Col>
                  </Row>

                  <Row
                    className="justify-content-center"
                    style={{
                      display: "flex",
                      justifyContent: "start",
                    }}
                  >
                    <Col className="text-center">
                      <h3 className="offres" id="offres">
                        📍Distination:
                      </h3>
                    </Col>
                  </Row>
                  <Row
                    className="justify-content-center"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      fontFamily: "FrankRuhl"
                    }}
                  >
                    <Col className="text-center">
                      <p className="offres" id="offres" style={{fontSize:"1.5rem"}}>
                      ✈︎{offer.location}✈︎
                      </p>
                    </Col>
                  </Row>

                  <Row
                    className="justify-content-center"
                    style={{
                      display: "flex",
                      justifyContent: "start",
                    }}
                  >
                    <Col className="text-center">
                      <h3 className="offres" id="offres">
                        📃Description:
                      </h3>
                    </Col>
                  </Row>
                  <Row
                    className="justify-content-center"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      fontFamily: "FrankRuhl"
                    }}
                  >
                    <Col className="text-center">
                      {offer.description.split("\n").map((line, index) => (
                        <p key={index} style={{fontSize:"1.2rem"}}>✧˖°.{line}</p>
                      ))}
                    </Col>
                  </Row>

                  <Row
                    className="justify-content-center"
                    style={{
                      display: "flex",
                      justifyContent: "start",
                    }}
                  >
                    <Col className="text-center">
                      <h3 className="offres" id="offres">
                        💸Tarif:
                      </h3>
                    </Col>
                  </Row>
                  <Row
                    className="justify-content-center"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      fontFamily: "FrankRuhl"
                    }}
                  >
                    <Col className="text-center">
                      <p className="offres" id="offres" style={{fontSize:"1.2rem"}}></p>
                    </Col>
                  </Row>

                  <Row
                    className="justify-content-center"
                    style={{
                      display: "flex",
                      justifyContent: "start",
                    }}
                  >
                    <Col className="text-center">
                      <h3 className="offres" id="offres">
                        📞Contacte:
                      </h3>
                    </Col>
                  </Row>
                  <Row
                    className="justify-content-center"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      fontFamily: "FrankRuhl"
                    }}
                  >
                    <Col className="text-center">
                      <p className="offres" id="offres">
                        {offer.contact.split("\n").map((line, index) => (
                          <p key={index} style={{fontSize:"1.2rem"}}>✨{line}</p>
                        ))}
                      </p>
                    </Col>
                  </Row>

                  <Row
                    className="justify-content-center"
                    style={{
                      display: "flex",
                      justifyContent: "start",
                    }}
                  >
                    <Col className="text-center">
                      <h3 className="offres" id="offres">
                        💭Remarques:
                      </h3>
                    </Col>
                  </Row>
                  <Row
                    className="justify-content-center"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      fontFamily: "FrankRuhl"
                    }}
                  >
                    <Col className="text-center">
                      <p className="offres" id="offres" style={{fontSize:"1.2rem"}}>
                        {offer.remarque.split("\n").map((line, index) => (
                          <span key={index}>
                            {line}
                            <br />
                          </span>
                        ))}
                      </p>
                    </Col>
                  </Row>
                </div>
              ))}
            </div>
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
