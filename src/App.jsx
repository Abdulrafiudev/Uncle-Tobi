import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Holding from "./pages/Holding Page/Holding_page"
import Home from "./pages/Home_page/homepage"
import Search_page from "./pages/search_page/search_page"
import Bulk_order from "./pages/request_page/bulk_order"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Holding />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Search" element={<Search_page />} />
          <Route path="/Order" element={<Bulk_order />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
