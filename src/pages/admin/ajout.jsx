import React, { useState, useEffect } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import OffreForm from "../../components/OffreForm";
import { Button, Col, Container, Row, ListGroup } from "react-bootstrap";
import logo from "../../assets/logo/tasakorraLogo.png";

function Ajout() {
  const handleInsertOffer = async (id, titre) => {};

  const buttonStyle = {
    backgroundColor: "black",
    fontFamily: "AngleciaProDisplay",
    padding: "1% 3%", // Add padding for a button-like appearance
    letterSpacing: "3px",
    textDecoration: "none", // Remove default link underline
    color: "white", // Set text color
    display: "inline-block", // Make it inline-block to set a specific width
    borderRadius: "20px", // Add rounded corners
    width: "200px",
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
                style={{
                  ...buttonStyle,
                  marginBottom: "7%",
                  marginLeft: "-3%",
                }}
              >
                <a
                  href="/liste"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Annuler
                </a>
              </button>
            </Col>
            <Col>
              <button style={{ ...buttonStyle, marginBottom: "7%" }}>
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
              <h1 className="offres">Ajouter une offre</h1>
            </Col>
          </Row>
          <Row  className="justify-content-center"
            style={{
              display: "flex",
              justifyContent: "space-evenly",
            }}>
            <OffreForm />
          </Row>

         
          
        </div>
      </div>
      
    </>
  );
}

export default Ajout;
