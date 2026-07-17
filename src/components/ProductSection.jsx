    import ProductCard from './ProductCard'
    import products from '../data/products.js'
    import { useState } from 'react'

    const ProductSection = ({ addToCart }) => {
      const [selectedCategory ,setSelectedCategory]= useState("All");
      const [selectedPrice , setSelectedPrice] =useState("All");

      const filteredProducts = products.filter((product)=>{
        const productPrice = Number(product.price.replace (/[₹,]/g, ""));

        const categoryMatch = selectedCategory === "All" ||
          product.category === selectedCategory;
          
      const priceMatch =
      selectedPrice === "All" ||
      (selectedPrice === "Under5000" && productPrice <5000)||
      (selectedPrice === "5000tp20000" && 
        productPrice >=5000 &&
        productPrice <=20000 )||
        (selectedPrice === "Above20000" && productPrice>20000);
        return categoryMatch && priceMatch;
      });
      return (
        <section className="py-5">
          <div className="container">
            <h2 className="text-center fw-bold mb-5">
                Featured Products
            </h2>
            <div className='d-flex justify-content-center flex-wrap gap-2 mb-5'>
              <button
              className={`btn ${
              selectedCategory === "All"
              ? "btn-dark"
              : "btn-outline-dark"
              }`}
              onClick={() => setSelectedCategory("All")}
              >
                All
              </button>
               <button
                 className={`btn ${
                 selectedCategory === "Electronics"
                 ? "btn-dark"
                 : "btn-outline-dark"
               }`}
                onClick={() => setSelectedCategory("Electronics")}
              >
               Electronics
              </button>

              <button
              className={`btn ${
              selectedCategory === "Fashion"
              ? "btn-dark"
              : "btn-outline-dark"
              }`}
              onClick={() => setSelectedCategory("Fashion")}
            >
              Fashion
             </button>
             <button
              className={`btn ${
              selectedCategory === "Accessories"
              ? "btn-dark"
              : "btn-outline-dark"
             }`}
              onClick={() => setSelectedCategory("Accessories")}
            >
             Accessories
            </button>

            <button
              className={`btn ${
              selectedCategory === "Home"
              ? "btn-dark"
              : "btn-outline-dark"
            }`}
              onClick={() => setSelectedCategory("Home")}
            >
             Home
            </button>
            </div>
            <div className='d-flex justify-content-center flex-wrap gap-2 mb-5'>
              <button 
              className={`btn ${
               selectedPrice === "All"
                ? "btn-primary"
                : "btn-outline-primary"
              }`} onClick={() => setSelectedPrice("All")}>
                All Prices
              </button>

              <button 
              className={`btn ${
               selectedPrice === "Under5000"
               ? "btn-primary"
               : "btn-outline-primary"
              }`} onClick={() => setSelectedPrice("Under5000")}
             >
             Under ₹5,000
             </button>
             <button
               className={`btn ${
                selectedPrice === "5000to20000"
                 ? "btn-primary"
                 : "btn-outline-primary"
            }`}
              onClick={() => setSelectedPrice("5000to20000")}
            >
            ₹5,000 - ₹20,000
           </button>

           <button
            className={`btn ${
             selectedPrice === "Above20000"
              ? "btn-primary"
              : "btn-outline-primary"
            }`}
             onClick={() => setSelectedPrice("Above20000")}
            >
             Above ₹20,000
           </button>

            </div>
            <div className="row g-5">
              {filteredProducts.map((product) => (
                <div className="col-md-3" key={product.id}>
                  <ProductCard
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  rating={product.rating}
                  image={product.image}
                  addToCart={addToCart}
                  />
                </div>
              ))}
          </div>
          </div>
        </section>
        )
      }

    export default ProductSection