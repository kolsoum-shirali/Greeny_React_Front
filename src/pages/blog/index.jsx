import BreadCrumbsBanner from "../../components/common/BreadCrumbsBanner";
import BlogCard from "./components/BlogCard";
import blog1 from "../../assets/img/Products/1.webp";
import blog2 from "../../assets/img/Products/2.jpg";
import blog3 from "../../assets/img/Products/3.jpg";
import blog4 from "../../assets/img/Products/4.jpg";
import blog5 from "../../assets/img/Products/5.jpeg";
import blog6 from "../../assets/img/Products/6.jpg";
import blog7 from "../../assets/img/Products/7.jpg";
import blog8 from "../../assets/img/Products/8.jpg";

const options = [
  { title: "خانه", link: "/" },
  { title: "وبلاگ", link: "" },
];
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

export default function BlogPage() {
  return (
    <div>
      <BreadCrumbsBanner options={options} caption="وبلاگ" />
      <div className="container mx-auto p-5 mt-7 md:mt-16 space-y-10 lg:space-y-32">
        <div className="grid grid-cols-12 md:gap-10">
          <div className="col-span-12 md:col-span-8 space-y-7">
            {blogs.map((blog, index) => (
              <BlogCard blog={blog} key={index} />
            ))}
          </div>
          <div className="col-span-12 md:col-span-4"></div>
        </div>
      </div>
    </div>
  );
}
