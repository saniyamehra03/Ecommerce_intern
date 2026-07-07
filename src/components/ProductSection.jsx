import ProductCard from './ProductCard'
const ProductSection = () => {
  return (
    <section className="py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">
            Featured Products
        </h2>
        <div className="row g-5">
          <div className="col-md-3">
            <ProductCard  
             title="Wireless Headphones"
             image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"
             rating="⭐⭐⭐⭐⭐"
             price="₹2,499"
            />
          </div>
          <div className="col-md-3">
            <ProductCard  
             title="Smart Watch"
             image="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
             rating="⭐⭐⭐⭐"
             price="₹1,999"
            />
          </div>
          <div className="col-md-3">
            <ProductCard  
             title="Running Shoes"
             image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
             rating="⭐⭐⭐⭐⭐"
             price="₹1,499"
            />
          </div>
          <div className="col-md-3">
            <ProductCard  
             title="Laptop"
             image="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500"
             rating="⭐⭐⭐"
             price="₹999"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductSection