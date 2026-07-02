import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Home from "./pages/Home.jsx";
import  About from "./pages/About.jsx";
import Cart from "./pages/Cart.jsx";
import Category from "./pages/Category.jsx";
import Checkout from "./pages/Checkout.jsx";
import Contact from "./pages/Contact.jsx";
import OrderConfirmation from "./pages/OrderConfirmation.jsx";
import Products from "./pages/Products.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import Search from "./pages/Search.jsx";
import { BrowserRouter, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
     <Route path="/about" element ={<About/>}/>
      <Route path="/cart" element ={<Cart/>}/>
      <Route path="/category" element ={<Category/>}/>
      <Route path="/checkout" element ={<Checkout/>}/>
      <Route path="/contact" element ={<Contact/>}/>
      <Route path="/order-confirmation" element ={<OrderConfirmation/>}/>
      <Route path="/products" element ={<Products/>}/>
      <Route path="/product-details" element ={<ProductDetails/>}/>
      <Route path="/search" element ={<Search/>}/>
    </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
