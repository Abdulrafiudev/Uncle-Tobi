import React from "react"
import "./search.css"
import { UilShoppingCart } from "@iconscout/react-unicons"
import { UilEnvelope } from "@iconscout/react-unicons"
import { UilPhone } from "@iconscout/react-unicons"

function Search() {
  return (
    <>
      <div className="search_header">
        <div className="left_search">
          <input
            type="search"
            placeholder="Search for product"
            className="search_input"
          />
        </div>
        <div className="right_search">
          <div className="cart_cointainer">
            <UilShoppingCart />
            <div className="quantity_container">
              <span className="cart_quantity"> 0 </span>
            </div>
          </div>
          <div className="mail_cointainer">
            <UilEnvelope />
            <span className="mail_span"> support@uncletobi.shop </span>
          </div>
          <div className="phone_cointainer">
            <UilPhone />
            <span className="telephone_span"> +44 278 910 9301 </span>
          </div>
        </div>
      </div>
    </>
  )
}
export default Search
