import React from "react"
import "./sidebar_1.css"

function Sidebar_1() {
  return (
    <>
      <div className="sidebar_1_container">
        <span className="sidebar_1_category"> Category </span>
        <div className="catgory_list">
          <span> Food Cupboard </span>
          <input type="checkbox" className="check" />
        </div>
        <div className="catgory_list">
          <span> Fresh Foods </span>
          <input type="checkbox" className="check" />
        </div>
        <div className="catgory_list">
          <span> Bakery </span>
          <input type="checkbox" className="check" />
        </div>
        <div className="catgory_list">
          <span> Frozen Foods </span>
          <input type="checkbox" className="check" />
        </div>
        <div className="catgory_list">
          <span> Treats & Snacks </span>
          <input type="checkbox" className="check" />
        </div>
        <div className="catgory_list">
          <span>Kitchen </span>
          <input type="checkbox" className="check" />
        </div>
      </div>
    </>
  )
}

export default Sidebar_1
