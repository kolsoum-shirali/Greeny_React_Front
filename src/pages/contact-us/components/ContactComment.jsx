import ContactForm from "./ContactForm";
import Map from "../../../assets/img/map.png";
export default function ContactComment() {
  return (
    <div className="grid grid-cols-2 gap-5 lg:gap-10">
      <div className="col-span-2 lg:col-span-1">
        <div className="flex justify-center">
          <img src={Map} alt="" className="w-full h-auto" />
        </div>
      </div>
      <div className="col-span-2 lg:col-span-1">
        <ContactForm />
      </div>
    </div>
  );
}
