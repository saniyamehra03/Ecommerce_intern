import React from 'react'
import{useParams} from 'react-router-dom'
import products from '../data/products.js'
import ProductCard from "../components/ProductCard";

const ProductDetails = ({addToCart}) => {  
  const{ id } = useParams();

  const product = products.find(
  (item)=> item.id === Number(id)
);

if(!product){
  return <h2 className='text-center mt-5'>Product not found</h2>;
}
 const relatedProducts = products.filter(
    (item) =>
      item.category === product.category &&
      item.id !== product.id
  );

  return (
    <div className="container py-5">

      <div className="row align-items-center mb-5">
        
        <div className="col-md-6 text-center">
          <img 
          src={product.image}
          alt={product.title}
          className="img-fluid rounded shadow"
            style={{
              maxHeight: "400px",
              objectFit: "contain",
            }}
          />
           </div>
          <div className="col-md-6">
            <h2 className='fw-bold'>{product.title}</h2>
            <h4 className="text-warning my-3">
              {product.rating}
            </h4>
            <h3 className="text-primary fw-bold">
              {product.price}
            </h3>
            <p className="text-muted my-4">
              {product.description}
            </p>
            <button className="btn btn-primary btn-lg"
            onClick={() =>addToCart(product)}>
              Add to Cart
            </button>
          </div>
        </div >

        <h2 className='text-center fw-bold mb-4'>
            Related Products
        </h2>
        <div className='row g-4'>
          {relatedProducts.map((item) => (
            <div 
            className='col-md-4 col-lg-3'
            key={item.id}>
                <ProductCard
              id={item.id}
              title={item.title}
              price={item.price}
              rating={item.rating}
              image={item.image}
              addToCart={addToCart}
            />
        </div>
         ))}
    </div>
 </div>
  )
}

export default ProductDetails;