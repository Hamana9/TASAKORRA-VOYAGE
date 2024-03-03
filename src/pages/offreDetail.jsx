import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import Footer from "../components/Footer";

import Image from "../assets/annonceImages/image.jpg";

const offres = () => {
  const { id } = useParams();
  console.log("id : "+id);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [cardsData, setCardsData] = useState(null);



  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const response = await fetch("https://api-tasakorra.koyeb.app/offre");
        if (!response.ok) {
          throw new Error('Erreur lors de la récupération des données');
        }
        const data = await response.json();
        console.log("data"+data);
        // Filtrer les offres en fonction de l'ID
        const filteredOffers = data.filter(offer => offer.id === id);
        console.log("data filtred"+filteredOffers);
        setCardsData(filteredOffers);
      } catch (error) {
        console.error("Erreur lors de la récupération des données:", error);
      }
    };

    fetchOffers();
  }, [id]);

  console.log("data : "+cardsData);
  
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
              justifyContent: "space-evenly",
            }}
          >
            <Col className="text-center">
              <h1 className="offres" id="offres">
                Titre de loffre
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
                Découvrez nos offres uniques. <br /> Réservez maintenant!
              </p>
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
            <Col>
              <img
                src={Image}
                alt=""
                style={{ width: "300px", height: "300px" }}
              />
            </Col>
            <Col>
            <Row>
                <p>Duree</p>
            </Row>
            </Col>
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
