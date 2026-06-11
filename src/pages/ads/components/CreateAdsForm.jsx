import { useState, useCallback } from "react";
import { submitAds } from "../../../api/ads.api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const initialFormState = {
  caption: "",
  description: "",
  image: null,
  minPrice: "",
  maxPrice: "",
  type: "",
};
export default function CreateAdsForm() {
  const navigate = useNavigate();
  const [form, setForm] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = useCallback((e) => {
    const { id, value, type, files, name } = e.target;

    if (type === "file") {
      setForm((prev) => ({
        ...prev,
        image: files?.[0] || null,
      }));
      return;
    }

    if (type === "radio") {
      setForm((prev) => ({
        ...prev,
        type: value,
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

      if (isSubmitting) return;

      try {
        setIsSubmitting(true);

        const data = new FormData();
        data.append("caption", form.caption);
        data.append("description", form.description);
        if (form.image) data.append("image", form.image);
        data.append("minPrice", form.minPrice);
        data.append("maxPrice", form.maxPrice);
        data.append("type", form.type);

        const result = await submitAds(data);
        toast.success(result?.message || "آگهی با موفقیت ثبت شد");
        setForm(initialFormState);
      } catch (err) {
        const message = err?.message || "خطایی در ثبت آگهی رخ داده است.";
        toast.error(message);
      } finally {
        setIsSubmitting(false);
      }
    },
    [form, isSubmitting],
  );
  return (
    <div className="shadow-md rounded-md border border-gray-400/20 p-5 space-y-7">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-5">
          <div className="col-span-2">
            <p className="mb-1 text-sm lg:text-base">عنوان آگهی</p>
            <input
              autoComplete="caption"
              id="caption"
              name="caption"
              type="text"
              value={form.caption}
              onChange={handleChange}
              required
              placeholder="عنوان آگهی"
              className="w-full h-11 border border-gray-400/20 focus:border focus:border-green-800/50 px-3 rounded-md placeholder:text-sm text-sm bg-gray-100/50 placeholder:text-gray-500"
            />
          </div>

          <div className="col-span-2">
            <p className="mb-1 text-sm lg:text-base">توضیحات آگهی</p>
            <textarea
              autoComplete="description"
              id="description"
              name="description"
              value={form.description}
              onChange={handleChange}
              required
              rows="10"
              placeholder="تا می توانید توضیحات بیشتری برای آگهی بنویسید تا بهتر دیده شود"
              className="w-full border border-gray-400/20 focus:border focus:border-green-800/50 p-3 rounded-md placeholder:text-sm text-sm bg-gray-100/50 placeholder:text-gray-500"
            />
          </div>

          <div className="col-span-2">
            <p className="mb-1 text-sm lg:text-base">
              آگهی های تصویردار 10 برابر بیشتر از سایر آگهی ها دیده می شوند.
            </p>
            <div className="rounded-md border border-gray-400/20 p-5">
              <div className="flex flex-col justify-center items-center">
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
          </div>

          <div className="col-span-2 lg:col-span-1">
            <p className="mb-1 text-sm lg:text-base">کمترین قیمت</p>
            <input
              autoComplete="minPrice"
              id="minPrice"
              name="minPrice"
              type="number"
              value={form.minPrice}
              onChange={handleChange}
              required
              placeholder="به تومان وارد کنید"
              className="w-full h-11 border border-gray-400/20 focus:border focus:border-green-800/50 px-3 rounded-md placeholder:text-sm text-sm bg-gray-100/50 placeholder:text-gray-500"
            />
          </div>

          <div className="col-span-2 lg:col-span-1">
            <p className="mb-1 text-sm lg:text-base">بیشترین قیمت</p>
            <input
              autoComplete="maxPrice"
              id="maxPrice"
              name="maxPrice"
              type="number"
              value={form.maxPrice}
              onChange={handleChange}
              required
              placeholder="به تومان وارد کنید"
              className="w-full h-11 border border-gray-400/20 focus:border focus:border-green-800/50 px-3 rounded-md placeholder:text-sm text-sm bg-gray-100/50 placeholder:text-gray-500"
            />
          </div>

          <div className="col-span-2 space-y-4">
            <p className="bg-gray-200/50 p-3 text-sm lg:text-base">
              لطفا نوع آگهی رو انتخاب کنید.
            </p>
            <div className="space-y-2">
              <label className="block">
                <input
                  type="radio"
                  name="type"
                  value="1"
                  checked={form.type === "1"}
                  onChange={handleChange}
                  className="ml-2"
                />
                <span className="text-sm lg:text-base">فروشنده ام</span>
              </label>

              <label className="block">
                <input
                  type="radio"
                  name="type"
                  value="2"
                  checked={form.type === "2"}
                  onChange={handleChange}
                  className="ml-2"
                />
                <span className="text-sm lg:text-base">خریدارم</span>
              </label>
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-5">
          <button
            className="bg-green-600 text-white p-3 md:px-8 rounded-md text-sm lg:text-base hover:bg-white hover:transition-colors hover:text-green-800 border-2 border-green-600 disabled:opacity-50"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "در حال ارسال..." : "ارسال و ثبت آگهی"}
          </button>
        </div>
      </form>
    </div>
  );
}
