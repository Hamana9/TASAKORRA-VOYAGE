import React, { useState, useEffect } from "react";

import "@fortawesome/fontawesome-free/css/all.css";

import "./style/Footer.css";
import logoName from "../assets/logo/tasakorraName.png";
import tasakorraLogo from "../assets/logo/tasakorraLogo.png";
const Footer = () => {
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
      <section className="contact-area">
        <div
          className="container"
          style={{ marginTop: "1%", marginBottom: "1%" }}
        >
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="contact-content text-center">
                <a href="#">
                  <img src={logoName} alt="" />
                </a>
                <p>
                  Voyages.. Visites.. Aventure <br /> Restez connecté avec nous
                  pour les dernières mises à jour et annonces !
                </p>

                <div className="hr"></div>
                <h6>
                  Prés de palais d'or, <br /> Centre commercial les galeries
                  2éme étage.
                  <br />
                  Akid Lotfi-Oran.
                </h6>
                {isSmallScreen ? (
                  <h6>
                    +213 7 70 62 34 31 <br /><span>~</span> <br />
                    +213 7 96 50 87 56
                  </h6>
                ) : (
                  <h6>
                    +213 7 70 62 34 31<span>|</span>+213 7 96 50 87 56
                  </h6>
                )}

                <div className="">
                  <ul className="footer-social">
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-whatsapp"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-solid fa-envelope"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <p>
          Copyright &copy; 2024 <img src={tasakorraLogo} alt=" " /> All Rights
          Reserved.
        </p>
      </footer>
    </>
  );
};

export default Footer;
