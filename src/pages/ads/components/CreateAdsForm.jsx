export default function CreateAdsForm() {
  return (
    <div className="shadow-md rounded-md border border-gray-400/20 p-5 space-y-7">
      <form>
        <div className="grid grid-cols-2 gap-5">
          <div className="col-span-2">
            <p className="mb-1 text-sm lg:text-base">عنوان آگهی</p>
            <input
              type="text"
              id="email"
              autoComplete="off"
              placeholder="عنوان آگهی"
              className="w-full h-11 border border-gray-400/20 focus:border focus:border-green-800/50 px-3 rounded-md placeholder:text-sm text-sm bg-gray-100/50 placeholder:text-gray-500"
            />
          </div>

          <div className="col-span-2">
            <p className="mb-1 text-sm lg:text-base">توضیحات آگهی</p>
            <textarea
              rows="10"
              id="comment"
              placeholder="تا می توانید توضیحات بیشتری برای آگهی بنویسید تا بهتر دیده شود"
              autoComplete="off"
              className="w-full border border-gray-400/20 focus:border focus:border-green-800/50 p-3 rounded-md placeholder:text-sm text-sm bg-gray-100/50 placeholder:text-gray-500"
            ></textarea>
          </div>
          <div className="col-span-2">
            <p className="mb-1 text-sm lg:text-base">
              آگهی های تصویردار 10 برابر بیشتر از سایر آگهی ها دیده می شوند.
            </p>
            <div className=" rounded-md border border-gray-400/20 p-5">
              <div className="flex flex-col justify-center items-center">
                <input type="file" id="email" autoComplete="off" />
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="flex items-center gap-2">
              <input type="checkbox" />

              <p className="text-green-800 text-sm lg:text-base">قیمت توافقی</p>
            </div>
          </div>
          <div className="col-span-2 lg:col-span-1">
            <p className="mb-1 text-sm lg:text-base">کمترین قیمت</p>
            <input
              type="text"
              id="email"
              autoComplete="off"
              placeholder=" به تومان وارد کنید"
              className="w-full h-11 border border-gray-400/20 focus:border focus:border-green-800/50 px-3 rounded-md placeholder:text-sm text-sm bg-gray-100/50 placeholder:text-gray-500"
            />
          </div>
          <div className="col-span-2 lg:col-span-1">
            <p className="mb-1 text-sm lg:text-base">بیشترین قیمت</p>
            <input
              type="text"
              id="email"
              autoComplete="off"
              placeholder=" به تومان وارد کنید"
              className="w-full h-11 border border-gray-400/20 focus:border focus:border-green-800/50 px-3 rounded-md placeholder:text-sm text-sm bg-gray-100/50 placeholder:text-gray-500"
            />
          </div>
          <div className="col-span-2 space-y-4">
            <p className="bg-gray-200/50 p-3 text-sm lg:text-base">
              لطفا نوع آگهی رو انتخاب کنید.
            </p>
            <div className="space-y-2">
              <p>
                <input type="radio" className="ml-2" />
                <span className="text-sm lg:text-base">فروشنده ام</span>
              </p>
              <p>
                <input type="radio" className="ml-2" />
                <span className="text-sm lg:text-base"> خریدارم</span>
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-5">
          <button className="bg-green-600 text-white p-3 md:px-8 rounded-md text-sm lg:text-base hover:bg-white hover:transition-colors hover:text-green-800 border-2 border-green-600">
            ارسال و ثبت آگهی
          </button>
        </div>
      </form>
    </div>
  );
}
