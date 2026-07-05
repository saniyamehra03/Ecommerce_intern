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
                    <CategoryCard />
                </div>

            <div className="col-md-3">
               <CategoryCard />
            </div>

           <div className="col-md-3">
            <CategoryCard />
            </div>

        <div className="col-md-3">
          <CategoryCard />
         </div>
            </div>
            </div>
    </section>
  )
}

export default CategorySection