import { useState } from "react"
import React from "react"
import Header from "../../component/Header/header"
import Search from "../../component/search/search"
import Sidebar_1 from "../../component/sidebar_1/sidebar_1"
import Products from "../../component/products/products"
import Footer_1 from "../../component/footer_1/footer_1"
import Footer_2 from "../../component/footer_2/footer_2"
import Footer_4 from "../../component/footer_4/footer_4"
import search_cart from "./search_cart"
import "./search_page.css"

function Search_page() {
  // Handling showing user image when he is logged in
  let [is_logged_in] = useState(true)
  // Handling search result
  let [search_result] = useState(true)
  //Filtered cart search state
  let [cart_search, set_cart_search] = useState(search_cart)
  // input value
  let [input_value, set_input_value] = useState(``)

  //Handling input search and filtered item logic
  function handle_change(event) {
    let search_input = event.target.value.toLowerCase()
    set_input_value(search_input)
    let filtered_items = cart_search.filter(filtered_item => {
      return filtered_item.item
        .toLowerCase()
        .includes(input_value.toLowerCase())
    })
    if (filtered_items.length >= 0) {
      set_cart_search(filtered_items)
    }
  }
  // Restore the initial cart when focus is lost

  function handle_focus() {
    if (!input_value) {
      set_cart_search(search_cart)
    }
  }

  function handle_blur() {
    set_input_value(``)
  }

  return (
    <>
      <Header logged_in={is_logged_in} />
      <Search
        search_result={search_result}
        handle_change={handle_change}
        products_found={cart_search.length}
        value={input_value}
        handle_blur={handle_blur}
        handle_focus={handle_focus}
      />
      <div className="search_page_container">
        <Sidebar_1 />
        <Products top_product={cart_search} logged_in={is_logged_in} />
      </div>

      <Footer_1 />
      <Footer_2 />
      <Footer_4 />
    </>
  )
}

export default Search_page
