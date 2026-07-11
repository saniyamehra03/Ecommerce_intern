import React from 'react'

const Cart = ({ cart }) => {
  return (
     <div className="container py-5">
     <h2>Shopping Cart</h2>
     {cart.map((item) => (
    <h4 key={item.id}>{item.title}</h4>
    ))}
     </div>
  )
}
export default Cart;