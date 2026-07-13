import React from 'react'

const Checkout = ({cart}) => {
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
       <h3>  Order Summary </h3>
      </div>
      <div className='card p-4 mb-4'>
        <h3>Payment Method </h3>
      </div>
       <button className='btn btn-primary w-100'>
        <h3>Place Order </h3>
      </button>
    </div>
  );
}

export default Checkout