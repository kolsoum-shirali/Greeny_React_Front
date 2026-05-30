import BreadCrumbsBanner from "../../components/common/BreadCrumbsBanner";
import ContactWays from "./components/ContactWays";
import ContactComment from "./components/ContactComment";

const options = [
  { title: "خانه", link: "/" },
  { title: "درباره ما", link: "" },
];

export default function ContactUs() {
  return (
    <div>
      <BreadCrumbsBanner options={options} caption="تماس با ما" />
      <div className="container mx-auto p-5 mt-7 md:mt-16 space-y-10 lg:space-y-32">
        <ContactWays />
        <ContactComment />
      </div>
    </div>
  );
}
