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

      <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
        <li className="navbar__link"><a href="#home">Home</a></li>
        <li className="navbar__link"><a href="#about">About</a></li>
        <li className="navbar__link"><a href="#services">Services</a></li>
        <li className="navbar__link"><a href="#contact">Contact</a></li>
      </ul>


    </nav>
  )
}

export default NavBar