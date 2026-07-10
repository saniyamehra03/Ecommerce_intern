import CategorySection from "../components/CategorySection";
import HeroSection from "../components/HeroSection";
import ProductSection from "../components/ProductSection";
const Home = ({ addToCart }) => {
  return (
   <>
   <HeroSection/>
   <CategorySection/>
  <ProductSection addToCart={addToCart} />
   <h1 className="text-center my-5">Home Page</h1>
   </>
  )
}
export default Home;