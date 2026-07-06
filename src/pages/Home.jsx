import CategorySection from "../components/CategorySection";
import HeroSection from "../components/HeroSection";
import ProductSection from "../components/ProductSection";
const Home = () => {
  return (
   <>
   <HeroSection/>
   <CategorySection/>
   <ProductSection/>
   <h1 className="text-center my-5">Home Page</h1>
   </>
  )
}
export default Home;