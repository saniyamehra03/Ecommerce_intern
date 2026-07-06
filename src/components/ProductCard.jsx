import React from 'react'

const ProductCard = () => {
  return (
    <div className="card shadow-sm h-100">
          <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
         alt="Wireless Headphones"
         className="card-img-top"/>
      <div className="card-body text-center">
        <h5 className="card-title">
            Wireless Headphones
        </h5>
          <p>⭐⭐⭐⭐⭐</p>

       <p className="fw-bold text-primary"> 
         ₹2,499
       </p>
       <button className="btn btn-primary w-100"> 
        Add to Cart 
        </button>
      </div>
    </div>
  )
}
export default ProductCard