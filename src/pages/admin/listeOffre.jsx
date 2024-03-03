import React, { useState, useEffect } from "react";
import { Button, Table, Col, Container, Row, ListGroup } from "react-bootstrap";
import "@fortawesome/fontawesome-free/css/all.css";
import logo from "../../assets/logo/tasakorraLogo.png";
function Liste() {
  const [cardsData, setCardsData] = useState([]);

  const fetchOffers = async () => {
    fetch("https://api-tasakorra.koyeb.app/offre")
      .then((response) => response.json())
      .then((data) => setCardsData(data))
      .catch((error) =>
        console.error("Erreur lors de la récupération des données:", error)
      );
  };

  useEffect(() => {
    fetchOffers(); // Charger les offres initiales lors du montage du composant
  }, []);

  const handleDeleteOffer = async (id, titre) => {
    // Afficher une boîte de dialogue de confirmation
    const confirmation = window.confirm(
      `Êtes-vous sûr de vouloir supprimer l'offre  ${titre} ?`
    );

    // Vérifier si l'utilisateur a confirmé la suppression
    if (confirmation) {
      try {
        const response = await fetch(
          `https://api-tasakorra.koyeb.app/deloffre/${id}`,
          {
            method: "DELETE",
          }
        );

        if (response.ok) {
          console.log(`L'offre avec l'ID ${id} a été supprimée avec succès`);
          window.alert(`L'offre avec l'ID ${id} a été supprimée avec succès`);
          fetchOffers();
        } else {
          console.error(
            `Erreur lors de la suppression de l'offre avec l'ID ${id}`
          );
          window.alert(
            `Erreur lors de la suppression de l'offre avec l'ID ${id}`
          );
          // Gérer l'erreur si nécessaire
        }
      } catch (error) {
        console.error("Une erreur s'est produite :", error);
        window.alert(
          "Une erreur s'est produite lors de la suppression de l'offre"
        );
        // Gérer l'erreur si nécessaire
      }
    }
  };

  const buttonStyle = {
    marginTop:"5%",
    backgroundColor: "black",
    fontFamily: "FrankRuhl",
    padding: "1% 3%", // Add padding for a button-like appearance
    letterSpacing: "3px",
    textDecoration: "none", // Remove default link underline
    color: "white", // Set text color
    display: "inline-block", // Make it inline-block to set a specific width
    borderRadius: "20px", // Add rounded corners
    width: "180px",
    backgroundColor: "#FE0000"
  };
  return (
    <>
      <div
        style={{
          height: "100vh",
          width: "100vw",
        }}
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
              <h1 className="offres">Tasakorra</h1>
            </Col>
          </Row>
          <Row style={{ display: "flex", justifyContent: "center" }}>
            <img src={logo} alt="" />
          </Row>
          <Row style={{ display: "flex", justifyContent: "center" }}>
            <Col>
              {" "}
              <button
                style={{ ...buttonStyle, marginBottom: "7%",marginLeft:"-3%"}}
              >
                <a
                  href="/ajout"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Ajouter
                </a>
              </button>
            </Col>
            <Col>
              <button
                style={{ ...buttonStyle, marginBottom: "7%" }}
              >
                <a href="/" style={{ color: "white", textDecoration: "none" }}>
                  {" "}
                  Se déconnecter{" "}
                </a>
              </button>
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
              <h1 className="offres">Liste Admine des Offres:</h1>
            </Col>
          </Row>
          <Row style={{ display: "flex", justifyContent: "center" }}>
            <div
              className="container"
              style={{
                width: "90%",
                padding: "2rem 0rem",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Table bordered>
                <thead
                  style={{ fontWeight: "bolder", color: "red", border: "3px" }}
                >
                  <tr>
                    <th scope="col">Titre d'offre</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody style={{ justifyContent: "start" }}>
                  {cardsData.map((offer) => (
                    <tr key={offer.id}>
                      <td>{offer.titre}</td>
                      <td>
                        <button variant="primary" style={{ color: "#007BFF" }}>
                          <i class="fa-regular fa-eye"></i>
                        </button>
                        <button variant="success" style={{ color: "#28A745" }}>
                          <i className="fas fa-edit"></i>
                        </button>
                        <button
                          variant="danger"
                          style={{ color: "#DC3545" }}
                          onClick={() =>
                            handleDeleteOffer(offer.id, offer.titre)
                          }
                        >
                          <i className="far fa-trash-alt"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Row>
        </div>
      </div>

    </>
  );
}

export default Liste;
