import "./Hero.scss"
import heroImg1 from "../../assets/images/image-intro-mobile.jpg"
import heroImg2 from "../../assets/images/image-intro-desktop.jpg";
import swirl1 from "../../assets/images/bg-pattern-intro-left-mobile.svg"
import swirl2 from "../../assets/images/bg-pattern-intro-right-mobile.svg"
import swirl3 from "../../assets/images/bg-pattern-intro-left-desktop.svg"
import swirl4 from "../../assets/images/bg-pattern-intro-right-desktop.svg"

function Hero() {
  return (
    <section className="hero">
      <img className="hero__img-mobile" src={heroImg1} />
      <img className="hero__img-desktop" src={heroImg2} />

      <img className="hero__swirl-top-mobile" src={swirl1} />
      <img className="hero__swirl-top-desktop" src={swirl3} />
      <div className="hero__content">
        <h1 className="hero__title">Humanizing your insurance.</h1>
        <p className="hero__text">Get your life insurance coverage easier and faster. We blend our expertise 
        and technology to help you find the plan that’s right for you. Ensure you and your loved ones are 
        protected.</p>
        <button className="hero__btn">VIEW PLANS</button>
      </div>
      <img className="hero__swirl-bottom-mobile" src={swirl2} />
      <img className="hero__swirl-bottom-desktop" src={swirl4} />
    </section>
  )
}

export default Hero