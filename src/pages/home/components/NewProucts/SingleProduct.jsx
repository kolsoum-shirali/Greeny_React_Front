import Rating from "../../../../components/common/Rating";

export default function SingleProduct({ product }) {
  return (
    <div className="shadow-sm border border-gray-400/20 p-3">
      <div className="relative group overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 transition-transform bg-gray-500/70 transform translate-y-full group-hover:translate-y-0 duration-300 flex items-center justify-center h-full">
          <button className="bg-green-600 text-white p-3 md:px-8 rounded-md text-sm lg:text-base hover:bg-white hover:transition-colors hover:text-green-800 border-2 border-green-600">
            مشاهده <i className="icon-eye"></i>
          </button>
        </div>
        <div className="h-72 overflow-hidden flex justify-center pb-2">
          <img
            src={product.img}
            alt=""
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
      <div className="py-5 border-t border-t-gray-400/40">
        <div className="flex justify-center gap-1">
          <Rating />
          <span className="text-gray-500 text-sm mt-1">(5)</span>
        </div>
        <h4>میوه تازه</h4>
        <div>
          <p>
            <span className="text-red-500 line-through">150000</span>
            <span className="text-gray-500">تومان</span>
          </p>
          <p>
            <span className="text-green-800">120000</span>
            <span className="text-gray-500">تومان</span>
            <span className="text-gray-500">(کیلو)</span>
          </p>
          <button className="bg-gray-400 p-3 text-sm text-white w-full rounded-sm hover:bg-green-600 transition-colors delay-75">
            افزودن <i className="icon-shopping-bag"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
