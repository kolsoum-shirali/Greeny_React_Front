export default function ContactForm() {
  return (
    <form className="w-full space-y-3">
      <input
        type="text"
        id="email"
        autoComplete="off"
        placeholder="نام شما"
        className="w-full h-11 border border-gray-400/20 focus:border focus:border-green-800/50 px-3 rounded-md placeholder:text-sm text-sm bg-gray-100/50 placeholder:text-gray-500"
      />
      <input
        type="text"
        id="email"
        autoComplete="off"
        placeholder="ایمیل شما"
        className="w-full h-11 border border-gray-400/20 focus:border focus:border-green-800/50 px-3 rounded-md placeholder:text-sm text-sm bg-gray-100/50 placeholder:text-gray-500"
      />
      <input
        type="text"
        id="email"
        autoComplete="off"
        placeholder="موضوع"
        className="w-full h-11 border border-gray-400/20 focus:border focus:border-green-800/50 px-3 rounded-md placeholder:text-sm text-sm bg-gray-100/50 placeholder:text-gray-500"
      />
      <textarea
        rows="10"
        id="comment"
        placeholder="پیام شما"
        autoComplete="off"
        className="w-full border border-gray-400/20 focus:border focus:border-green-800/50 p-3 rounded-md placeholder:text-sm text-sm bg-gray-100/50 placeholder:text-gray-500"
      ></textarea>
      <div className="flex justify-end ">
        <button className="bg-green-600 text-white p-3 md:px-8 rounded-md text-sm lg:text-base hover:bg-white hover:transition-colors hover:text-green-800 border-2 border-green-600">
          ارسال پیام
        </button>
      </div>
    </form>
  );
}
