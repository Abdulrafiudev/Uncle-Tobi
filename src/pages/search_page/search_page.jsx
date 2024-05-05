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

  let [cart_search, set_cart_search] = useState(search_cart)

  //Handling input search
  function handle_change(event) {
    let search_input = event.target.value.toLowerCase()
    set_cart_search(() => {
      return cart_search.filter(filtered_item => {
        return search_input === filtered_item.item.toLowerCase()
      })
    })

    console.log(search_input)
  }
  console.log(cart_search)

  return (
    <>
      <Header logged_in={is_logged_in} />
      <Search search_result={search_result} handle_change={handle_change} />
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
