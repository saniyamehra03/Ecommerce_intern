import{Link}from"react-router-dom";
const HeroSlider = () => {
  return (
    <section className="bg-light py-5">
      <div className="container">
        <div className="row align-items-center">
            <div className="col-lg-6">
                <h1 className="display-4 fw-bold">
                    Discover Amazing Products
                </h1>
                <p className="lead text-muted mt-3">
                      Shop the latest trends with the best prices.
                      Fast delivery and premium quality products.
                </p>
                <Link to="/products" className="btn btn-primary btn-lg mt-3">
                Shop Now 
                </Link>
            </div>
            <div className="col-lg-6 text-center">
                <img  src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=700"
              className="img-fluid rounded"
                alt="Hero"/>
            </div>
        </div>
      </div>
    </section>
    
  )
}

export default HeroSlider