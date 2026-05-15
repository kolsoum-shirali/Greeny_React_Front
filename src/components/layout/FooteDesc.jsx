import Logo from "../../assets/img/logo.png";
import Socials from "../common/Socials";
export default function FooteDesc() {
  return (
    <div className="col-span-12 md:col-span-4 lg:col-span-6 space-y-8 ">
      <img src={Logo} alt="logo-footer" className="w-44" />
      <p className="text-sm lg:text-base">
        گرینی وب سایت خرید و فروش محصولات کشاورزی به صورت عمده و ... می باشد.
        برای یک کشاورز مهم ترین مساله این است که بتواند در زمان مناسب محصول خود
        را بفروشد و از فاسد شدن آن جلوگیری کند و مشتری آن را با قیمت مناسب پیدا
        کند. یک خریدار می تواند فروشندگان را به راحتی در وب سایت گرینی پیدا کند.
      </p>
      <Socials />
    </div>
  );
}
