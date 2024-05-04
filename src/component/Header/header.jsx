import React from "react"
import "./header.css"
import Logo from "../../assets/images/logo.png"
import uk from "../../assets/images/uk_image.png"
import nig from "../../assets/images/nig_image.png"

function Header() {
  return (
    <>
      <div className="homepage_header">
        <div className="homepage_left_section">
          <img src={Logo} className="uncle_tobi"></img>
          <ul>
            <li> Product Categories </li>
            <div className="vertical_line"></div>
            <li> New Products </li>
            <div className="vertical_line"></div>
            <li> Flash Sales </li>
            <div className="vertical_line"></div>
            <li> Promotions </li>
            <div className="vertical_line"></div>
            <li> Bulk Order </li>
          </ul>
        </div>
        <div className="homepage_right_section">
          <div className="country_div">
            <img src={uk} className="uk_image"></img>
            <span className="uk_text"> Shop in UK </span>
          </div>
          <div className="country_div">
            <img src={nig} className="nig_image"></img>
            <span className="nig_text"> Shop in Nigeria </span>
          </div>
          <div>
            <a className="account_button"> My Account </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
