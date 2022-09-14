import "./HeroBanner.css"

import heroBannerImg from "../../assets/banner/cover.jpg"

import { useSelector } from "react-redux"

const HeroBanner = () => {
  const data = useSelector((state) => state.allLanguages.language)

  return (
    <div className="hero-banner">
      <img src={heroBannerImg} alt="banner cover"></img>
      <div className="hero-banner-img-shade"></div>
      <div className="hero-banner-title">
        <h1>La Retrouvade</h1>
        <h2>{data.heroBanner.h2}</h2>
      </div>
    </div>
  )
}

export default HeroBanner
