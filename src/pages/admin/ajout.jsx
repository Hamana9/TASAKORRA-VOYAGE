import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import OffreForm from "../../components/OffreForm";
import { Button, Col, Container, Row, ListGroup } from 'react-bootstrap';

function Ajout() {





    const handleInsertOffer = async (id, titre) => {

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
        width: "200px"

    };
    return (
        <div className="container mt-5">
            <h1>Liste des Offres</h1>
            <Container className="mt-5">
                <Row>
                    <Col md={3} style={{}}>
                        <div className="text-center">
                            <img src="src\assets\logo\tasakorraLogo.png"
                                alt="Logo" className="mb-3" style={{ width: '80px', height: '80px' }} />
                            <p>Tassakorra</p>
                            <button style={{ ...buttonStyle, marginBottom: "7%", padding: "" }}>
                                <a
                                    href="/liste"
                                    style={{ color: "white", textDecoration: "none" }}
                                >
                                    Liste
                                </a>
                            </button>
                            <button style={{ ...buttonStyle, marginBottom: "7%", padding: "", backgroundColor: "grey", }}>
                                <a
                                    href="/ajout"
                                    style={{ color: "white", textDecoration: "none" }}
                                >
                                    Ajouter
                                </a>
                            </button>

                            <p>
                                <a href="/" > Se déconnecter </a>
                            </p>
                        </div>
                    </Col>
                    <Col md={9}>

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
                                <offreForm />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Ajout;