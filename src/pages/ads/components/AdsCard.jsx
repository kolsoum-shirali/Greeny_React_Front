import moment from "moment-jalaali";
import { useState } from "react";
import AdsDetailDialog from "./AdsDetailDialog";
export default function AdsCard({ ads }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  return (
    <div>
      <div className="grid grid-cols-12 gap-3 p-3 rounded-md border shadow-md">
        <div className="col-span-12 lg:col-span-5 text-sm flex flex-col space-y-3">
          <h3 className="line-clamp-2">{ads.caption}</h3>

          <p>
            کمترین قیمت : <span>{ads.minPrice}</span>
          </p>
          <p>
            بیشترین قیمت : <span>{ads.maxPrice}</span>
          </p>
          <p>
            شماره تماس : <span>{ads.mobile}</span>
          </p>
          <p>
            نوع آگهی: <span>{ads.type == 1 ? "فروشنده ام" : "خریدارم"}</span>
          </p>
          <p>
            تاریخ درج آگهی :
            <span>{moment(ads.createdAt).format("jYYYY/jMM/jDD")}</span>
          </p>
        </div>
        <div className="col-span-12 lg:col-span-7 h-48 rounded-sm flex justify-center overflow-hidden relative">
          <img
            src={`${process.env.REACT_APP_BASE_URL_IMG}/${ads.image}`}
            alt=""
            className="w-full h-auto rounded-md object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex justify-end items-end">
            <button
              className="bg-green-600 text-white p-2 md:px-8 rounded-sm text-sm lg:text-base hover:bg-white hover:transition-colors hover:text-green-800 border-2 border-green-600 w-full"
              onClick={() => setIsDialogOpen(true)}
            >
              توضیحات آگهی
            </button>
          </div>
        </div>
      </div>
      <AdsDetailDialog
        ads={ads}
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
    </div>
  );
}
