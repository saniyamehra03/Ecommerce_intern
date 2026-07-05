import CategoryCard from "./CategoryCard";

const CategorySection = () => {
  return (
   <section className="py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">
            Shop by Category
            </h2>
            <div className="row">
                <div className="col-md-3">
                    <CategoryCard  title="Fashion" emoji="👕"/>
                </div>

            <div className="col-md-3">
               <CategoryCard  title="Electronics" emoji="💻"/>
            </div>

           <div className="col-md-3">
            <CategoryCard  title="Home & Kitchen" emoji="🏠"/>
            </div>

        <div className="col-md-3">
          <CategoryCard  title="Books" emoji="📚"/>
         </div>
            </div>
            </div>
    </section>
  )
}

export default CategorySection