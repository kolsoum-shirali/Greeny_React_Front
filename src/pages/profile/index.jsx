import BreadCrumbsBanner from "../../components/common/BreadCrumbsBanner";
import ProfileInfo from "./components/ProfileInfo";
const options = [
  { title: "خانه", link: "/" },
  { title: "پروفایل", link: "" },
];

export default function Profile() {
  return (
    <div>
      <BreadCrumbsBanner options={options} caption="پروفایل" />
      <div className="container mx-auto p-5 mt-7 md:mt-16 space-y-10 lg:space-y-32">
        <ProfileInfo />
      </div>
    </div>
  );
}
