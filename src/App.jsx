import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import Navbar from "./components/Navbar";
import {useState} from "react";
function App() {
  const[cart,setCart]=useState([]);
  const addToCart =(product)  => {
    console.log(product);
    setCart([...cart,product]);
  };
  return (
    <>
    <BrowserRouter>
    <Navbar cart={cart}/>
    <Routes>
      <Route
      path="/"
      element ={<Home addToCart={addToCart} cart={cart}/>}
      />
      <Route path="/about" element ={<About/>}/>
      <Route path="/cart" element ={<Cart cart={cart}/>}/>
      <Route path="/category" element ={<Category/>}/>
      <Route path="/checkout" element ={<Checkout/>}/>
      <Route path="/contact" element ={<Contact/>}/>
      <Route path="/order-confirmation" element ={<OrderConfirmation/>}/>
      <Route path="/products" element ={<Products/>}/>
      <Route path="/products/:id" element ={<ProductDetails/>}/>
      <Route path="/search" element ={<Search/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
