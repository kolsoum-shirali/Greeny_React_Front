import img1 from "../../../assets/img/1.jpg";
import img2 from "../../../assets/img/2.jpg";
import img3 from "../../../assets/img/3.jpg";
import img4 from "../../../assets/img/4.png";

const images = [{ img: img1 }, { img: img2 }, { img: img3 }, { img: img4 }];
const options = [
  { title: "کاربران ثبت نام شده", desc: 1520 },
  { title: "بازدیدکنندگان در روز", desc: 780 },
  { title: "مجموع محصولات", desc: 15 },
];
export default function AboutCompany() {
  return (
    <section className="grid grid-cols-2 gap-10">
      <div className="col-span-2 lg:col-span-1 space-y-6 text-justify text-base text-gray-500">
        <h1 className="text-xl font-semibold">
         وب‌سایت میوه‌فروشی گرینی جذاب و کاربرپسند ما که جوهر فضل طبیعت را به نمایش می‌گذارد، زندگی سالم را ترویج می‌کند، و مشتریان را تشویق می‌کند تا سفری پربار از سلامتی و سرزندگی را آغاز کنند.
        </h1>
        <p className="">
          بازار محصولات کشاورزی یکی از مهم‌ترین بخش‌های اقتصادی هر کشور است؛
          زیرا مستقیماً با امنیت غذایی، اشتغال، معیشت روستایی، صادرات غیرنفتی و
          کنترل قیمت کالاهای اساسی ارتباط دارد. با این حال، ساختار سنتی خرید و
          فروش این محصولات در بسیاری از مناطق هنوز مبتنی بر واسطه‌ها، بازارهای
          فیزیکی، عدم شفافیت قیمت و محدودیت دسترسی است. در چنین شرایطی، ایجاد یک
          سایت خرید و فروش عمده محصولات کشاورزی می‌تواند نقش مهمی در بهبود
          فرآیند عرضه و تقاضا، کاهش هزینه‌های مبادله و افزایش بهره‌وری بازار
          ایفا کند.
        </p>
        <p>
          اهمیت موضوع : اهمیت راه‌اندازی یک پلتفرم آنلاین برای خرید و فروش عمده
          محصولات کشاورزی را می‌توان از چند جنبه بررسی کرد:
        </p>
        <ul>
          <li>کاهش نقش واسطه‌ها </li>
          <li>شفافیت قیمت و عرضه</li>
          <li>افزایش سرعت معاملات </li>
          <li>کاهش ضایعات محصولات</li>
          <li>توسعه بازار و دسترسی گسترده‌تر</li>
        </ul>
        <p>
          طبق برآوردهای جهانی، بخش کشاورزی سهم قابل توجهی از اشتغال در کشورهای
          درحال‌توسعه را به خود اختصاص می‌دهد. در بسیاری از کشورها، سهم واسطه‌ها در قیمت نهایی محصولات غذایی می‌تواند به بیش از 30 تا 50 درصد برسد. یکی از مهم‌ترین چالش‌های کشاورزی، ضایعات پس از برداشت است که در برخی محصولات فاسدشدنی بسیار بالاست. اگر تنها 10 تا 20 درصد از ضایعات با بهبود فروش و توزیع کاهش یابد، صرفه‌جویی اقتصادی بزرگی ایجاد می‌شود. 
        </p>
        <ul className="grid grid-cols-3 md:gap-7">
          {options.map((option, index) => (
            <li
              key={index}
              className="col-span-3 md:col-span-1 flex flex-col md:space-y-2 p-3 md:border-l border-gray-400/40 last:border-l-0"
            >
              <span className="font-semibold text-lg">{option.desc}</span>
              <span className="text-gray-500 text-base">{option.title}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="col-span-2 lg:col-span-1">
        <div className="grid grid-cols-2 gap-2">
          {images.map((item, index) => {
            return (
              <div key={index} className="col-span-1">
                <div className="h-48 lg:h-64 flex justify-center">
                  <img
                    src={item.img}
                    alt=""
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
