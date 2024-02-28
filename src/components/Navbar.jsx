import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.css";

const NavbarTaskorra = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
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
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container-fluid flexSB">
        <NavLink
          className="navbar-brand"
          to=""
          style={{ textDecoration: "none" }}
        >
          <h1>Tasakorra</h1>
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
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <ul>
                    
                    <li>
                      <NavLink className="dropdown-item" to="/home">
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="/about">
                        About
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
  );
};

export default NavbarTaskorra;
