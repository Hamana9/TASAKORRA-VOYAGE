import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Container, Row, ListGroup } from 'react-bootstrap';

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
        const confirmation = window.confirm(`Êtes-vous sûr de vouloir supprimer l'offre  ${titre} ?`);

        // Vérifier si l'utilisateur a confirmé la suppression
        if (confirmation) {
            try {
                const response = await fetch(`https://api-tasakorra.koyeb.app/deloffre/${id}`, {
                    method: 'DELETE'
                });

                if (response.ok) {
                    console.log(`L'offre avec l'ID ${id} a été supprimée avec succès`);
                    window.alert(`L'offre avec l'ID ${id} a été supprimée avec succès`);
                    fetchOffers();
                } else {
                    console.error(`Erreur lors de la suppression de l'offre avec l'ID ${id}`);
                    window.alert(`Erreur lors de la suppression de l'offre avec l'ID ${id}`);
                    // Gérer l'erreur si nécessaire
                }
            } catch (error) {
                console.error('Une erreur s\'est produite :', error);
                window.alert('Une erreur s\'est produite lors de la suppression de l\'offre');
                // Gérer l'erreur si nécessaire
            }
        }
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
                        <div className="text-center  mx-auto">
                            <img src="src\assets\logo\tasakorraLogo.png"
                                alt="Logo" className="mb-3" style={{ width: '80px', height: '80px' }} />
                            <p>Tassakorra</p>
                            <button style={{ ...buttonStyle, marginBottom: "7%", padding: "",backgroundColor: "grey", }}>
                                <a
                                    href="/liste"
                                    style={{ color: "white", textDecoration: "none" }}
                                >
                                    Liste
                                </a>
                            </button>
                            <button style={{ ...buttonStyle, marginBottom: "7%", padding: "" }}>
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
                       
                        <ListGroup>
                            {cardsData.map(offer => (
                                <ListGroup.Item key={offer.id} className="d-flex justify-content-between align-items-center">
                                    {offer.titre}
                                    <Button variant="danger" onClick={() => handleDeleteOffer(offer.id, offer.titre)}>Supprimer</Button>
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