import Rating from "../../../components/common/Rating";
import { useCart } from "../../../context/CartContext";

export default function Product({ product }) {
  const { addToCart, cart, removeFromCart } = useCart();

  const cartItem = cart.find((item) => item.id === product.id);
  const count = cartItem?.numberOfProduct ?? 0;

  const actions = [
    {
      title: "+",
      class: "border border-gray-300 cursor-pointer font-bold rounded-md",
    },
    {
      title: count,
      class: "",
    },
    {
      title: "-",
      class: "border border-gray-300 cursor-pointer font-bold rounded-md",
    },
  ];

  const handleAction = (type) => {
    switch (type) {
      case "+":
        addToCart(product);
        break;
      case "-":
        removeFromCart(product.id);
        break;
    }
  };

  return (
    <div className="shadow-md rounded-md p-5 md:p-10 border border-gray-400/20 ">
      <div className="grid grid-cols-2 gap-10">
        <div className="col-span-2 lg:col-span-1">
          <div className="h-72 lg:h-[500px] flex justify-center overflow-hidden">
            <img
              src={`${process.env.REACT_APP_BASE_URL_IMG}${product?.img}`}
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
              <div className="shadow-md border px-5 py-3 flex justify-center items-center gap-3 rounded-xl">
                {actions.map((act, inx) => (
                  <span
                    key={inx}
                    className={`text-xl px-3 py-1 aspect-square flex justify-center items-center ${act.class}`}
                    onClick={() => handleAction(act.title)}
                  >
                    {act.title}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
