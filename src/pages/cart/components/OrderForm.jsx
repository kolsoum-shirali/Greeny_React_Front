import { useState } from "react";
import { useCart } from "../../../context/CartContext";
import { submitOrder } from "../../../api/order.api";
const initialFormState = {
  name: "",
  lastName: "",
  mobile: "",
  email: "",
  address: "",
  comment: "",
};
const inputClassName =
  "h-11 border border-gray-400/20 focus:border focus:border-green-800/50 px-3 rounded-md placeholder:text-sm text-sm bg-gray-100/50 placeholder:text-gray-500";

export default function OrderForm({ finishOrder }) {
  const { cart, deleteCart } = useCart();
  const [form, setForm] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [id]: value,
    }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setIsSubmitting(true);
      const result = await submitOrder(
        JSON.stringify({ ...form, products: cart }),
      );
      alert(result?.message || "سفارش ثبت شد");
      setForm(initialFormState);
      finishOrder(result.data);
      deleteCart();
    } catch (err) {
      const message = err?.message || "خطایی رخ داده است.";
      alert(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <form className="flex flex-col mt-7 space-y-4" onSubmit={handleSubmit}>
        <input
          id="name"
          name="name"
          placeholder="نام خود را وارد کنید"
          className={inputClassName}
          type="text"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          id="lastName"
          name="lastName"
          placeholder="فامیل خود را وارد کنید"
          className={inputClassName}
          type="text"
          value={form.lastName}
          onChange={handleChange}
          required
        />
        <input
          id="mobile"
          name="mobile"
          placeholder="موبایل خود را وارد کنید"
          className={inputClassName}
          type="number"
          value={form.mobile}
          onChange={handleChange}
          required
        />
        <input
          id="email"
          name="email"
          placeholder="آدرس ایمیل خود را وارد کنید"
          className={inputClassName}
          type="email"
          value={form.email}
          onChange={handleChange}
        />
        <input
          id="address"
          name="address"
          placeholder="آدرس منزل خود را وارد کنید"
          className={inputClassName}
          type="text"
          value={form.address}
          onChange={handleChange}
          required
        />
        <textarea
          rows="5"
          id="comment"
          name="comment"
          placeholder="یادداشت شما درباه نحوه تحویل سفارش"
          autoComplete="off"
          className="w-full border border-gray-400/20 focus:border focus:border-green-800/50 p-3 rounded-md placeholder:text-sm text-sm bg-gray-100/50 placeholder:text-gray-500"
          value={form.comment}
          onChange={handleChange}
        ></textarea>
        <button
          type="submit"
          className="bg-green-600 text-white p-3 md:px-8 rounded-md text-sm lg:text-base hover:bg-white hover:transition-colors hover:text-green-800 border-2 border-green-600 disabled:opacity-50 disabled:cursor-not-allowed mr-auto"
        >
          {isSubmitting ? "در حال ثبت سفارش ..." : "ثبت سفارش"}
        </button>
      </form>
    </div>
  );
}
