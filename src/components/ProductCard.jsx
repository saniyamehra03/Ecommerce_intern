import React from 'react'
import{Link} from 'react-router-dom'
const ProductCard = (props) => {
  const product={
    id:props.id,
    title:props.title,
    price:props.price,
    rating:props.rating,
    image:props.image,
    quantity:1
  };
  return (
    <div className="card shadow-sm h-100">
      <Link
       to={`/products/${props.id}`}
      className="text-decoration-none text-dark">
        <img 
        src={props.image} 
        alt={props.title} 
        className="card-img-top"
        />
      <div className="card-body text-center">
        <h5>{props.title}</h5>
         <p>{props.rating}</p>

       <p className="fw-bold text-primary"> 
         {props.price}
       </p>
       </div>
    </Link>
    <div className="card-footer bg-white border-0">
       <button
        className="btn btn-primary w-100"
        onClick={() => 
          props.addToCart(product)}>
        Add to Cart 
        </button>
      </div>
    </div>
  )
}
export default ProductCard;