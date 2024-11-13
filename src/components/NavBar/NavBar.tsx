import "./NavBar.scss";
import { useState, useEffect } from "react";
import logo from "../../assets/images/logo.svg";
import hamburger from "../../assets/images/icon-hamburger.svg";
import close from "../../assets/images/icon-close.svg";
import swirl from "../../assets/images/bg-pattern-mobile-nav.svg";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close menu if resizing to tablet/desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) { 
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

       {/* Close button and logo inside full-screen menu */}
      {menuOpen && (
        <div className="navbar__full-screen">
          <button className="navbar__close" onClick={toggleMenu}>
            <img className="navbar__close-img" src={close} alt="Close" />
          </button>
          <img className="navbar__logo-open" src={logo} alt="Logo" />
        </div>
      )}

      <ul className={`navbar__links ${menuOpen ? "navbar__links--open" : ""}`}>
        <li className="navbar__link">HOW WE WORK</li>
        <li className="navbar__link">BLOG</li>
        <li className="navbar__link">ACCOUNT</li>
        <li className="navbar__link-btn">VIEW PLANS</li>
        <img className="navbar__swirl" src={swirl} alt="Swirl" />
      </ul>
    </nav>
  );
}

export default NavBar;
