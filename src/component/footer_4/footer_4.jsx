import React from "react"
import "./footer_4.css"
import { UilEnvelope } from "@iconscout/react-unicons"
import Logo from "../../assets/images/logo.png"
import { UilPhone } from "@iconscout/react-unicons"

function Footer_4() {
  return (
    <>
      <div className="footer_4_container">
        <div className="first_flex">
          <span className="first_flex_span_1"> Join our Community! </span>
          <span className="first_flex_span_2">
            {" "}
            Be the first to know about our promotions, flash sales and discounts{" "}
          </span>
        </div>
        <div className="second_flex">
          <div className="second_flex_input_container">
            <UilEnvelope className="envelope" />
            <input
              type="email"
              placeholder="email"
              className="second_flex_input"
            />
            <div className="second_flex_button_container">
              <a className="second_flex_button"> Sign up </a>
            </div>
          </div>
        </div>
        <div className="main_footer">
          <div className="first_main">
            <img src={Logo} className="uncle_tobi"></img>
            <span>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse interdum sollicitudin orci quis fringilla. Aenean
              finibus arcu ut enim fermentum vehicula. In elementum non augue
              blandit pellentesque
            </span>
            <div className="icons_container"></div>
          </div>
          <div className="second_main">
            <span>My Account </span>
            <ul>
              <li> My Orders </li>
              <li> Favorites </li>
              <li> Account Settings </li>
              <li> Refer a Friend </li>
            </ul>
          </div>
          <div className="third_main">
            <span> Company </span>
            <ul>
              <li> About Us </li>
              <li> How it Works </li>
              <li> FAQs </li>
              <li> Terms & Policies </li>
              <li> Brands and Product </li>
            </ul>
          </div>
          <div className="fourth_main">
            <span> Need Help? </span>
            <ul>
              <li> Help Center </li>
              <li>Contact Us </li>
            </ul>
          </div>
        </div>
        <hr></hr>
        <div className="footer_contact">
          <div className="footer_contact_container">
            <div className="footer_email">
              <UilEnvelope />
              <span> support@uncletobi.shop </span>
              <div className="vertical_line"></div>
            </div>
            <div className="footer_tel">
              <UilPhone />
              <span> +44 278 910 9301</span>
              <div className="vertical_line"></div>
            </div>
            <div className="footer_company">
              <span> An AcresxManna Company</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer_4
