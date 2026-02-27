import Logo from "../../assets/img/logo.png";
import Socials from "../common/Socials";
export default function FooteDesc() {
  return (
    <div className="col-span-12 md:col-span-4 lg:col-span-6 space-y-8 ">
      <img src={Logo} className="w-44" />
      <p className="text-sm lg:text-base">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است.
      </p>
      <Socials />
    </div>
  );
}
