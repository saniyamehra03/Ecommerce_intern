import React from 'react'

const CategoryCard = (props) => {

  return (
    <div className="card shadow-sm border-0 h-100">
        <div className="card-body text-center">
          <h1>{props.emoji}</h1>
        <h1>{props.title}
        </h1>

        <button className="btn btn-outline-primary mt-3">
          Shop Now
        </button>

        </div>
    </div>
  )
}

export default CategoryCard