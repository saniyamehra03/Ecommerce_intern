import React from 'react'
import{Link} from 'react-router-dom'
const Cart = ({ cart, removeFromCart }) => {
  if(cart.length ===0){
    return(
      <div className="container py-5 text-center">
        <h2 className="mb-3">Your Cart is Empty 🛒</h2>
        
        <p className="text-muted mb-4">
           Looks like you haven't added any products yet.</p>

           <Link to="/" className="btn btn-primary">
             Continue Shopping
           </Link>
      </div>
    )
  }
  const totalPrice = cart.reduce((total ,item) =>{
    return total + Number(item.price.replace("₹" ,"").replace("," ,""));
    return total + price;
  }, 0);
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
    <hr/>
    <h3 className='text-end'>
      Total :  ₹{totalPrice}
    </h3>
     </div>
  )
}
export default Cart;