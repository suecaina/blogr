import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  //opposite of click !click - true when clicked
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  //sign up button shows more than 960 but mobile bars menu shows when less than
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  //render one time to get rid of sign up button in middle of navbar
  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Blogr
          </Link>

          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Products <i class="fa fa-angle-down" aria-hidden="true"></i>
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/products"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Company <i class="fa fa-angle-down" aria-hidden="true"></i>
              </Link>
            </li>

            <li className="nav-item nav-item__connect">
              <Link
                to="/sign-up"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Connect <i class="fa fa-angle-down" aria-hidden="true"></i>
              </Link>
              <ul className="dropdown">
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Newsletter</a>
                </li>
                <li>
                  <a href="#">LinkedIn</a>
                </li>
              </ul>
            </li>

            {/* <li className="nav-item">
              <Link
                to="/sign-up"
                className="nav-links btn"
                onClick={closeMobileMenu}
              >
                hey
              </Link>
            </li> */}
          </ul>
          {button && <Button buttonStyle="btn--none">Login</Button>}
          {button && <Button buttonStyle="btn--primary">Sign Up</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
