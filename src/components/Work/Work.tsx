import "./Work.scss"
import swirl from "../../assets/images/bg-pattern-how-we-work-mobile.svg";

function Work() {
  return (
    <section className="work">
      <h1 className="work__title">Find out more about how we work</h1>
      <img src={swirl} className="work__swirl" alt="swirl" />
      <button className="work__btn">HOW WE WORK</button>
    </section>
  )
}

export default Work