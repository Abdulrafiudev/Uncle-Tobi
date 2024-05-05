import React from "react"
import "./products.css"

import { UilShoppingCart } from "@iconscout/react-unicons"

function Products(props) {
  let label = [{ name: "Label" }, { name: "Label" }, { name: "Label" }]
  return (
    <>
      <div
        className="products_container"
        style={{
          marginTop: props.logged_in && "-20px",
        }}
      >
        <div className="top_product_container">
          <div className="top_product_heading">
            <div className="left_product_heading">
              <span className="top">{props.name} </span>
            </div>
            <div className="right_product_heading">
              <span className="see">{props.see_all} </span>
            </div>
          </div>
          <div
            className="grid"
            style={{ gridTemplateColumns: props.logged_in && "1fr 1fr 1fr" }}
          >
            {props.top_product.map((product, index) => {
              return (
                <div className="product_container">
                  <div className="product_img_container">
                    <img src={product.image} className="product_img"></img>
                  </div>
                  <div className="product_info_container">
                    <span className="product_info">
                      {" "}
                      {product.product_name}
                    </span>
                    <div className="cart_pic">
                      <UilShoppingCart />
                    </div>
                  </div>
                  <div className="product_price_container">
                    <span className="product_price"> {product.price}</span>
                  </div>
                  <div className="label_container">
                    {label.map(labell => {
                      return (
                        <div className="label_background">{labell.name}</div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Products
