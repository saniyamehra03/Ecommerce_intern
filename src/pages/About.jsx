import React from 'react'
import shopeImage from "../assets/shope.png";
import { Link } from "react-router-dom";
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
    <div className="mt-5">
  <h2 className="text-center fw-bold mb-5">
    Our Achievements
  </h2>

  <div className="row g-4">

    <div className="col-md-3">
      <div className="card about-card border-0 shadow-sm rounded-4 text-center p-4 h-100">
        <h1>👥</h1>
        <h2 className="fw-bold text-primary">10,000+</h2>
        <p className="text-muted mb-0">
          Happy Customers
        </p>
      </div>
    </div>

    <div className="col-md-3">
      <div className="card about-card border-0 shadow-sm rounded-4 text-center p-4 h-100">
        <h1>📦</h1>
        <h2 className="fw-bold text-primary">5,000+</h2>
        <p className="text-muted mb-0">
          Products Available
        </p>
      </div>
    </div>

    <div className="col-md-3">
      <div className="card about-card border-0 shadow-sm rounded-4 text-center p-4 h-100">
        <h1>🚚</h1>
        <h2 className="fw-bold text-primary">24 Hours</h2>
        <p className="text-muted mb-0">
          Fast Delivery
        </p>
      </div>
    </div>

    <div className="col-md-3">
      <div className="card about-card border-0 shadow-sm rounded-4 text-center p-4 h-100">
        <h1>⭐</h1>
        <h2 className="fw-bold text-primary">4.8/5</h2>
        <p className="text-muted mb-0">
          Customer Rating
        </p>
      </div>
    </div>
     <div className="mt-5">
  <div className="card border-0 bg-primary text-white rounded-4 shadow-lg p-5 text-center">

    <h2 className="fw-bold mb-3">
      Ready to Start Shopping?
    </h2>

    <p className="mb-4 fs-5">
      Discover thousands of premium products at amazing prices.
      Shop with confidence and enjoy a seamless shopping experience.
    </p>

    <div>
      <Link
        to="/products"
        className="btn btn-light btn-lg rounded-pill px-5 fw-bold"
      >
        Explore Products
      </Link>
    </div>

  </div>
</div>
  </div>
</div>

    </div>
    </div>
    </div>
  
  )
}

export default About