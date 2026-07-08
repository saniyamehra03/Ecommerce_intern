    import ProductCard from './ProductCard'
    import products from '../data/products.js'
    const ProductSection = () => {
      return (
        <section className="py-5">
          <div className="container">
            <h2 className="text-center fw-bold mb-5">
                Featured Products
            </h2>
            <div className="row g-5">
              {products.map((product) => (
                <div className="col-md-3" key={product.id}>
                  <ProductCard
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  rating={product.rating}
                  image={product.image}
                  />
                </div>
              ))}
          </div>
          </div>
        </section>
        )
      }

    export default ProductSection