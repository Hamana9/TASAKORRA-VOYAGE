import React, { useState, useEffect } from 'react';
import { Row, Col, Card } from 'react-bootstrap'; // Assurez-vous d'importer les composants React Bootstrap si vous les utilisez

const generateCards = (cardsData) => {
    const cards = cardsData.map(card => (
      <Col
        key={card.id}
        xs={6}
        sm={6}
        md={6 / cardsData.length}
        lg={3}
        xl={3}
        style={{ marginBottom: "5%", marginLeft: "3%" }}
      >
        <Card>
          <Card.Body>
            <Card.Title>{card.titre}</Card.Title>
            <Card.Text>
              Durée: {card.duree}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    ));
  
    return (
      <Row
        className="justify-content-center"
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          textAlign: "center",
        }}
      >
        {cards}
      </Row>
    );
  };
  
  const Test = () => {
    const [cardsData, setCardsData] = useState([]);
  
    useEffect(() => {
    // Faites une requête pour obtenir les données JSON
    //   fetch('/src/offres.json')
    fetch('https://api-tasakorra.koyeb.app/offre', {
        method: 'GET',

        // headers: {
        //     'Content-Type': 'application/json',
        //     'Accept': '*/*'
        // }
        })
        .then(response => response.json())
        .then(data => setCardsData(data))
        .catch(error => console.error('Erreur lors de la récupération des données:', error));
    }, []);
  
    return (
      <div 
      style={{ marginTop: "50%", marginLeft: "3%" }}
      >
        {generateCards(cardsData)}
      </div>
    );
  };
  
  export default Test;