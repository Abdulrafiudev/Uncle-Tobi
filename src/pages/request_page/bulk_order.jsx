import React from "react"
import { useState } from "react"
import "./bulk_order.css"
import Header from "../../component/Header/header"
import Search from "../../component/search/search"
import Footer_4 from "../../component/footer_4/footer_4"

function Bulk_order() {
  // Handling showing user image when he is logged in
  let [is_logged_in] = useState(true)

  return (
    <>
      <Header logged_in={is_logged_in} />
      <Search />
      <div className="bulk_order_form_container">
        <div className="center_bulk_order_form">
          <span className="bulk_order_note">
            Request Quote for any of our Product<br></br> in Bulk for Wholesale
            or Retail Prices
          </span>
          <form className="bulk_order_form">
            <span className="contact_information_span">
              {" "}
              Contact Information{" "}
            </span>
            <div className="bulk_order_form_div">
              <label> Company Name </label>
              <input />
            </div>
            <div className="bulk_order_form_div">
              <label> Contact Person </label>
              <input />
            </div>
            <div className="bulk_order_form_div">
              <label> Email Address </label>
              <input />
            </div>
            <div className="bulk_order_form_div">
              <label> Phone Number </label>
              <input />
            </div>
            <div className="bulk_order_form_div">
              <label> Business Address </label>
              <input />
            </div>
            <input type="submit" value="Proceed" className="proceed_button" />
          </form>
        </div>
      </div>
      <Footer_4 />
    </>
  )
}

export default Bulk_order
