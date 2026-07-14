import React from 'react'
import { Link } from 'react-router-dom'
const CategoryCard = (props) => {

  return (
    <div className="card shadow-sm border-0 h-100">
        <div className="card-body text-center">
          <h1>{props.emoji}</h1>
        <h1>{props.title}
        </h1>

        <Link to="/products" className="btn btn-primary mt-3">
          Shop Now
        </Link>

        </div>
    </div>
  )
}

export default CategoryCard