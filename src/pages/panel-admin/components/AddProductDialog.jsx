import { useState, useCallback, useEffect } from "react";
import { createProduct } from "../../../api/products.api";
import { toast } from "react-toastify";

const inputClassName =
  "h-11 border border-gray-400/20 focus:border focus:border-green-800/50 px-3 rounded-md placeholder:text-sm text-sm bg-gray-100/50 placeholder:text-gray-500 w-full";

const initialFormState = {
  title: "",
  oldPrice: "",
  newPrice: "",
  shortDesc: "",
  pCode: "",
  pType: "",
  weight: "",
  image: null,
};

export default function AddProductDialog({ isOpen, onClose }) {
  // ۱. هوک‌ها همیشه باید در بالاترین سطح کامپوننت باشند (بدون شرط)
  const [form, setForm] = useState(initialFormState);

  // ۲. با هر بار باز و بسته شدن دیالوگ، فرم را ریست می‌کنیم
  useEffect(() => {
    if (isOpen) {
      setForm(initialFormState);
    }
  }, [isOpen]);

  const handleChange = useCallback((e) => {
    const { id, value, type, files, name } = e.target;

    if (type === "file") {
      setForm((prev) => ({
        ...prev,
        image: files?.[0] || null,
      }));
      return;
    }

    setForm((prev) => ({
      ...prev,
      [id || name]: value,
    }));
  }, []);

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      try {
        const data = new FormData();
        data.append("title", form.title);
        data.append("shortDesc", form.shortDesc);
        if (form.image) data.append("image", form.image);
        data.append("oldPrice", form.oldPrice);
        data.append("newPrice", form.newPrice);
        data.append("pCode", form.pCode);
        data.append("pType", form.pType);
        data.append("weight", form.weight);
        const result = await createProduct(data);
        toast.success(result?.message || "محصول با موفقیت ثبت شد");
        setForm(initialFormState);
      } catch (err) {
        const message = err?.message || "خطایی در ثبت محصول رخ داده است.";
        toast.error(message);
      }
    },
    [form],
  );

  // ۳. شرط رندر بعد از تعریف هوک‌ها قرار می‌گیرد
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-lg w-full shadow-xl overflow-y-auto max-h-[90vh]">
        <h2 className="text-lg font-bold mb-4 text-center">افزودن محصول</h2>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="pCode"
              className="text-sm font-medium text-gray-700"
            >
              کد محصول
            </label>
            <input
              autoComplete="pCode"
              id="pCode"
              name="pCode"
              type="number"
              value={form.pCode}
              onChange={handleChange}
              required
              placeholder="کد محصول"
              className="w-full h-11 border border-gray-400/20 focus:border focus:border-green-800/50 px-3 rounded-md placeholder:text-sm text-sm bg-gray-100/50 placeholder:text-gray-500"
            />
            <label
              htmlFor="title"
              className="text-sm font-medium text-gray-700"
            >
              عنوان محصول
            </label>
            <input
              autoComplete="off"
              id="title"
              name="title"
              placeholder="عنوان محصول"
              className={inputClassName}
              type="text"
              value={form.title}
              onChange={handleChange}
              required
            />
            <label
              htmlFor="oldPrice"
              className="text-sm font-medium text-gray-700"
            >
              قیمت قبلی
            </label>
            <input
              autoComplete="off"
              id="oldPrice"
              name="oldPrice"
              type="number"
              value={form.oldPrice}
              onChange={handleChange}
              required
              placeholder="به تومان وارد کنید"
              className={inputClassName}
            />
            <label
              htmlFor="newPrice"
              className="text-sm font-medium text-gray-700"
            >
              قیمت جدید
            </label>
            <input
              autoComplete="off"
              id="newPrice"
              name="newPrice"
              type="number"
              value={form.newPrice}
              onChange={handleChange}
              required
              placeholder="به تومان وارد کنید"
              className={inputClassName}
            />
            <label
              htmlFor="pType"
              className="text-sm font-medium text-gray-700"
            >
              نوع کشت
            </label>
            <input
              autoComplete="off"
              id="pType"
              name="pType"
              type="text"
              value={form.pType}
              onChange={handleChange}
              required
              placeholder="نوع کشت"
              className={inputClassName}
            />
            <label
              htmlFor="weight"
              className="text-sm font-medium text-gray-700"
            >
              وزن
            </label>
            <input
              autoComplete="off"
              id="weight"
              name="weight"
              type="text"
              value={form.weight}
              onChange={handleChange}
              required
              placeholder="وزن"
              className={inputClassName}
            />
            <label
              htmlFor="shortDesc"
              className="text-sm font-medium text-gray-700"
            >
              توضیحات محصول
            </label>
            <textarea
              autoComplete="off"
              id="shortDesc"
              name="shortDesc"
              value={form.shortDesc}
              onChange={handleChange}
              required
              rows="6"
              placeholder="..."
              className="w-full border border-gray-400/20 focus:border focus:border-green-800/50 p-3 rounded-md placeholder:text-sm text-sm bg-gray-100/50 placeholder:text-gray-500"
            />
            <label
              htmlFor="image"
              className="text-sm font-medium text-gray-700"
            >
              عکس محصول
            </label>
            <div className="rounded-md border border-gray-400/20 p-5">
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="flex justify-end gap-3 mt-6">
            <button
              onClick={onClose}
              className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md transition-colors"
            >
              انصراف
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm bg-green-800 text-white rounded-md hover:bg-green-900 transition-colors"
            >
              ذخیره محصول
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
