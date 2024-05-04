import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Holding from "./pages/Holding Page/Holding_page"
import Home from "./pages/Home_page/homepage"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Holding />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
