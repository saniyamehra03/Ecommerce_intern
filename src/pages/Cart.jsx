import React from 'react'

const Cart = ({ cart, removeFromCart }) => {
  return (
     <div className="container py-5">
     <h2>Shopping Cart</h2>
     {cart.map((item) => (
    <div 
    key={item.id} className="card mb-3 p-3" >
      <img
      src={item.image}
      alt={item.title}
      style={{ width:"120px"}}
      />
      <h4>{item.title}</h4>
      <p>{item.rating}</p>
      <h5>{item.price}</h5>
       <button onClick={() => removeFromCart(item.id)}>
        Remove from Cart</button>
      </div>
     
    ))}
     </div>
  )
}
export default Cart;