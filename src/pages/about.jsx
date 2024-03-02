import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";

import HeroSection from "../components/HeroSection";
import SliderPartenariat from "../components/Carousel";

import Footer from "../components/Footer";

//the pictures:
import place1 from "../assets/aboutPlaces/eiffelTower.png";
import place2 from "../assets/aboutPlaces/forbiddenCity.png";
import place3 from "../assets/aboutPlaces/londonEye.png";
import place4 from "../assets/aboutPlaces/opera.png";
import place5 from "../assets/aboutPlaces/pantheon.png";
import place6 from "../assets/aboutPlaces/pisa.png";
import place7 from "../assets/aboutPlaces/pyramid.png";
import place8 from "../assets/aboutPlaces/spaceNeedle.png";
import place9 from "../assets/aboutPlaces/towerBridge.png";

import partenariatLogo from "../assets/logo/partenariatLogo.png";
import clientFideleLogo from "../assets/logo/clientFideleLogo.png";
const About = () => {
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

 
  return (
    <>
      <HeroSection
        title="Apropos de nous"
        desc="Bienvenue dans notre aventure magique!"
        btnText="false"
      />
      <div
        style={{
          height: "100vh",
          width: "100vw",
        }}
        id="aboutSection"
      >
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
                Tasakorra
              </h1>
            </Col>
          </Row>

          <Row
            className="justify-content-center"
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              textAlign: "start",
            }}
          >
            <div className="containerAbout">
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
                    Voyages. Visites Aventure
                  </p>
                </Col>
              </Row>
              <Row>
                <p style={{ textAlign: "start" }}>
                  {" "}
                  TASAKORRA VOYAGE vous invite à vivre des expériences
                  extraordinaires à travers les richesses de notre patrimoine
                  national et les merveilles mondiales. Imprégnez-vous de la
                  splendeur de votre propre pays ou partez à la conquête du
                  monde grâce à nos voyages sur mesure. <br />{" "}
                </p>
                <p>
                  {" "}
                  Nous vous offrons bien plus que de simples réservations de
                  vols et d'hébergements de qualité. Avec des itinéraires
                  minutieusement conçus, nous vous promettons une immersion
                  totale dans chaque destination. Notre engagement envers le
                  voyage va bien au-delà des services conventionnels. Nous
                  favorisons la collaboration locale, encourageons le tourisme
                  durable et célébrons la richesse de la diversité culturelle et
                  environnementale. <br />
                </p>
                <p>
                  TASAKORRA VOYAGE, fort de ses trois départements spécialisés,
                  vous garantit une qualité inégalée à chaque étape de votre
                  périple.
                </p>
              </Row>

              <Row
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  marginBottom: isSmallScreen ? "8%" : "2%",
                }}
              >
                <Col>
                  <img
                    src={place1}
                    alt="eifelTower"
                    style={{ width: isSmallScreen ? "90px" : "128px" }}
                  />
                </Col>
                <Col>
                  <img
                    src={place2}
                    alt="forbiddenCity"
                    style={{ width: isSmallScreen ? "90px" : "128px" }}
                  />
                </Col>
                <Col>
                  <img
                    src={place3}
                    alt="london Eye"
                    style={{ width: isSmallScreen ? "90px" : "128px" }}
                  />
                </Col>
              </Row>
              <Row
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  marginBottom: isSmallScreen ? "8%" : "2%",
                }}
              >
                <Col>
                  <img
                    src={place4}
                    alt="opera"
                    style={{ width: isSmallScreen ? "90px" : "128px" }}
                  />
                </Col>
                <Col>
                  <img
                    src={place5}
                    alt="pantheon"
                    style={{ width: isSmallScreen ? "90px" : "128px" }}
                  />
                </Col>
                <Col>
                  <img
                    src={place6}
                    alt="pisa"
                    style={{ width: isSmallScreen ? "90px" : "128px" }}
                  />
                </Col>
              </Row>
              <Row style={{ display: "flex", justifyContent: "space-evenly" }}>
                <Col>
                  <img
                    src={place7}
                    alt="pyramid"
                    style={{ width: isSmallScreen ? "90px" : "128px" }}
                  />
                </Col>
                <Col>
                  <img
                    src={place8}
                    alt="space Needle"
                    style={{ width: isSmallScreen ? "90px" : "128px" }}
                  />
                </Col>
                <Col>
                  <img
                    src={place9}
                    alt="tower Bridge"
                    style={{ width: isSmallScreen ? "90px" : "128px" }}
                  />
                </Col>
              </Row>
            </div>
          </Row>

          <Row
            className="justify-content-center"
            style={{
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <Col className="text-center">
              <h1 className="offres">Nos Services</h1>
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
            <SliderPartenariat ifLanding="false" />
          </Row>

          <Row
            className="justify-content-center"
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              textAlign: "center",
            }}
          >
            <Col
              className="text-center container ulPartenariat"
              style={{ width: "80%" }}
            >
              <Row
                className="justify-content-center"
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                }}
              >
                <Col className="text-center">
                  <h1 className="offres">Partenriats</h1>
                </Col>
              </Row>
              <img
                src={partenariatLogo}
                alt="partenariat Logo"
                style={{ width: "70px" }}
              />
              <p style={{ fontFamily: "FrankRuhl", fontWeight: "bold" }}>
                Nous assurons un service de qualité grâce à des partenariats
                solides:
              </p>
              <ul style={{ textAlign: "start", fontFamily: "FrankRuhl" }}>
                <li>
                  Nous cultivons des liens étroits avec les compagnies aériennes
                  pour garantir un accès privilégié aux meilleures flexibles
                </li>
                <li>
                  Nos partenariats avec des chaines hôtelières, qu'elles soient
                  locales ou internationales nous permettent d'offrir à nos
                  clients une gamme diversifiée d'hébergement de qualité adaptés
                  à leurs besoins.
                </li>
                <li>
                  Nous travaillons en étroite collaboration avec des entreprises
                  de location de voitures, tant étrangères que locales, pour
                  garantir la disponibilité de véhicules fiables et répondre aux
                  besoins de déplacement de nos clients.
                </li>
              </ul>

              <Row
                className="justify-content-center"
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                }}
              >
                <Col className="text-center">
                  <h1 className="offres">Client fidèle</h1>
                </Col>
              </Row>
              <img
                src={clientFideleLogo}
                alt="Client Fidele Logo"
                style={{ width: "70px" }}
              />

              <p style={{ fontFamily: "FrankRuhl", fontWeight: "bold"}}>
                En adhérant à notre programme, nos clients fidèles bénéficient
                de nombreux avantages :
              </p>
              <ul style={{ textAlign: "start", fontFamily: "FrankRuhl" }}>
                <li>
                  Réductions exceptionnelles jusqu'à 65% sur les assurances pour
                  véhicules et logements.
                </li>

                <li>
                  Remises exclusives jusqu'à 20% grâce à nos partenariats avec
                  des hôtels locaux, spas et aqua parcs.
                </li>
                <li>
                  Expérience gastronomique avec des réductions jusqu'à 15% dans
                  des restaurants de luxe et familiaux.
                </li>
                <li>
                  Escapades relaxantes dans des complexes touristiques locaux
                  avec des tarifs réduits jusqu'à 20%.
                </li>
                <li>
                  Avantages significatifs dans des établissements de santé pour
                  une prise en charge médicale optimale.
                </li>
              </ul>
            </Col>
          </Row>

          
        </div>
        <div className="d-flex flex-column align-items-center" style={{bottom: "0",}}>
            

           
              <Footer />
         
          </div>
      </div>
    </>
  );
};

export default About;
