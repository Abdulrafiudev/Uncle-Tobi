import React from "react"
import Header from "../../component/Header/header"
import Search from "../../component/search/search"
import "./homepage.css"
import vegetable from "../../assets/images/vegetable.png"
import baby from "../../assets/images/baby.jpg"

function Home() {
  return (
    <>
      <Header />
      <Search />
      <div className="homepage_intro">
        <div className="left_intro">
          <div className="left_intro_sec">
            <span className="heading_intro">
              From farm to fork,<br></br> we've got your<br></br> cravings
              covered
            </span>
            <span className="heading_detail">
              {" "}
              Your one-stop shop for fresh flavors, delightful indulgences, and
              <br></br>
              kitchen essentials
            </span>
            <div className="shop_container">
              <a className="shop_now_button"> Go to Shop</a>
            </div>
          </div>
          <div className="right_intro_sec">
            <div className="vegetable_container">
              <img src={vegetable} className="vegetable"></img>
            </div>
          </div>
        </div>
        <div className="right_intro">
          <div className="upper_right_sec">
            <div className="first_right">
              <a className="promotion"> Promotion </a>
              <span> 00:34:10</span>
            </div>
            <div className="second_right">
              <span> Red Chill Sauce </span>
            </div>
            <div className="third_right">
              <div>
                <span className="bigger_num"> £300 </span>
                <span className="smaller_num"> £270 </span>
              </div>
            </div>
            <div className="fourth_right">
              <img src={baby} className="baby_pic"></img>
            </div>
            <div className="fifth_right">
              <span> Shop </span>
            </div>
          </div>
          <div className="lower_right_sec">
            <div className="first_lower">
              <span> Redeem your Signup Coupon</span>
            </div>
            <div className="second_lower">
              <span> 10% OFF </span>
            </div>
            <div className="third_lower">
              <a> Redeem</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
