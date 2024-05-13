import React, { useEffect, useRef, useState } from "react"
import "./holding_page.css"
import logo from "../../assets/images/logo.png"
import cooking from "../../assets/images/cooking_items.png"
import vege from "../../assets/images/vege.png"
import Logo from "./holding_array"
import background from "../../assets/images/background.png"
import { UilListUiAlt } from "@iconscout/react-unicons"
import { isMobile } from "react-device-detect"
import axios from "axios"

function Holding() {
  //Sending the form data to the backend
  let [form_data, set_form_data] = useState({
    first_name: "",
    last_name: "",
    email_address: "",
    country: "",
    phone_number: "",
    checked: "false",
  })

  //Handling countries placeholder

  let [placeholder, set_placeholder] = useState(``)

  useEffect(() => {
    ;(async () => {
      try {
        let response = await axios.get(
          `https://restcountries.com/v3.1/name/${form_data.country}`
        )
        let country = response.data[0]
        console.log(country.idd.root + country.idd.suffixes[0])
        set_placeholder(country.idd.root + country.idd.suffixes[0])
      } catch (err) {
        console.log(`unable to fetch countries`)
        set_placeholder(``)
      }
    })()
  }, [form_data.country])

  //Function to handle input change

  async function handle_change(event) {
    let { name, value } = event.target
    set_form_data(prev_value => {
      return {
        ...prev_value,
        [name]: value,
        checked: event.target.checked.toString(),
      }
    })
  }

  // Function to handle form submission
  async function handle_submit(event) {
    event.preventDefault()
    try {
      let response = await axios.post(
        `https://sheet.best/api/sheets/b79ab269-5ead-490a-b91a-20c409a7e4fe`,
        form_data
      )
      console.log(response.data)
    } catch (err) {
      console.log(`not sent`)
    }
  }

  //handling googlesheet submission with free API
  async function handle_submit_2(event) {
    event.preventDefault()

    try {
      let response = await axios.post(
        `https://script.google.com/macros/s/AKfycbz34Y8iwAfqiEwQPbgNpv51RDNuVXxGzCqjnwQyKNaWe1CzVQdcjae0SbdQK6qfJ_i1WA/exec`,
        form_data,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      set_form_data({
        first_name: "",
        last_name: "",
        email_address: "",
        country: "",
        phone_number: "",
        checked: "false",
      })
      console.log(`success`)
      console.log(response.data)
    } catch (err) {
      console.error(`not sent`)
    }
  }
  //Dynamically getting the current year
  let current_year = new Date().getFullYear()
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
            {isMobile ? (
              <span className="span_2">
                Our online food shop is lunching soon, Be the first to know{" "}
                <br></br> when we fully Launch
              </span>
            ) : (
              <span className="span_2">
                Our online food shop is lunching soon, Be the first to know when{" "}
                <br></br>we fully Launch
              </span>
            )}

            <button className="hero_button"> Stay Informed </button>
          </div>
          <div className="right_hero_section">
            {isMobile ? (
              <img src={vege} className="cooking_items"></img>
            ) : (
              <img src={cooking} className="cooking_items"></img>
            )}
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
        <form onSubmit={handle_submit_2}>
          <label className="form_heading">
            {" "}
            Be the First to Know When we Launch!
          </label>
          <div className="form_div">
            <label> First Name</label>
            <input
              type="text"
              name="first_name"
              onChange={handle_change}
              value={form_data.first_name}
              required
            />
          </div>
          <div className="form_div">
            <label> Last Name</label>
            <input
              type="text"
              name="last_name"
              onChange={handle_change}
              value={form_data.last_name_name}
              required
            />
          </div>
          <div className="form_div">
            <div className=""></div>
            <label> Email Address</label>
            <input
              type="email"
              name="email_address"
              onChange={handle_change}
              value={form_data.email_address}
              required
            />
          </div>
          <div className="form_div">
            <label> Country </label>
            <input
              type="text"
              name="country"
              onChange={handle_change}
              className="input_phone_element"
              value={form_data.country}
              required
            />
          </div>
          <div className="form_div phone_div">
            <label> Phone Number</label>
            <input
              type="number"
              name="phone_number"
              onChange={handle_change}
              placeholder={placeholder}
              value={form_data.phone_number}
              required
            />
          </div>
          <div className="checkbox_div">
            <input
              type="checkbox"
              className="check"
              onChange={handle_change}
              value={form_data.checked}
            />
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
          <span className="copyright">
            {" "}
            Copyright {current_year} UncleTobi.shop{" "}
          </span>
        </div>
      </div>
    </>
  )
}
export default Holding
