import React from 'react'
import shopeImage from "../assets/shope.png";

const About = () => {
  return (
    <div className="container-fluid bg-light py-5">
    <div className='container'>
      <div className='text-center mb-5'> 
        <h1 display-4 fw-bold>
         About NovaCart
        </h1>
      </div>
      <div className='row align-items-center'>
        <div className='col-md-6'>
          <img
           src={shopeImage}
           alt="About NovaCart"
           className="img-fluid rounded-4 shadow"
          />

        </div>
        <div className="col-md-6">
          <h2 className="fw-bold mb-3">
           Your Trusted Online Shopping Destination
          </h2>
           <p className="text-muted">
           NovaCart is committed to providing customers with high-quality products,
           affordable prices, secure payments, and fast delivery. We aim to make
           online shopping simple, convenient, and enjoyable.
          </p>
        </div>
      
      </div>
<div className="mt-5">
  <h2 className="text-center fw-bold mb-5">
    Why Choose NovaCart?
  </h2>

  <div className="row g-4">

    <div className="col-md-3">
      <div className="card about-card h-100 border-0 shadow-sm rounded-4 text-center p-4">
        <h1>🚚</h1>
        <h4 className="fw-bold mt-3">Fast Delivery</h4>
        <p className="text-muted">
          Get your orders delivered quickly and safely to your doorstep.
        </p>
      </div>
    </div>

    <div className="col-md-3">
    <div className="card about-card h-100 border-0 shadow-sm rounded-4 text-center p-4">
        <h1>⭐</h1>
        <h4 className="fw-bold mt-3">Premium Quality</h4>
        <p className="text-muted">
          Shop high-quality products from trusted brands.
        </p>
      </div>
    </div>

    <div className="col-md-3">
      <div className="card about-card h-100 border-0 shadow-sm rounded-4 text-center p-4">
        <h1>🔒</h1>
        <h4 className="fw-bold mt-3">Secure Payments</h4>
        <p className="text-muted">
          Enjoy safe and secure payment options for every purchase.
        </p>
      </div>
    </div>

    <div className="col-md-3">
      <div className="card about-card h-100 border-0 shadow-sm rounded-4 text-center p-4">
        <h1>💬</h1>
        <h4 className="fw-bold mt-3">24/7 Support</h4>
        <p className="text-muted">
          Our support team is always here to help you.
        </p>
      </div>
    </div>

    </div>
    </div>
    </div>
    </div>
  
  )
}

export default About