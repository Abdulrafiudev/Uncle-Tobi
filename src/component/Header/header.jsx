import React, { useState } from "react"
import "./header.css"
import Logo from "../../assets/images/logo.png"
import uk from "../../assets/images/uk_image.png"
import nig from "../../assets/images/nig_image.png"
import user_img from "../../assets/images/user_image.png"

function Header(props) {
  // Handling showing user image when he is logged in
  let [logged, set_logged] = useState(props.logged_in)

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
          <div className="bigger_country_div">
            <div className="country_div">
              <img src={uk} className="uk_image"></img>
              <a className="uk_text"> Shop in UK </a>
            </div>
            <div className="green_line"></div>
          </div>
          <div className="bigger_country_div">
            <div className="country_div">
              <img src={nig} className="nig_image"></img>
              <a className="nig_text"> Shop in Nigeria </a>
            </div>
            <div className="green_line"></div>
          </div>
          {logged ? (
            <div className="user_container">
              <img src={user_img} className="user_image"></img>
              <span> Hi Mike </span>
            </div>
          ) : (
            <div>
              <a className="account_button"> My Account </a>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Header
