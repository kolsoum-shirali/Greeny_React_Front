import { useCart } from "../../context/CartContext";

export default function AddToCardBtn({ product }) {
  const { addToCart, cart, removeFromCart } = useCart({ product });
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
      default:
        console.log("");
    }
  };

  return (
    <div className="flex justify-center items-center gap-3 rounded-xl">
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
  );
}
