import "./Hero.scss"
import heroImg from "../../assets/images/image-intro-mobile.jpg"
import swirl1 from "../../assets/images/bg-pattern-intro-left-mobile.svg"
import swirl2 from "../../assets/images/bg-pattern-intro-right-mobile.svg"

function Hero() {
  return (
    <section className="hero">
      <img className="hero__img" src={heroImg} />

      <img className="hero__swirl-top" src={swirl1} />
      <div className="hero__content">
        <h1 className="hero__title">Humanizing your insurance.</h1>
        <p className="hero__text">Get your life insurance coverage easier and faster. We blend our expertise 
        and technology to help you find the plan that’s right for you. Ensure you and your loved ones are 
        protected.</p>
        <button className="hero__btn">VIEW PLANS</button>
      </div>
      <img className="hero__swirl-bottom" src={swirl2} />
    </section>
  )
}

export default Hero