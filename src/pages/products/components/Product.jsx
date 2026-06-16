import Rating from "../../../components/common/Rating";
import { useCart } from "../../../context/CartContext";
import AddToCardBtn from "../../../components/common/AddToCardBtn";
export default function Product({ product }) {
  const { addToCart, cart } = useCart();

  const cartItem = cart.find((item) => item.pCode === product.pCode);
  const count = cartItem?.numberOfProduct ?? 0;

  return (
    <div className="shadow-md rounded-md p-5 md:p-10 border border-gray-400/20 ">
      <div className="grid grid-cols-2 gap-10">
        <div className="col-span-2 lg:col-span-1">
          <div className="h-72 lg:h-[500px] flex justify-center overflow-hidden">
            <img
              src={`${process.env.REACT_APP_BASE_URL_IMG}/${product?.image}`}
              alt={product?.img}
              className="w-full h-auto object-cover rounded-md "
            />
          </div>
        </div>

        <div className="col-span-2 lg:col-span-1 flex flex-col justify-between ">
          <div className="space-y-5">
            <h1 className="text-xl font-semibold">{product.title}</h1>

            <div className="flex gap-2">
              <Rating rateVal={parseInt(product.rate)} isReadable={true} />
              <span className="text-gray-500"> ({product.rate} امتیاز)</span>
            </div>

            <div className="text-lg">
              <p className="text-red-500 line-through">
                {product.oldPrice} <span>تومان</span>
              </p>
              <p className="text-green-800">
                {product.newPrice} <span>تومان</span> / <span>هر کیلو</span>
              </p>
            </div>
            <p className="text-gray-500">{product.shortDesc}</p>
          </div>

          <div className="flex justify-center">
            {count <= 0 ? (
              <button
                className="bg-green-600 text-white p-2 md:px-8 rounded-md text-sm lg:text-base hover:bg-white hover:transition-colors hover:text-green-800 border-2 border-green-600 w-full mt-7"
                onClick={() => addToCart(product)}
              >
                <i className="icon-shopping-bag"></i> افزودن به سبد خرید
              </button>
            ) : (
              <div className="shadow-md border px-5 py-3">
                <AddToCardBtn product={product} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
