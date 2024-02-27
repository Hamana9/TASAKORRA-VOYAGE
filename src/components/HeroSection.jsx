import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const HeroSection = () => {
  return (
    <div style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
      <Container fluid>
        <Row
          className="align-items-center justify-content-center"
          style={{ minHeight: "100vh" }}
        >
          <Col md={8}>
            <h1>Welcome to My Website</h1>
            <p>This is a hero section example using Bootstrap and React</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroSection;
