import Socials from "../../components/common/Socials";
export default function FollowUs() {
  return (
    <div className="shadow-md rounded-md border border-gray-400/20 p-5">
      <h3 className="text-xl font-semibold relative before:absolute before:-bottom-[2px] before:right-0 before:w-32 before:h-[3px] before:bg-green-800 border-b border-gray-400/20 pb-2">
        ما را دنبال کنید
      </h3>
      <div className="mt-10 mb-3">
        <Socials />
      </div>
    </div>
  );
}
