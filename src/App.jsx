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
import Footer from "./components/Footer.jsx";
import {useState} from "react";
import ScrollToTop from "./components/ScrollToTop";
function App() {
  const[cart,setCart]=useState([]);
  const addToCart =(product)  => {
    const existingProduct = cart.find(
    (item) => item.id === product.id
  );

  if(existingProduct){
    const updatedCard = cart.map((item) =>{
      if(item.id === product.id){
        return {
          ...item,
          quantity: item.quantity+1,
        };
      }
      return item;
    });
    setCart(updatedCard);
  }
    else{
    setCart([...cart,product]);
    }
  };

   const increaseQuantity =(id)=>{
   const updatedCart = cart.map((item) => {
    if(item.id ===id){
      return{
        ...item,
        quantity: item.quantity +1,
      };
    }
    return item;
   });
   setCart(updatedCart);
  };

  const decreaseQuantity =(id)=>{
   const updatedCart = cart
    .map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }
      return item;
    })
    .filter((item) => item.quantity > 0);

  setCart(updatedCart);
};

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  }
  const clearCart =() =>{
    setCart([]);
  };
  return (
    <>
    <BrowserRouter>
    <Navbar cart={cart}/>
  x
    <Routes>
      <Route
      path="/"
      element ={<Home addToCart={addToCart} cart={cart}/>}
      />
      <Route path="/about" element ={<About/>}/>
      <Route path="/cart" element ={
        <Cart 
       cart={cart}
       removeFromCart={removeFromCart}
       increaseQuantity={increaseQuantity}
       decreaseQuantity={decreaseQuantity}
       />
       }
       />
      <Route path="/category" element ={<Category/>}/>
      <Route path="/checkout" element ={<Checkout cart={cart} clearCart={clearCart}/>}/>
      <Route path="/contact" element ={<Contact/>}/>
      <Route path="/order-confirmation" element ={<OrderConfirmation/>}/>
      <Route path="/products" element ={<Products addToCart={addToCart}/>}/>
      <Route path="/products/:id" element ={<ProductDetails/>}/>
      <Route path="/search" element ={<Search/>}/>
    </Routes>
      <Footer/>
      <ScrollToTop />
    </BrowserRouter>
    </>
  )
}

export default App
