import CategorySection from "../components/CategorySection";
import HeroSection from "../components/HeroSection";
import ProductSection from "../components/ProductSection";
const Home = ({ addToCart }) => {
  return (
   <>
   <HeroSection/>
   <CategorySection/>
  <ProductSection addToCart={addToCart} />
   </>
  )
}
export default Home;