import "./Footer.scss"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top-wrapper">
        <img className="footer__logo" />
        <div className="footer__links">
          <img className="footer__link" />
          <img className="footer__link" />
          <img className="footer__link" />  
        </div>
      </div>
      <div className="footer__bottom-wrapper">
        <ul className="footer__list">
          <li className="footer__list-item">OUR COMPANY</li>
          <li className="footer__list-item">HOW WE WORK</li>
          <li className="footer__list-item">WHY INSURE?</li>
          <li className="footer__list-item">CHECK PRICES</li>
          <li className="footer__list-item">REVIEWS</li>
        </ul>
        <ul className="footer__list">
          <li className="footer__list-item">FAQ</li>
          <li className="footer__list-item">TERMS OF USE</li>
          <li className="footer__list-item">PRIVACY POLICY</li>
          <li className="footer__list-item">COOKIES</li>
        </ul>
        <ul className="footer__list">
          <li className="footer__list-item">SALES</li>
          <li className="footer__list-item">SUPPORT</li>
          <li className="footer__list-item">LIVE CHAT</li>
        </ul>
        <ul className="footer__list">
          <li className="footer__list-item">CAREERS</li>
          <li className="footer__list-item">PRESS</li>
          <li className="footer__list-item">LICENSES</li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer