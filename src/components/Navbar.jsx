import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.css";
//import 'bootstrap/dist/css/bootstrap.min.css'; // Assurez-vous d'importer le fichier CSS de Bootstrap
import { Navbar, Nav, NavDropdown } from "react-bootstrap"; // Importez les composants de navigation de Bootstrap

const NavbarTaskorra = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 900);
      setDropdownOpen(false);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
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
          <NavLink
            className="navbar-brand"
            to=""
            style={{ textDecoration: "none" }}
          >
            <h1 style={{ marginTop: "0.4%", padding: "0", margin: "0" }}>
              Tasakorra
            </h1>
          </NavLink>
          <div className="collapse navbar-collapse">
            {isSmallScreen ? (
              <i className="fas fa-caret-down icon"></i>
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
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <ul>
                      <li>
                        <NavLink className="dropdown-item" to="">
                          Accueil
                        </NavLink>
                      </li>
                      <li>
                        <NavLink className="dropdown-item" to="">
                          Offres
                        </NavLink>
                      </li>
                      <li>
                        <NavLink className="dropdown-item" to="">
                          A propos
                        </NavLink>
                      </li>
                      <li>
                        <NavLink className="dropdown-item" to="">
                          Contact
                        </NavLink>
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
