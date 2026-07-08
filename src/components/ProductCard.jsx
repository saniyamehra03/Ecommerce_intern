import React from 'react'
import{Link} from 'react-router-dom'
const ProductCard = (props) => {
  return (
      <Link to={`/products/${props.id}`}
      className="text-decoration-none text-dark">
        <div className="card shadow-sm h-100">
        <img 
        src={props.image} 
        alt={props.title} 
        className="card-img-top"
        />
      <div className="card-body text-center">
        <h5 className="card-title">
            {props.title}
        </h5>
          <p>{props.rating}</p>

       <p className="fw-bold text-primary"> 
         {props.price}
       </p>
       <button className="btn btn-primary w-100"> 
        Add to Cart 
        </button>
      </div>
    </div>
    </Link>
  )
}
export default ProductCard;