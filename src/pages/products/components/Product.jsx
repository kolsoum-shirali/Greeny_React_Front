import img1 from "../../../assets/img/Products/2.jpg";
import Rating from "../../../components/common/Rating";
export default function Product() {
  return (
    <div className="shadow-md rounded-md p-5 md:p-10 border border-gray-400/20">
      <div className="grid grid-cols-2 gap-10">
        <div className="col-span-2 lg:col-span-1">
          <div className="h-72 lg:h-[500px] flex justify-center overflow-hidden">
            <img
              src={img1}
              alt=""
              className="w-full h-auto object-cover rounded-md"
            />
          </div>
        </div>
        <div className="col-span-2 lg:col-span-1 flex flex-col justify-between ">
          <div className="space-y-5">
            <h1 className="text-xl font-semibold">سیب زمینی ارگانیک</h1>
            <div className="flex gap-2">
              <Rating />
              <span className="text-gray-500"> (3 امتیاز)</span>
            </div>
            <div className="text-lg">
              <p className="text-red-500 line-through">
                45000 <span>تومان</span>
              </p>
              <p className="text-green-800">
                40000 <span>تومان</span> / <span>هر کیلو</span>
              </p>
            </div>
            <p className="text-gray-500 text-justify">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
              و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
            </p>
          </div>
          <button className="bg-green-600 text-white p-2 md:px-8 rounded-md text-sm lg:text-base hover:bg-white hover:transition-colors hover:text-green-800 border-2 border-green-600 w-full mt-7">
            <i className="icon-shopping-bag"></i> افزودن به سبد خرید
          </button>
        </div>
      </div>
    </div>
  );
}
