import React from 'react';
import { useSearchParams } from 'react-router-dom';
import products from"../data/products"
import ProductCard from "../components/ProductCard";;

const Search = ({addToCart}) => {
  const [searchParams] =useSearchParams();
  const query =searchParams.get("query")|| "";
  const filteredProducts = products.filter((product) =>
  product.title.toLowerCase().includes(query.toLowerCase())
);

  return (
    <div className='row g-4'>
      {filteredProducts.length >0 ?(
        filteredProducts.map((product) => (
          <div className='col-md-3' key={product.id}>
          <ProductCard
          id={product.id}
          title={product.title}
          price={product.price}
          rating={product.rating}
          image={product.image}
          addToCart={addToCart}
          />
    </div>
  ))
):(
<h3>No products found</h3>
)}
</div>
  )}
export default Search