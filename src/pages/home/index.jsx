import BannerSlider from "./components/slider/BannerSlider";
import HomeCategories from "./components/HomeCategories";
import Services from "./components/services/Services";
import BannerServices from "./components/services/BannerServices";
import SingleBanner from "../../assets/img/06.jpg";
import NewProductsSlider from "./components/NewProucts/NewProductsSlider";
import BlogSlier from "./components/blogs/BlogSlier";
import CommentSlider from "./components/comments/CommentSlider";
const HomePage = () => {
  return (
    <div className="container mx-auto space-y-5 md:space-y-20">
      <div className="grid grid-cols-12 gap-4 mt-10">
        <div className="col-span-4 hidden md:block">
          <HomeCategories />
          <div className="overflow-hidden">
            <img
              src={SingleBanner}
              alt={SingleBanner}
              className="mt-5 hover:scale-105 transition-all delay-75"
            />
          </div>
        </div>
        <BannerSlider />
      </div>
      <Services />
      <BannerServices />
      <NewProductsSlider />
      <CommentSlider />
      <BlogSlier />
    </div>
  );
};

export default HomePage;
