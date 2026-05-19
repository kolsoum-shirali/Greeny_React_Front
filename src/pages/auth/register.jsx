import { useState, useCallback } from "react";
import Logo from "../../assets/img/logo.png";
import { register } from "../../api/auth.api";
import Detail from "./components/Detail";

const initialFormState = {
  name: "",
  email: "",
  password: "",
};

const inputClassName =
  "h-11 border border-gray-400/20 focus:border focus:border-green-800/50 px-3 rounded-md placeholder:text-sm text-sm bg-gray-100/50 placeholder:text-gray-500";

export default function Register() {
  const [form, setForm] = useState(initialFormState);
  const [agree, setAgree] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = useCallback((e) => {
    const { id, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [id]: value,
    }));
  }, []);

  const handleAgreeChange = useCallback((e) => {
    setAgree(e.target.checked);
  }, []);

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();

      if (!agree || isSubmitting) return;

      try {
        setIsSubmitting(true);
        const result = await register(JSON.stringify(form));
        alert(result?.message || "ثبت نام با موفقیت انجام شد");

        setAgree(false);
        setForm(initialFormState);
      } catch (err) {
        const message = err?.message || "خطایی در ثبت نام رخ داده است.";
        alert(message);
      } finally {
        setIsSubmitting(false);
      }
    },
    [agree, form, isSubmitting],
  );

  return (
    <div className="p-3 lg:p-10">
      <div className="flex flex-col justify-center items-center">
        <img src={Logo} alt="GREENY logo" className="w-52" />
      </div>

      <div className="lg:w-2/5 mx-auto mt-5 lg:mt-10 space-y-5">
        <div className="shadow-md border border-gray-400/20 p-3 lg:p-10 rounded-md">
          <div className="text-center space-y-3">
            <h1 className="text-green-800 font-semibold text-2xl">
              عضو خانواده بزرگ گرینی شوید!
            </h1>
            <h2 className="text-gray-500 text-base">
              ثبت نام شما تنها چند دقیقه زمان می‌برد.
            </h2>
          </div>

          <form
            className="flex flex-col mt-7 space-y-4"
            onSubmit={handleSubmit}
          >
            <input
              autoComplete="name"
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
              autoComplete="email"
              id="email"
              name="email"
              placeholder="آدرس ایمیل خود را وارد کنید"
              className={inputClassName}
              type="email"
              value={form.email}
              onChange={handleChange}
              required
            />

            <input
              autoComplete="new-password"
              id="password"
              name="password"
              placeholder="پسوورد خود را وارد کنید"
              className={inputClassName}
              type="password"
              value={form.password}
              onChange={handleChange}
              required
            />

            <label className="flex items-center text-sm gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={agree}
                onChange={handleAgreeChange}
              />
              <span className="text-green-800">
                قبول تمام قوانین و شرایط استفاده
              </span>
            </label>
            <button
              type="submit"
              disabled={!agree || isSubmitting}
              className="bg-green-600 text-white p-3 md:px-8 rounded-md text-sm lg:text-base hover:bg-white hover:transition-colors hover:text-green-800 border-2 border-green-600 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "در حال ثبت نام..." : "ثبت نام"}
            </button>
          </form>
        </div>
        <Detail type={1} />
      </div>
    </div>
  );
}
