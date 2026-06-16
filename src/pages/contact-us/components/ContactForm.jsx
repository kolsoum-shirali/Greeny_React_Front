import { addComment } from "../../../api/comments.api";
import { toast } from "react-toastify";
import { useState, useCallback } from "react";

const initialFormState = {
  fullName: "",
  email: "",
  message: "",
};

const inputClassName =
  "h-11 w-full border border-gray-400/20 focus:border focus:border-green-800/50 px-3 rounded-md placeholder:text-sm text-sm bg-gray-100/50 placeholder:text-gray-500";

export default function ContactForm() {
  const [form, setForm] = useState(initialFormState);
  const handleChange = useCallback((e) => {
    const { id, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [id]: value,
    }));
  }, []);
  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      try {
        const result = await addComment(JSON.stringify(form));
        toast.success(result?.message || "دیدگاه با موفقیت انجام شد");
        setForm(initialFormState);
      } catch (err) {
        const message = err?.message || "خطایی در ثبت دیدگاه رخ داده است.";
        toast.error(message);
      }
    },
    [form],
  );

  return (
    <form className="w-full space-y-3" onSubmit={handleSubmit}>
      <input
        type="text"
        id="fullName"
        name="fullName"
        autoComplete="off"
        placeholder="نام شما"
        required
        className={inputClassName}
        value={form.fullName}
        onChange={handleChange}
      />
      <input
        type="email"
        id="email"
        name="email"
        autoComplete="off"
        placeholder="ایمیل شما"
        required
        className={inputClassName}
        value={form.email}
        onChange={handleChange}
      />
      <textarea
        rows="10"
        id="message"
        name="message"
        placeholder="پیام شما"
        autoComplete="off"
        required
        className="w-full border border-gray-400/20 focus:border focus:border-green-800/50 p-3 rounded-md placeholder:text-sm text-sm bg-gray-100/50 placeholder:text-gray-500"
        value={form.message}
        onChange={handleChange}
      ></textarea>
      <div className="flex justify-end ">
        <button
          type="submit"
          className="bg-green-600 text-white p-3 md:px-8 rounded-md text-sm lg:text-base hover:bg-white hover:transition-colors hover:text-green-800 border-2 border-green-600"
        >
          ارسال دیدگاه
        </button>
      </div>
    </form>
  );
}
