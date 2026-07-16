    import ProductCard from './ProductCard'
    import products from '../data/products.js'
    import { useState } from 'react'

    const ProductSection = ({ addToCart }) => {
      const [selectedCategory ,setSelectedCategory]= useState("All");
      const filteredProducts = 
      selectedCategory === "All"
      ? products:products.filter(
        (product) => product.category ===selectedCategory
      );
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
              onClick={() => selectedCategory("All")}
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