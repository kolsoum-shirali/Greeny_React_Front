export default function ProductsInfo({ product }) {
  return (
    <div className="space-y-10 lg:space-y-12">
      <div className="shadow-md rounded-md p-5 md:p-10 border border-gray-400/20">
        <h1 className="text-2xl">توضیحات</h1>
        <p className="text-base text-gray-500 text-justify mt-5">
          {product?.shortDesc}
        </p>
      </div>
      <div className="shadow-md rounded-md p-5 md:p-10 border border-gray-400/20">
        <h1 className="text-2xl">مشخصات</h1>
        <div className="mt-5 border border-gray-400/20">
          <div className="grid grid-cols-6 gap-3 border-b border-gray-400/20  p-4">
            <div className="col-span-6 md:col-span-2 font-semibold">
              کد محصول :
            </div>
            <div className="col-span-6 md:col-span-4 text-gray-500">
              {product.pCode}
            </div>
          </div>
          <div className="grid grid-cols-6 gap-3 border-b border-gray-400/20  p-4">
            <div className="col-span-6 md:col-span-2 font-semibold">
               نوع کشت :
            </div>
            <div className="col-span-6 md:col-span-4 text-gray-500">
              {product.pType}
            </div>
          </div>
          <div className="grid grid-cols-6 gap-3 border-b border-gray-400/20  p-4">
            <div className="col-span-6 md:col-span-2 font-semibold">
               وزن :
            </div>
            <div className="col-span-6 md:col-span-4 text-gray-500">
              {product.weight}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
