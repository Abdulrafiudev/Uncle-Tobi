import React from "react"
import "./search.css"

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
        <div className="right_search"></div>
      </div>
    </>
  )
}
export default Search
