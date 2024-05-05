import React from "react"
import "./footer_2.css"
import footer_vegetable from "../../assets/images/footer_vegetable.png"

function Footer_2() {
  return (
    <>
      <div className="footer_2_container">
        <div className="left_footer_2_sec">
          <img src={footer_vegetable} className="footer_vegetable"></img>
        </div>
        <div className="right_footer_2_sec">
          <span className="right_footer_2_span_1">
            {" "}
            Flashsales on all Fresh Foods!{" "}
          </span>
          <span className="right_footer_2_span_2"> Up to 70% off</span>
          <div className="counter">
            <div className="days">
              <div className="day">
                <span className="day_1"> 0 </span>
                <span className="day_2"> 9 </span>
              </div>
              <span className="time_prefix"> DAYS</span>
            </div>
            <div className="days">
              <div className="day">
                <span className="day_1"> 2 </span>
                <span className="day_2"> 0 </span>
              </div>
              <span className="time_prefix"> HOURS</span>
            </div>
            <div className="days">
              <div className="day">
                <span className="day_1"> 5 </span>
                <span className="day_2"> 5 </span>
              </div>
              <span className="time_prefix"> MINUTES </span>
            </div>
            <div className="days">
              <div className="day">
                <span className="day_1"> 1 </span>
                <span className="day_2"> 0 </span>
              </div>
              <span className="time_prefix"> SECONDS </span>
            </div>
          </div>
          <div className="right_footer_2_button">
            <a> Shop Now</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer_2
