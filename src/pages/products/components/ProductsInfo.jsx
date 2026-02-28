const info = [
  { title: "کد محصول", desc: "123456" },
  { title: "وزن", desc: "1 کیلو ، 2 کیلو" },
  { title: "مناسب برای", desc: "کباب و خشک کردنی" },
  { title: "نوع کشت", desc: "ارگانیک" },
];

export default function ProductsInfo() {
  return (
    <div className="space-y-10 lg:space-y-16">
      <div className="shadow-md rounded-md p-5 md:p-10 border border-gray-400/20">
        <h1 className="text-2xl">توضیحات</h1>
        <p className="text-base text-gray-500 text-justify mt-5">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
          صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
          شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
          اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
          قرار گیرد.
        </p>
      </div>
      <div className="shadow-md rounded-md p-5 md:p-10 border border-gray-400/20">
        <h1 className="text-2xl">مشخصات</h1>
        <div className="mt-5 border border-gray-400/20">
          {info.map((item, inx) => (
            <div
              key={inx}
              className="grid grid-cols-6 gap-3 border-b border-gray-400/20 last:border-0 p-4"
            >
              <div className="col-span-6 md:col-span-2 font-semibold">
                {item.title}
              </div>
              <div className="col-span-6 md:col-span-4 text-gray-500">
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
