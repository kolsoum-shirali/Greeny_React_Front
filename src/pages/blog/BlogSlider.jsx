import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import BlogCard from "./BlogCard";
import blog1 from "../../assets/img/Products/1.webp";
import blog2 from "../../assets/img/Products/2.jpg";
import blog3 from "../../assets/img/Products/3.jpg";
import blog4 from "../../assets/img/Products/4.jpg";
import blog5 from "../../assets/img/Products/5.jpeg";
import blog6 from "../../assets/img/Products/6.jpg";
import blog7 from "../../assets/img/Products/7.jpg";
import blog8 from "../../assets/img/Products/8.jpg";

const blogs = [
  {
    img: blog1,
    title: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
  },
  {
    img: blog2,
    title: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
  },
  {
    img: blog3,
    title: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
  },
  {
    img: blog4,
    title: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
  },
  {
    img: blog5,
    title: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
  },
  {
    img: blog6,
    title: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
  },
  {
    img: blog7,
    title: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
  },
  {
    img: blog8,
    title: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ",
    desc: "لورم ایپسوم  متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
  },
];

export default function BlogSlider() {
  return (
    <div>
      <h1 className="text-center text-2xl lg:text-4xl">مقالات ما را بخوانید</h1>
      <div className="relative">
        <Swiper
          navigation={{
            nextEl: "#next-btn",
            prevEl: "#prev-btn",
          }}
          modules={[Navigation, Autoplay]}
          className="mt-5 lg:mt-10"
          loop
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },

            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {blogs.map((blog, index) => (
            <SwiperSlide key={index}>
              <BlogCard blog={blog} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="hidden xl:block">
          <i
            id="prev-btn"
            className="icon-right-open text-4xl absolute -right-16 top-1/2 z-1 text-green-600 cursor-pointer"
          ></i>
          <i
            id="next-btn"
            className="icon-left-open text-4xl absolute -left-16 top-1/2 z-1 text-green-600 cursor-pointer"
          ></i>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="bg-green-600 text-white p-3 md:px-8 rounded-md text-sm lg:text-base hover:bg-white hover:transition-colors hover:text-green-800 border-2 border-green-600 mt-5">
          مشاهده تمام مطالب بلاگ <i className="icon-eye"></i>
        </button>
      </div>
    </div>
  );
}
