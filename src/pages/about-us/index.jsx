import AboutCompany from "./components/AboutCompany";
import WhyChoose from "./components/WhyChoose";
import AboutBanner from "./components/AboutBanner";

export default function AboutUs() {
  return (
    <div>
      <AboutBanner />
      <div className="container mx-auto p-5 mt-7 md:mt-16 space-y-10 lg:space-y-32">
        <AboutCompany />
        <WhyChoose />
      </div>
    </div>
  );
}
