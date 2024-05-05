import React from "react"
import "./footer_1.css"
import delivery from "../../assets/images/delivery.png"

function Footer_1() {
  return (
    <>
      <div className="footer_1_container">
        <div className="left_footer_1_sec">
          <span className="footer_1_span_1">
            {" "}
            Didn’t See What you are <br></br> looking for yet?{" "}
          </span>
          <span className="footer_1_span_2"> Explore our Product page </span>
          <a className="footer_1_button"> Go to Shop </a>
        </div>
        <div className="right_footer_1_sec">
          <img src={delivery} className="delivery"></img>
        </div>
      </div>
    </>
  )
}

export default Footer_1
