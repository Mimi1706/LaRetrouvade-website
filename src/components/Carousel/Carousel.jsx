import { useState } from "react"
import "./Carousel.css"

import arrowLeft from "../../assets/carousel/arrowLeft.svg"
import arrowRight from "../../assets/carousel/arrowRight.svg"

const Carousel = (props) => {
  const { children } = props

  const [currentIndexLarge, setCurrentIndexLarge] = useState(0)
  const [currentIndexSmall, setCurrentIndexSmall] = useState(0)

  const carouselLeft = () => {
    if (window.matchMedia("(min-width: 601px)").matches) {
      setCurrentIndexLarge(
        currentIndexLarge === 0 ? currentIndexLarge : currentIndexLarge - 1
      )
    } else {
      setCurrentIndexSmall(
        currentIndexSmall === 0 ? currentIndexSmall : currentIndexSmall - 1
      )
    }
  }

  const carouselRight = () => {
    if (window.matchMedia("(min-width: 601px)").matches) {
      console.log(Math.floor((children.length - 1) / 4))

      setCurrentIndexLarge(
        currentIndexLarge >= Math.floor((children.length - 1) / 4)
          ? Math.floor((children.length - 1) / 4)
          : currentIndexLarge + 1
      )
    } else {
      setCurrentIndexSmall(
        currentIndexSmall === children.length - 1
          ? currentIndexSmall
          : currentIndexSmall + 1
      )
    }
  }

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <div className="carousel-content-wrapper">
          <div
            className="carousel-content-large"
            style={{ transform: `translateX(-${currentIndexLarge * 100}%)` }}
          >
            {children}
          </div>

          <div
            className="carousel-content-small"
            style={{ transform: `translateX(-${currentIndexSmall * 100}%)` }}
          >
            {children}
          </div>
        </div>
        <div className="carousel-buttons">
          <button onClick={() => carouselLeft()}>
            <img src={arrowLeft} alt="" />
          </button>

          <button onClick={() => carouselRight()}>
            <img src={arrowRight} alt="" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Carousel
