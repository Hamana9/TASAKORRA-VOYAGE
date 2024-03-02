import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Container, Row, ListGroup } from 'react-bootstrap';

function Liste() {
    // Supposons que vous avez une liste d'offres initiale
    const initialOffers = [
        { id: 1, title: 'Offre 1' },
        { id: 2, title: 'Offre 2' },
        { id: 3, title: 'Offre 3' }
    ];

    const [offers, setOffers] = useState(initialOffers);

    const handleDeleteOffer = (id) => {
        // Filtrer les offres pour enlever celle avec l'ID correspondant
        const updatedOffers = offers.filter(offer => offer.id !== id);
        setOffers(updatedOffers);
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
        width:"200px"
        //marginTop: "3%",
      };
    return (
        <div className="container mt-5">
            <h1>Liste des Offres</h1>
            <Container className="mt-5">
                <Row>
                    <Col md={3} style={{ }}>
                        <div className="text-center">
                            <img src="src\assets\logo\tasakorraLogo.png"
                                alt="Logo" className="mb-3" style={{ width: '80px', height: '80px' }} />
                            <p>Tassakorra</p>
                            <button style={{ ...buttonStyle, marginBottom: "7%", padding: "" }}>
                                <a
                                    href="#offres"
                                    style={{ color: "white", textDecoration: "none" }}
                                >
                                   Liste
                                </a>
                            </button>
                            <button style={{ ...buttonStyle, marginBottom: "7%", padding: "" }}>
                                <a
                                    href="#offres"
                                    style={{ color: "white", textDecoration: "none" }}
                                >
                                Ajouter
                                </a>
                            </button>
                            
                            <p>Se déconnecter</p>
                        </div>
                    </Col>
                    <Col md={9}>
                        <h1>Liste des Offres</h1>
                        <ListGroup>
                            {offers.map(offer => (
                                <ListGroup.Item key={offer.id} className="d-flex justify-content-between align-items-center">
                                    {offer.title}
                                    <Button variant="danger" onClick={() => handleDeleteOffer(offer.id)}>Supprimer</Button>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Liste;