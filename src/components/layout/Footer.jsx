import ContactWays from "./ContactWays";
import EasyAccess from "./EasyAccess";
import FooteDesc from "./FooteDesc";
export default function Footer() {
  return (
    <div className="border-t border-gray-400/20 mt-20">
      <div className="container mx-auto pt-7 lg:pt-14">
        <div className="grid grid-cols-12  gap-y-7 lg:gap-10">
          <FooteDesc />
          <ContactWays />
          <EasyAccess />
        </div>
        <p className="text-center bg-green-600 p-3 md:rounded-t-md mt-7 lg:mt-14 text-sm md:text-base text-white">
          <i className="icon-copyright"></i>
          تمامی حقوق این سایت متعلق به شرکت گرینی می باشد
        </p>
      </div>
    </div>
  );
}
