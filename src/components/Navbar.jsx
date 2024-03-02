// fixng the links => accueil + about done
// add links social medias 
// fixing # decale

import React, { useState, useEffect, useRef } from "react";
import "@fortawesome/fontawesome-free/css/all.css";
//import 'bootstrap/dist/css/bootstrap.min.css'; // Assurez-vous d'importer le fichier CSS de Bootstrap

const NavbarTaskorra = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setIsSmallScreen(window.innerWidth < 900);
      console.log("Screen width:", screenWidth);
      setDropdownOpen(false);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    console.log("isSmallScreen:", isSmallScreen);
    // Ajout d'un écouteur d'événement pour fermer le dropdown quand on clique à l'extérieur
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg fixed-top"
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 1000,
          paddingTop: "0.4%",
          paddingBottom: "0.3%",
        }}
      >
        <div className="container-fluid flexSB fixed-top">
          <a
            className="navbar-brand"
            href=""
            style={{ textDecoration: "none" }}
          >
            <h1 style={{ marginTop: "0.4%", padding: "0", margin: "0" }}>
              Tasakorra
            </h1>
          </a>
          <div className="collapse navbar-collapse">
            {isSmallScreen ? (
              <>
                <i
                  className="fas fa-caret-down icon dropdown"
                  type="button"
                  onClick={toggleDropdown}
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                  style={{ backgroundColor: "#FE0000", color: "#F0A9A9" }}
                >
                  {/* <span className="navbar-toggler-icon"></span> */}
                </i>
                <div
                  className={"dropdown-menu" + (dropdownOpen ? " show" : "")}
                >
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="/"
                        onClick={() => setDropdownOpen(false)}
                      >
                        Accueil
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="/apropos"
                        onClick={() => setDropdownOpen(false)}
                      >
                        Offres
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href=""
                        onClick={() => setDropdownOpen(false)}
                      >
                        A propos
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="#contact"
                        onClick={() => setDropdownOpen(false)}
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <>
                <i className="fab fa-facebook-f icon"></i>
                <i className="fab fa-instagram icon"></i>
                <i className="fab fa-whatsapp icon"></i>
                <i className="fa fa-solid fa-envelope icon"></i>
                <i className="fab fa-youtube icon"></i>
                <i
                  className="fas fa-caret-down icon dropdown"
                  onClick={toggleDropdown}
                ></i>
                {dropdownOpen && (
                  <div
                    className="dropdown-menu show"
                    style={{ top: "50px" }}
                    aria-labelledby="navbarDropdown"
                    ref={dropdownRef}
                  >
                    <ul>
                      <li>
                        <a
                          className="dropdown-item"
                          href="/"
                          onClick={() => setDropdownOpen(false)}
                        >
                          Accueil
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href=""
                          onClick={() => setDropdownOpen(false)}
                        >
                          Offres
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="/apropos"
                          onClick={() => setDropdownOpen(false)}
                        >
                          A propos
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="#contact"
                          onClick={() => setDropdownOpen(false)}
                        >
                          Contact
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarTaskorra;
