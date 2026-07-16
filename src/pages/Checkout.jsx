import React from 'react'
import { useNavigate } from 'react-router-dom';
const Checkout = ({cart , clearCart}) => {
  const total = cart.reduce((sum ,item) =>{
     console.log("Item:", item);
  console.log("Price:", item.price);
  console.log("Quantity:", item.quantity);
    const price = Number(item.price.replace(/[₹,]/g,""));
     console.log("Converted Price:", price);
    return sum + price * item.quantity;  
  },0);
  const navigate = useNavigate();
  const handlePlaceOrder =() =>{
    clearCart();
    navigate("/order-confirmation");
  }
  return (
    <div className="container py-5">
      <h1 className='text-center mb-5'>
        Checkout
      </h1>
      <div className='card p-4 mb-4'>
       <h3 className='mb-4'> Delivery Information </h3>
       <div className='mb-3'>
        <label className='form-label'>Full Name</label>
        <input
        type="text"
        className='form-control'
        placeholder='Enter your full name'
        />
       </div>
       <div className='mb-3'>
       <label className='form-label'>Email</label>
       <input
       type="text"
       className='form-control'
       placeholder='Enter your email'
       />
       </div>
       <div className='mb-3'>
       <label className='form-label'>Phone Number</label>
       <input
       type="tel"
       className='form-control'
       placeholder='Enter your Phone Number'
       />
       </div>
       <div className='mb-3'>
       <label className='form-label'>Address</label>
       <textarea
       row="3"
       className='form-control'
       placeholder='Enter your delivery address'
       ></textarea>
       </div>
      </div>
      <div className='card p-4 mb-4'>
       <h3 className='mb-4'>  Order Summary </h3>
       {cart.map((item) =>(
        <div
          key={item.id}
          className="d-flex justify-content-between 
          align-items-center border-bottom pb-3 mb-3"
        >
          <div>
            <h5>{item.title}</h5>

          <p className='mb-1'>
            Price:{item.price}
          </p>

          <p className='mb-0'>
            Quantity :{item.quantity}
          </p>

        </div>
        <img
        src={item.image}
        alt={item.title}
        width="80"
        height="80"
        style={{ objectFit: "cover" }}
      />
    </div>
       ))}
         <hr />
         <div className='d-flex justify-content-between'>
          <h5>Total Amount</h5>
          <h5>₹{total.toLocaleString()}</h5>
         </div>
      </div>

      <div className='card p-4 mb-4'>
        <h3>Payment Method </h3>
      </div>
       <button className='btn btn-primary w-100' 
       onClick= {handlePlaceOrder}>
        Place Order
      </button>
    </div>
  );
}

export default Checkout