import "./Different.scss"
import snappy from "../../assets/images/icon-snappy-process.svg";
import money from "../../assets/images/icon-affordable-prices.svg";
import person from "../../assets/images/icon-people-first.svg";

function Different() {
  return (
    <section className="different">
      <h1 className="different__main-title">We're different</h1>
      <div className="different__wrapper">
      <img className="different__img" src={snappy} />
      <h2 className="different__title">Snappy Process</h2>
      <p className="different__text">Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms.</p>
      </div>
      <div className="different__wrapper">
        <img className="different__img" src={money} />
        <h2 className="different__title">Affordable Prices</h2>
        <p className="different__text">We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.</p>
      </div>
      <div className="different__wrapper">
      <img className="different__img" src={person} />
      <h2 className="different__title">People First</h2>
      <p className="different__text">Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need it</p>
      </div>
    </section>
  )
}

export default Different