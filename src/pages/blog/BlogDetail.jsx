import BreadCrumbsBanner from "../../components/common/BreadCrumbsBanner";
import ContactForm from "../../components/common/ContactForm";
import PreviewPicture from "../../assets/img/4.png";
import PopularBlogs from "./components/PopularBlogs";
import FollowUs from "./components/FollowUs";
import BlogComments from "./components/BlogComments";
const options = [
  { title: "خانه", link: "/" },
  { title: "وبلاگ", link: "/blog" },
  { title: "جزئیات مطلب", link: "/blog" },
];

export default function BlogDetail() {
  return (
    <div>
      <BreadCrumbsBanner options={options} caption="جزئیات مطلب" />
      <div className="container mx-auto p-5 mt-7 md:mt-16 space-y-10 lg:space-y-32">
        <div className="grid grid-cols-12 md:gap-10">
          <div className="col-span-12 lg:col-span-8 space-y-5 md:space-y-10">
            <div>
              <img src={PreviewPicture} alt="" className="mx-auto" />
              <div className="mt-10">
                <h1 className="font-semibold text-xl text-center">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است.
                </h1>
                <p className="text-gray-500 leading-7 mt-5 text-justify">
                  مداد رنگی ها مشغول بودند به جز مداد سفید، هیچکس به او کار
                  نمیداد، همه میگفتند : تو به هیچ دردی نمیخوری، یک شب که مداد
                  رنگی ها تو سیاهی شب گم شده بودند، مداد سفید تا صبح ماه کشید
                  مهتاب کشید و انقدر ستاره کشید که کوچک و کوچکتر شد صبح توی جعبه
                  مداد رنگی جای خالی او با هیچ رنگی پر نشد، به یاد هم باشیم شاید
                  فردا ما هم در کنار هم نباشیم. لورم ایپسوم متن ساختگی با تولید
                  سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،
                  چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
                  است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع
                  با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و
                  سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
                  طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای
                  علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
                  کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در
                  ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز
                  شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
                  دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                </p>
              </div>
            </div>
            <div>
              <BlogComments />
            </div>
            <div className="shadow-md rounded-md p-5 md:p-10 border border-gray-400/20">
              <h3 className="text-lg font-semibold mb-5">کامنت بگذارید</h3>
              <ContactForm />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-4 relative">
            <div className="sticky inset-0 space-y-7 ">
              <PopularBlogs />
              <FollowUs />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
