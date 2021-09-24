import FeaturedProducts from "../components/FeaturedProducts/FeaturedProducts";
import HeroSlider from "../components/HeroSlider/HeroSlider";
import ShopCategories from "../components/ShopCategories/shopCategories";

export default function Home() {
  return (
    <>
      <HeroSlider />
      {/* <ShopCategories /> */}
      <FeaturedProducts />
    </>
  )
}
