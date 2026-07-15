import React from 'react'
import { Link } from 'react-router-dom'
const CategoryCard = (props) => {

  return (
   <div className="card h-100 shadow border-0 rounded-4 text-center p-3">
    <div className="card-body d-flex flex-column align-items-center">
          <div 
            className="rounded-circle bg-light d-flex justify-content-center align-items-center mb-3"
           style={{
            width: "80px",
            height: "80px",
            fontSize: "40px",
          }}
          >
            {props.emoji}
          </div>
        <h4 className='fw-bold mb-4'>
          {props.title}
        </h4>

        <Link 
        to="/products" className="btn btn-primary mt-3"
        className="btn btn-primary mt-auto px-4 rounded-pill">
          Shop Now
        </Link>

        </div>
    </div>
  )
}

export default CategoryCard