import React from "react"
import "./holding_page.css"
import logo from "../../assets/images/logo.png"
import cooking from "../../assets/images/cooking_items.png"
import Logo from "./holding_array"

function Holding() {
  return (
    <>
      <div className="header">
        <div className="left_header_section">
          <img src={logo} className="header_logo"></img>
        </div>
        <div className="right_header_section">
          <button className="header_button"> stay informed </button>
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
            <button className="hero_button"> stay informed </button>
          </div>
          <div className="right_hero_section">
            <img src={cooking} className="cooking_items"></img>
          </div>
        </div>
      </div>
      <div className="brand">
        <span className="brand_span"> Our Brands and Products </span>
        <div className="brand_logo">
          {Logo.map(images => {
            return (
              <img
                className="brand_logo_images"
                src={images.img}
                style={{
                  height: images.height,
                  width: images.width,
                  cursor: "pointer",
                }}
              ></img>
            )
          })}
        </div>
      </div>
    </>
  )
}
export default Holding
