import "./Header.css"

import mail from "../../assets/header/mail.svg"
import phone from "../../assets/header/phone.svg"
import facebook from "../../assets/header/facebook.svg"
import france from "../../assets/header/france.svg"
import uk from "../../assets/header/uk.svg"

import { useDispatch, useSelector } from "react-redux"
import switchLang from "../../redux/actions/index"

const Header = () => {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.allLanguages.language)

  return (
    <header>
      <div className="header-infos">
        <div className="header-contact">
          <a href="mailto:laretrouvade@gmail.com">
            <img src={mail} alt="mail logo" className="header-infos-logo"></img>
          </a>
          <a href="tel:0620256439">
            <img
              src={phone}
              alt="phone logo"
              className="header-infos-logo"
            ></img>
            06 20 25 64 39
          </a>
        </div>
        <a href="https://fr-fr.facebook.com/La.Retrouvade">
          {" "}
          <img
            src={facebook}
            alt="facebook logo"
            className="facebook-logo"
          ></img>
        </a>
        <button onClick={() => dispatch(switchLang("fr"))}>
          <img src={france} alt="french flag" className="french-flag"></img>
        </button>
        <button onClick={() => dispatch(switchLang("eng"))}>
          <img src={uk} alt="english flag"></img>
        </button>
      </div>

      <div className="header-menu">
        <span>La Retrouvade</span>
        <nav>
          <label className="menu-burger">☰</label>
          <input id="menu-toggle" type="checkbox" />

          <ul className="menu-paths">
            <li>{data.headerNav.lodding}</li>
            <li>{data.headerNav.guestTable}</li>
            <li>{data.headerNav.activities}</li>
            <li>{data.headerNav.access}</li>
            <li className="menu-blog-button">{data.headerNav.blog}</li>
          </ul>

          <button className="menu-reserve-button">
            {data.headerNav.reserve}
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header
