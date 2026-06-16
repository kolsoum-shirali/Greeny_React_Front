export default function MainProductCardd({
  product,
  showHeading,
  children,
}) {
  return (
    <div className="shadow-sm p-5 border border-gray-400/20 rounded-md">
      <div className="h-72 md:h-96 overflow-hidden flex justify-center pb-2 rounded-md">
        <img
          src={`${process.env.REACT_APP_BASE_URL_IMG}/${product.image}`}
          alt={product.img}
          className="w-full h-auto object-cover rounded-md hover:scale-110 transition-scale duration-500
"
        />
      </div>
      <div className="space-y-3 mt-3">
        {showHeading && (
          <div className="flex gap-2">
            <p className="text-gray-500 text-sm">
              <i className="icon-user-o text-green-800"></i>ادمین
            </p>
            <p className="text-gray-500 text-sm">
              <i className=" icon-calendar text-green-800"></i>
              {product.date}
            </p>
            <p className="text-gray-500 text-sm">
              <i className=" icon-user-o text-green-800"></i>
              {product.comment} کامنت
            </p>
          </div>
        )}

        <h3 className="text-lg line-clamp-1 font-bold">{product.title}</h3>
        <p className="text-base line-clamp-3 text-gray-500 text-justify">
          {product.shortDesc}
        </p>
        {children}
      </div>
    </div>
  );
}
