import { useState } from "react";
import Detail from "./components/Detail";
import Logo from "../../assets/img/logo.png";
import { login, userProfile } from "../../api/auth.api";
import { useNavigate } from "react-router-dom";

const initialFormState = {
  email: "",
  password: "",
};

const inputClassName =
  "h-11 border border-gray-400/20 focus:border focus:border-green-800/50 px-3 rounded-md placeholder:text-sm text-sm bg-gray-100/50 placeholder:text-gray-500";

export default function Login() {
  const navigate = useNavigate();
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

    if (isSubmitting) return;

    try {
      setIsSubmitting(true);
      const result = await login(JSON.stringify(form));
      alert(result?.message || "ورود موفق بود");
      setForm(initialFormState);
      try {
        await userProfile();
        navigate("/profile");
        // alert('با موفقیت وارد حساب کاربری خود شدید.');
      } catch (err) {
        alert(err.message);
      }
    } catch (err) {
      const message = err?.message || "خطایی در احراز هویت رخ داده است.";
      alert(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-3 lg:p-10">
      <div className="flex flex-col justify-center items-center">
        <img src={Logo} alt="Logo" className="w-52" />
      </div>

      <div className="lg:w-2/5 mx-auto mt-5 lg:mt-10 space-y-5">
        <div className="shadow-md border border-gray-400/20 p-3 lg:p-10 rounded-md">
          <div className="text-center space-y-3">
            <h1 className="text-green-800 font-semibold text-2xl">
              خوش آمدید!
            </h1>
            <h2 className="text-gray-500 text-base">
              عضو گرینی هستید؟ با اطلاعات خود وارد شوید.
            </h2>
          </div>

          <form
            className="flex flex-col mt-7 space-y-4"
            onSubmit={handleSubmit}
          >
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
              autoComplete="current-password"
              id="password"
              name="password"
              placeholder="پسورد خود را وارد کنید"
              className={inputClassName}
              type="password"
              value={form.password}
              onChange={handleChange}
              required
            />

            <div className="flex items-center text-sm gap-2">
              <input type="checkbox" />
              <span className="text-green-800">مرا به خاطر بسپار</span>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-green-600 text-white p-3 md:px-8 rounded-md text-sm lg:text-base hover:bg-white hover:transition-colors hover:text-green-800 border-2 border-green-600 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "درحال بررسی..." : "ورود"}
            </button>

            <p className="text-center text-sm">
              پسوورد خود را فراموش کردید؟
              <span className="text-green-800 font-semibold mx-1">
                بازیابی پسوورد
              </span>
            </p>
          </form>
        </div>
        <Detail type={2} />
      </div>
    </div>
  );
}
