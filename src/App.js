import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Navbar, Sidebar, Footer } from "./components"
import {
  Home,
  Products,
  SingleProduct,
  About,
  Cart,
  Error,
  Checkout,
} from "./pages"
function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/error" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
