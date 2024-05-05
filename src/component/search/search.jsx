import React from "react"
import "./search.css"
import { UilShoppingCart } from "@iconscout/react-unicons"
import { UilEnvelope } from "@iconscout/react-unicons"
import { UilPhone } from "@iconscout/react-unicons"
import search_cart from "../../pages/search_page/search_cart"

function Search(props) {
  return (
    <>
      <div className="search_header">
        <div className="left_search">
          <input
            type="search"
            placeholder="Search for product"
            className="search_input"
            onChange={props.handle_change}
            value={props.value}
            onFocus={props.handle_focus}
            onBlur={props.handle_blur}
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
      {props.search_result && (
        <div className="search_result">
          {props.value && (
            <span className="search_result_span_1">
              {" "}
              Showing Search result for {props.value}{" "}
            </span>
          )}

          {props.products_found > 0 && (
            <span className="search_result_span_2">
              {" "}
              {props.products_found} Products Found{" "}
            </span>
          )}
        </div>
      )}
    </>
  )
}
export default Search
