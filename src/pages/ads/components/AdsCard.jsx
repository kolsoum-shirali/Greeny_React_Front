import moment from "moment-jalaali";
export default function AdsCard({ ads }) {
  return (
    <div className="grid grid-cols-12 gap-3 p-3 rounded-md border shadow-md">
      <div className="col-span-5 text-sm flex flex-col justify-between">
        <h3 className="line-clamp-2">{ads.caption}</h3>

        <p>
          کمترین قیمت : <span>{ads.minPrice}</span>
        </p>
        <p>
          بیشترین قیمت : <span>{ads.maxPrice}</span>
        </p>
        <p>
          تاریخ درج آگهی :{" "}
          <span>{moment(ads.createdAt).format("jYYYY/jMM/jDD HH:mm")}</span>
        </p>
      </div>
      <div className="col-span-7 h-48 rounded-sm flex justify-center overflow-hidden">
        <img
          src={`${process.env.REACT_APP_BASE_URL_IMG}/${ads.image}`}
          alt=""
          className="w-full h-auto rounded-md object-cover"
        />
      </div>
    </div>
  );
}
