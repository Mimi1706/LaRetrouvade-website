import HeroBanner from "../components/HeroBanner/HeroBanner"
import "./Home.css"

import carousel1 from "../assets/carousel/01.jpg"
import carousel2 from "../assets/carousel/02.jpg"
import carousel3 from "../assets/carousel/03.jpg"
import carousel4 from "../assets/carousel/04.jpg"
import carousel5 from "../assets/carousel/05.jpg"
import carousel6 from "../assets/carousel/06.jpg"

import logo1 from "../assets/main/logo_01.png"
import logo2 from "../assets/main/logo_02.svg"

import link1 from "../assets/main/lodgings.jpg"
import link2 from "../assets/main/food.jpg"
import link3 from "../assets/main/activities.jpg"

import arrowTop from "../assets/main/arrowTop.svg"
import arrowBottom from "../assets/main/arrowBottom.svg"

import { useSelector } from "react-redux"
import Carousel from "../components/Carousel/Carousel"
import { Link } from "react-router-dom"

const Home = () => {
  const data = useSelector((state) => state.allLanguages.language)

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const goToContent = () => {
    window.scrollTo({
      top: 750,
      behavior: "smooth",
    })
  }

  return (
    <>
      <main>
        <HeroBanner />

        <button className="hero-banner-discover" onClick={() => goToContent()}>
          <span>{data.heroBanner.btn}</span>
          <img src={arrowBottom} alt="arrow icon"></img>
        </button>

        <button className="main-top-btn" onClick={() => goToTop()}>
          <img src={arrowTop} alt="go to top button"></img>
        </button>

        <section className="main-description">
          <h1>{data.description.h1}</h1>
          <p>{data.description.p1}</p>
          <p>{data.description.p2}</p>
        </section>

        <Carousel>
          <img src={carousel1} alt="carousel"></img>
          <img src={carousel2} alt="carousel"></img>
          <img src={carousel3} alt="carousel"></img>
          <img src={carousel4} alt="carousel"></img>
          <img src={carousel5} alt="carousel"></img>
          <img src={carousel6} alt="carousel"></img>
        </Carousel>

        <section className="main-review">
          <div>
            <h1>{data.review.h1}</h1>
            <p>{data.review.p1}</p>
          </div>
          <img src={logo1} alt="petit futé logo"></img>
        </section>

        <div className="main-navigation">
          <Link to={"/"}>
            <img src={link1} alt="" />
            <div className="img-shade"></div>
            <span>{data.navigation.lodgings}</span>
          </Link>

          <Link to={"/"}>
            <img src={link2} alt="" />
            <div className="img-shade"></div>
            <span>{data.navigation.food}</span>
          </Link>

          <Link to={"/"}>
            <img src={link3} alt="" />
            <div className="img-shade"></div>
            <span>{data.navigation.activities}</span>
          </Link>
        </div>
        <div className="main-availabilities">
          <Link to={"/"}>{data.navigation.availabilities}</Link>
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2825.461989141175!2d4.211598825081253!3d44.91393972095381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b4cd48bc42310b%3A0x11f45926ecc912cc!2sLa%20Retrouvade!5e0!3m2!1sfr!2sfr!4v1663091617825!5m2!1sfr!2sfr"
          width="100%"
          height="450"
          loading="lazy"
          title="google map"
        ></iframe>
      </main>

      <footer>
        <div className="footer-about">
          <div>
            <h1>{data.about.h1}</h1>
            <p>{data.about.p1}</p>
          </div>
          <img src={logo2} alt="logo"></img>
        </div>
        <div className="footer-contact">
          <h1>{data.contact.h1}</h1>
          <p>
            <b>{data.contact.contactAddress}</b>
            {data.contact.address}
          </p>
          <p>
            <b>{data.contact.contactPhone}</b>
            {data.contact.phone}
          </p>
          <p>
            <b>{data.contact.contactMail}</b>
            {data.contact.mail}
          </p>
        </div>
      </footer>
    </>
  )
}

export default Home
