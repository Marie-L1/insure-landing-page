import "./NavBar.scss";
import { useState, useEffect } from "react";
import logo from "../../assets/images/logo.svg";
import hamburger from "../../assets/images/icon-hamburger.svg";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close menu if resizing to tablet/desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) { // Adjust to your tablet breakpoint
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="navbar">
      <img className="navbar__logo" src={logo} alt="Logo" />

      <button className="navbar__toggle" onClick={toggleMenu}>
        <img src={hamburger} alt="Menu" />
      </button>

      <ul className={`navbar__links ${menuOpen ? "navbar__links--open" : ""}`}>
        <li className="navbar__link">HOW WE WORK</li>
        <li className="navbar__link">BLOG</li>
        <li className="navbar__link">ACCOUNT</li>
        <li className="navbar__link-btn">VIEW PLANS</li>
      </ul>
    </nav>
  );
}

export default NavBar;
