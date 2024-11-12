import "./Footer.scss"
import logo from "../../assets/images/logo.svg";
import facebook from "../../assets/images/icon-facebook.svg";
import twitter from "../../assets/images/icon-twitter.svg";
import pinterest from "../../assets/images/icon-pinterest.svg";
import instagram from "../../assets/images/icon-instagram.svg";
// import swirl  from "../../assets/images/bg-pattern-footer-mobile.svg";


function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top-wrapper">
        <img className="footer__logo" src={logo} alt="Insure logo" />
        <div className="footer__links">
          <img className="footer__link" src={facebook} alt="facebook logo" />
          <img className="footer__link" src={twitter} alt="twitter logo" />
          <img className="footer__link" src={pinterest} alt="pinterest logo" />
          <img className="footer__link" src={instagram} alt="instagram logo" />   
        </div>
        {/* <img className="footer__swirl" src={swirl} alt="swirl" /> */}
      </div>
      <div className="footer__bottom-wrapper">
        <ul className="footer__list">
          <li className="footer__list-title">OUR COMPANY</li>
          <li className="footer__list-item">HOW WE WORK</li>
          <li className="footer__list-item">WHY INSURE?</li>
          <li className="footer__list-item">CHECK PRICES</li>
          <li className="footer__list-item">REVIEWS</li>
        </ul>
        <ul className="footer__list">
        <li className="footer__list-title">HELP ME</li>
          <li className="footer__list-item">FAQ</li>
          <li className="footer__list-item">TERMS OF USE</li>
          <li className="footer__list-item">PRIVACY POLICY</li>
          <li className="footer__list-item">COOKIES</li>
        </ul>
        <ul className="footer__list">
        <li className="footer__list-title">CONTACT</li>
          <li className="footer__list-item">SALES</li>
          <li className="footer__list-item">SUPPORT</li>
          <li className="footer__list-item">LIVE CHAT</li>
        </ul>
        <ul className="footer__list">
        <li className="footer__list-title">OTHER</li>
          <li className="footer__list-item">CAREERS</li>
          <li className="footer__list-item">PRESS</li>
          <li className="footer__list-item">LICENSES</li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer