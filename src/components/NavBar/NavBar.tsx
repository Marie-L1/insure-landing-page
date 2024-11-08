import "./NavBar.scss"
import { useState } from "react";
import logo from "../../assets/images/logo.svg"
import hambuger from "../../assets/images/icon-hamburger.svg"

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }
  
  return (
    <nav className="navbar">
      <img className="navbar__logo" src={logo} />

      <button className="navbar__toggle" onClick={toggleMenu}>
        <img src={hambuger} />
      </button>

      <ul className={`navbar__links ${menuOpen ? "navbar__links--open" : ""}`}>
        <li className="navbar__link">HOW WE WORK</li>
        <li className="navbar__link">BLOG</li>
        <li className="navbar__link">ACCOUNT</li>
        <li className="navbar__link">VIEW PLANS</li>
      </ul>
    </nav>
  )
}

export default NavBar