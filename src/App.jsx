import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Holding from "./pages/Holding Page/Holding_page"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Holding />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
