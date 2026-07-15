import React from 'react'
import{Link} from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";
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
   <div className="card product-card h-100 w-100 shadow-sm border-0 rounded-4 overflow-hidden">
      <Link
       to={`/products/${props.id}`}
      className="text-decoration-none text-dark">
        <img 
        src={props.image} 
        alt={props.title} 
        className="card-img-top"
         style={{
           height: "220px",
           objectFit: "cover",
         }}
        />
      <div className="card-body d-flex flex-column justify-content-between">
        <h5 className='fw-bold mb-2 text-center'
           style={{
           minHeight: "60px",
          }}>
          {props.title}
        </h5>
         <p className='text-warning mb-2'>
          {props.rating}
        </p>

       <h4 className="fw-bold text-primary mb-3"> 
         {props.price}
       </h4>
       </div>
    </Link>
    <div className="card-footer bg-white border-0">
       <button
        className="btn btn-dark w-100 rounded-pill"
        onClick={() => 
          props.addToCart(product)}>
            <FaShoppingCart className="me-2"/>
        Add to Cart 
        </button>
      </div>
    </div>
  )
}
export default ProductCard;