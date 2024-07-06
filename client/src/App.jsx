import BannerCategories from "./ui/BannerCategories";

import "react-multi-carousel/lib/styles.css";
import HomeBanner from "./ui/HomeBanner";
import Hightlights from "./ui/Hightlights";
import Categories from "./ui/Categories";
import ProductList from "./ui/ProductList";
import DiscountedBanner from "./ui/DiscountedBanner";
import Blog from "./ui/Blog";

const App = () => {
  return (
    <main>
      <BannerCategories />
      <HomeBanner />
      <Hightlights />
      <Categories />
      {/* product list */}
      <ProductList />
      {/* discount banner */}
      <DiscountedBanner />
      {/* blog */}
      <Blog />
    </main>
  );
};

export default App;
