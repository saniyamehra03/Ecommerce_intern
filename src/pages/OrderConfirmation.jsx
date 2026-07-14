import React from 'react'
import { Link } from 'react-router-dom'
const OrderConfirmation = () => {
  return (
    <div className='container py-5 text-center'>
      <h1 className='text-success display-4'>✅</h1>
      <h2 className='mt-3'>
       Order Placed Successfully!
      </h2>
    <p className='text-center mt-3'> 
      Thankyou for shopping with NovaCart. </p>
      <p className='text-muted'>
      Your order has been confirmed and
      will be delivered soon.</p>
       <Link to="/" 
       className='btn btn-primary mt-4'>
        Continue Shopping</Link>
    </div>
   
  )
}

export default OrderConfirmation