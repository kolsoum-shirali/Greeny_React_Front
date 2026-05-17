import { Link } from "react-router-dom";

import styles from "../../../../styles/css/home.module.css";
const BannerCard = ({ bannerInfo }) => {
  return (
    <div
      className={`${styles.banner} ${bannerInfo.color} grid grid-cols-2 gap-5 relative z-1  lg:rounded-xl p-11 before:absolute before:inset-0 before:opacity-5 before:bg-cover before:-z-1`}
    >
      <div className="col-span-2 md:col-span-1 max-md:text-center">
        <h2 className="font-semibold text-xl md:text-2xl lg:text-3xl mb-5 lg:mb-10">
          {bannerInfo.title}
        </h2>
        <Link to='/products'>
          <button className="bg-green-600 text-white p-3 md:px-8 rounded-md text-sm lg:text-base hover:bg-white hover:transition-colors hover:text-green-800 border-2 border-green-600">
            خرید همین حالا
          </button>
        </Link>
      </div>
      <div className="col-span-2 md:col-span-1">
        <div className="h-96 overflow-hidden flex justify-center">
          <img
            src={bannerInfo.img}
            alt={bannerInfo.altText || "Banner Image"}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default BannerCard;
