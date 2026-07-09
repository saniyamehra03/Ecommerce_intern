import React from 'react'
import{useParams} from 'react-router-dom'
import products from '../data/products.js'

const ProductDetails = () => {  
  const{ id } = useParams();
  const product = products.find(
  (item)=> item.id === Number(id)
);
if(!product){
  return <h2>Product not found</h2>;
}
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        
        <div className="col-md-6 text-center">
          <img 
          src={product.image}
          alt={product.title}
          className="img-fluid rounded"
          />
          <div className="col-md-6">
            <h2>{product.title}</h2>
            <h4 className="text-warning">
              {product.rating}
            </h4>
            <h3 className="text-primary">
              {product.price}
            </h3>
            <p className="text-muted">
              {product.description}
            </p>
            <button className="btn btn-primary btn-lg">
              Add to Cart
            </button>
          </div>
        </div >
   
    </div>
    </div>
  )
}

export default ProductDetails;