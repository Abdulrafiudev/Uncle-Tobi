import React from "react"
import "./holding_page.css"
import logo from "../../assets/images/logo.png"
import cooking from "../../assets/images/cooking_items.png"
import Logo from "./holding_array"
import background from "../../assets/images/background.png"
import { UilListUiAlt } from "@iconscout/react-unicons"

function Holding() {
  let year = new Date().getFullYear()
  return (
    <>
      <div className="header">
        <div className="left_header_section">
          <img src={logo} className="header_logo"></img>
        </div>
        <div className="right_header_section">
          <button className="header_button"> Stay Informed </button>
          <UilListUiAlt className="menu_icon" />
        </div>
      </div>
      <div className="hero_container">
        <div className="hero">
          <div className="left_hero_section">
            <span className="span_1">
              {" "}
              We are <br></br> Cooking
              <br /> Something!{" "}
            </span>
            <span className="span_2">
              Our online food shop is lunching soon, Be the first to know when
              <br></br>
              we fully Launch
            </span>
            <button className="hero_button"> Stay Informed </button>
          </div>
          <div className="right_hero_section">
            <img src={cooking} className="cooking_items"></img>
          </div>
        </div>
      </div>
      <div className="brand">
        <span className="brand_span"> Our Brands and Products </span>
        <div className="brand_logo">
          {Logo.map((images, index) => {
            return (
              <img
                className="brand_logo_images"
                src={images.img}
                key={index}
                style={{
                  height: images.height,
                  width: images.width,
                  marginRight: images.margin_right,
                  marginLeft: images.margin_left,
                  cursor: "pointer",
                  zIndex: 1,
                }}
              ></img>
            )
          })}
        </div>
      </div>
      <div className="form_background">
        <img src={background} className="background_image"></img>
        <form>
          <label className="form_heading">
            {" "}
            Be the First to Know When we Launch!
          </label>
          <div className="form_div">
            <label> First Name</label>
            <input type="text" required />
          </div>
          <div className="form_div">
            <label> Last Name</label>
            <input type="text" required />
          </div>
          <div className="form_div">
            <div className=""></div>
            <label> Email Address</label>
            <input type="email" required />
          </div>
          <div className="form_div">
            <label> Country </label>
            <input type="text" required />
          </div>
          <div className="form_div phone_div">
            <label> Phone Number</label>
            <input type="number" required />
          </div>
          <div className="checkbox_div">
            <input type="checkbox" className="check" />
            <span> Send me regular newsletter and product updates</span>
          </div>
          <div className="form_button">
            <input
              type="submit"
              value="Stay informed"
              className="form_main_button"
            />
          </div>
        </form>
        <hr></hr>
        <div className="copyright_container">
          <span className="copyright"> Copyright {year} UncleTobi.shop </span>
        </div>
      </div>
    </>
  )
}
export default Holding
