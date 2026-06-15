import moment from "moment-jalaali";

export default function AdsTableMobile({ ads, openDialog }) {
  return (
    <div className="lg:hidden space-y-6">
      {ads.map((adsItem, inx) => {
        return (
          <div
            key={inx}
            className="shadow-md border border-gray-100 p-5 rounded-lg space-y-3"
          >
            <div className="h-10 w-10 rounded-full bg-green-600 flex justify-center items-center text-white mx-auto font-bold">
              {inx + 1}
            </div>

            <div className="text-gray-800 font-bold text-center text-lg">
              {adsItem.caption}
            </div>

            <div className="space-y-1 text-sm border-t pt-3">
              <p className="break-all">
                <span className="font-semibold text-gray-500">
                  کمترین قیمت:
                </span>
                {adsItem.minPrice}
              </p>
              <p className="break-all">
                <span className="font-semibold text-gray-500">
                  بیشترین قیمت:
                </span>
                {adsItem.maxPrice}
              </p>
              <p className="break-all">
                <span className="font-semibold text-gray-500">آیدی:</span>
                {adsItem._id}
              </p>
              <p className="break-words">
                <span className="font-semibold text-gray-500">نوع:</span>
                {adsItem.type == 2 ? "خریدار" : "فروشنده"}
              </p>
              <p className="text-gray-500">
                {moment(adsItem.createdAt).format("jYYYY/jMM/jDD - HH:mm:ss")}
              </p>
              <img
                src={`${process.env.REACT_APP_BASE_URL_IMG}/${adsItem?.image}`}
                className="w-32 h-32 lg:w-16 lg:h-16 object-cover rounded-lg mx-auto"
              />
            </div>

            <button
              onClick={() => openDialog(adsItem)}
              className="w-full bg-green-600 text-white p-2 rounded-sm text-sm hover:bg-white hover:text-green-800 border-2 border-green-600 transition-all duration-300"
            >
              بیشتر
            </button>
          </div>
        );
      })}
    </div>
  );
}
