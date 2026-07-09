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
    <h1>{product.title}</h1>
  )
}

export default ProductDetails;