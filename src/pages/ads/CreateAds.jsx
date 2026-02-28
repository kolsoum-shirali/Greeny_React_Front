import BreadCrumbsBanner from "../../components/common/BreadCrumbsBanner";
import AdsInfo from "./components/AdsInfo";
import CreateAdsForm from "./components/CreateAdsForm";


const options = [
  { title: "خانه", link: "/" },
  { title: "ثبت آگهی", link: "" },
];

export default function CreateAds() {
  return (
    <div>
      <BreadCrumbsBanner options={options} caption="ثبت آگهی" />
      <div className="container mx-auto p-5 mt-7 md:mt-16 space-y-10 lg:space-y-32">
        <CreateAdsForm/>
        <AdsInfo />
      </div>
    </div>
  );
}
