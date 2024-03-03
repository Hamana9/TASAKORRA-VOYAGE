import React, { useState, useEffect } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import logo from "../../assets/logo/tasakorraLogo.png";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false); // État pour suivre si l'utilisateur est connecté

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

  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    // Vérifier les informations de connexion
    if (username === "admin" && password === "admin" || username === "azizi@tasakorra.com" && password === "M2CIM" || username === "gomache@tasakorra.com" && password === "tasakorra&Admin1999" || username === "benabide@tasakorra.com" && password === "mehdi@Admin6790" || username === "hamana@tasakorra.com" && password === "narami&Admine89066" || username === "bendoukha@tasakura.com" && password === "espore&Admine78") {
      setLoggedIn(true);
      
      navigate("/liste");
    } else {
      alert("Invalid username or password");
    }
  };

  const seConnecterStyle = {

    marginTop: "30px",
    color: "black",
    backgroundColor: "#F0A9A9",
    padding: "12px 30px",
    fontSize: "18px",
    border: "none",
    borderRadius: "25px",
    cursor: "pointer",
    fontFamily: 'AngleciaProDisplay',

  }

  return (


    <div style={{ backgroundColor: "#F0A9A9", height: "100%", width: "100%", fontFamily: "FrankRuhl" }}>
      <div
        className="d-flex flex-column align-items-center "
        style={{
          position: "absolute",
          top: "50%",
          left: isSmallScreen ? "50%" : "50%", //50 ON PC 35 ON PHONE
          transform: "translate(-50%, -50%)",
        }}
      >
        <Row
          className="justify-content-around form-box container"
          style={{
            display: "inline-block",
            justifyContent: "center",
            opacity: "0.9",
            borderRadius: "2%",
            padding: "20px",
            width: "380px",
            height: "350px",
            backgroundColor: "white",
          }}
        >
          <Row
            className="header-form"
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "15px",
            }}
          >
            <img src={logo} alt="" style={{ width: "40%" }} />
          </Row>

          <form onSubmit={handleSubmit}>
            <Row style={{ display: "flex", justifyContent: "flex-start", marginBottom: "5%" }}>
              <Col style={{ marginRight: "3%" }}>

                <span
                  className="input-group-text d-flex align-items-center justify-content-center"
                  style={{ width: "30%", }}
                >
                  <i
                    className="fa fa-user"
                    style={{ fontSize: "1.8rem", color: "#F0A9A9" }}
                  ></i>
                </span>



              </Col>
              <Col style={{ width: "120%" }}><input
                type="text"
                className="form-control"
                placeholder="Identifiant"
                value={username} onChange={(e) => setUsername(e.target.value)}
              /></Col>
            </Row>

            <Row style={{ display: "flex", justifyContent: "flex-start" }}>
              <Col style={{ marginRight: "3%" }}>

                <span
                  className="input-group-text d-flex align-items-center justify-content-center"
                  style={{ width: "30%" }}
                >
                  <i
                    className="fa fa-lock"
                    style={{ fontSize: "1.8rem", color: "#F0A9A9" }}
                  ></i>
                </span>


              </Col>
              <Col style={{ width: "120%" }}>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Mot de passe"
                  value={password} onChange={(e) => setPassword(e.target.value)}
                />
              </Col>
            </Row>



            <Row>
              {" "}
              <button type="submit" className=" seConnecterStyle  " style={seConnecterStyle}>
                Se Connecter
              </button>
            </Row>
          </form>
        </Row>
      </div>
    </div>


  );
}

export default Login;
