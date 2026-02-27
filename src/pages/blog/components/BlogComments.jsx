import author from "../../../assets/img/gril.jpeg";
const comments = [
  {
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
    author: "مهتاب سلامی",
  },
  {
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است  چاپگرها و متون بلکه روزنامه و چاپگرها و متون بلکه روزنامه و  چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
    author: "مهتاب سلامی",
  },
  {
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
    author: "مهتاب سلامی",
  },
  {
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است  چاپگرها و متون بلکه روزنامه و چاپگرها و متون بلکه روزنامه و  چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
    author: "مهتاب سلامی",
  },
];

export default function BlogComments() {
  return (
    <div>
      {comments.map((comment, index) => (
        <div key={index} className="py-5  border-b border-b-gray-400/20 last:border-0">
          <div className="flex gap-5 ">
            <div className="h-20  flex justify-center ">
              <img
                src={author}
                alt=""
                className="object-cover rounded-full outline outline-green-800 aspect-square"
              />
            </div>
            <div>
              <p className="text-base">{comment.author}</p>
              <p className="text-gray-500 text-sm mt-1">9 اسفند 1404</p>
            </div>
          </div>
          <p className="text-sm text-gray-700 mt-3">{comment.desc}</p>
        </div>
      ))}
    </div>
  );
}
