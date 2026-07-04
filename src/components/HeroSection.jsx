import React from 'react'

const HeroSection = () => {
  return (
   <section className="bg-light py-5" >
       <div className="container">
           <div className="row align-items-center">
            </div>
            <h1 className="display-4">NovaCart</h1>
            <p className="lead text-muted mt-3">
                Discover the best products at unbeatable prices. Shop now and experience the NovaCart difference!
            </p>
            <a href="/products" className="btn btn-primary btn-lg mt-3">
                Shop Now
            </a>
        </div>
        <div>
            <img src="/path/to/hero-image.jpg" alt="Hero Image" className="img-fluid" />
        </div>
   </section>
  )
}

export default HeroSection