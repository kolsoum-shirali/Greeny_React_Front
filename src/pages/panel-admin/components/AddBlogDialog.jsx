import { useState, useCallback, useEffect } from "react";
import { createBlog } from "../../../api/blogs.api";
import { toast } from "react-toastify";

const inputClassName =
  "h-11 border border-gray-400/20 focus:border focus:border-green-800/50 px-3 rounded-md placeholder:text-sm text-sm bg-gray-100/50 placeholder:text-gray-500 w-full";

const initialFormState = {
  title: "",
  shortDesc: "",
  desc: "",
  numBlog: "",
  image: null,
};

export default function AddBlogDialog({ isOpen, onClose }) {
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
        data.append("desc", form.desc);
        data.append("numBlog", form.numBlog);
        if (form.image) data.append("image", form.image);
        const result = await createBlog(data);
        toast.success(result?.message || "وبلاگ با موفقیت ثبت شد");
        setForm(initialFormState);
      } catch (err) {
        const message = err?.message || "خطایی در ثبت وبلاگ رخ داده است.";
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
        <h2 className="text-lg font-bold mb-4 text-center">افزودن وبلاگ</h2>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="numBlog"
              className="text-sm font-medium text-gray-700"
            >
              شماره وبلاگ
            </label>
            <input
              autoComplete="off"
              id="numBlog"
              name="numBlog"
              type="number"
              value={form.numBlog}
              onChange={handleChange}
              required
              placeholder="شماره وبلاگ"
              className="w-full h-11 border border-gray-400/20 focus:border focus:border-green-800/50 px-3 rounded-md placeholder:text-sm text-sm bg-gray-100/50 placeholder:text-gray-500"
            />
            <label
              htmlFor="title"
              className="text-sm font-medium text-gray-700"
            >
              عنوان وبلاگ
            </label>
            <input
              autoComplete="off"
              id="title"
              name="title"
              placeholder="عنوان وبلاگ"
              className={inputClassName}
              type="text"
              value={form.title}
              onChange={handleChange}
              required
            />
            <label
              htmlFor="shortDesc"
              className="text-sm font-medium text-gray-700"
            >
              توضیحات کوتاه
            </label>
            <textarea
              autoComplete="off"
              id="shortDesc"
              name="shortDesc"
              value={form.shortDesc}
              onChange={handleChange}
              required
              rows="3"
              placeholder="..."
              className="w-full border border-gray-400/20 focus:border focus:border-green-800/50 p-3 rounded-md placeholder:text-sm text-sm bg-gray-100/50 placeholder:text-gray-500"
            />
            <label
              htmlFor="desc"
              className="text-sm font-medium text-gray-700"
            >
              توضیحات وبلاگ
            </label>
            <textarea
              autoComplete="off"
              id="desc"
              name="desc"
              value={form.desc}
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
              عکس وبلاگ
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
              ذخیره وبلاگ
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
