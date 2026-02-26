import AboutCompany from "./components/AboutCompany";
import WhyChoose from "./components/WhyChoose";
import BreadCrumbsBanner from "../../components/common/BreadCrumbsBanner";
const options = [
  { title: "خانه", link: "/" },
  { title: "درباره ما", link: "" },
];

export default function AboutUs() {
  return (
    <div>
      <BreadCrumbsBanner options={options} caption="درباره شرکت ما" />
      <div className="container mx-auto p-5 mt-7 md:mt-16 space-y-10 lg:space-y-32">
        <AboutCompany />
        <WhyChoose />
      </div>
    </div>
  );
}
