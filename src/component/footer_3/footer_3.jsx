import React from "react"
import "./footer_3.css"
import chef from "../../assets/images/chef.jpg"

function Footer_3() {
  return (
    <>
      <div className="footer_3_container">
        <div className="footer_3_left_sec">
          <div className="video_container">
            <img src={chef} className="chef_image"></img>
          </div>
        </div>
        <div className="footer_3_right_sec">
          <span className="footer_3_span_1">
            {" "}
            Discover Culinary <br></br>Delights{" "}
          </span>
          <span className="footer_3_span_2">
            {" "}
            Indulge your senses and elevate your culinary adventures with our
            curated selection of recipes, cooking tips, and ingredient guides.
            From mouthwatering dishes to expert techniques{" "}
          </span>
          <a className="footer_3_button"> Explore</a>
        </div>
      </div>
    </>
  )
}

export default Footer_3
