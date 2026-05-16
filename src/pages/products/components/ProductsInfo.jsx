export default function ProductsInfo({ product }) {
  return (
    <div className="space-y-10 lg:space-y-16">
      <div className="shadow-md rounded-md p-5 md:p-10 border border-gray-400/20">
        <h1 className="text-2xl">توضیحات</h1>
        <p className="text-base text-gray-500 text-justify mt-5">
          {product?.shortDesc}
        </p>
      </div>
      <div className="shadow-md rounded-md p-5 md:p-10 border border-gray-400/20">
        <h1 className="text-2xl">مشخصات</h1>
        <div className="mt-5 border border-gray-400/20">
          {product?.more?.map((item, inx) => (
            <div
              key={inx}
              className="grid grid-cols-6 gap-3 border-b border-gray-400/20 last:border-0 p-4"
            >
              <div className="col-span-6 md:col-span-2 font-semibold">
                {item?.title}
              </div>
              <div className="col-span-6 md:col-span-4 text-gray-500">
                {item?.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
