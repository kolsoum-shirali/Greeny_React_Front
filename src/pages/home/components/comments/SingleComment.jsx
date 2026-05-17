import Rating from "../../../../components/common/Rating";
export default function SingleComment({ comment }) {
  return (
    <div className="relative bg-gray-100 px-10 py-5 rounded-md space-y-3 min-h-72">
      <p className="text-justify line-clamp-4 text-gray-700 text-base">
        {comment.idea}
      </p>
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-sm">{comment.author}</h3>
        <Rating rateVal={comment.rate} isReadable={true} />
        <div className="h-24  flex justify-center ">
          <img
            src={`${process.env.REACT_APP_BASE_URL_IMG}${comment.img}`}
            alt=""
            className="object-cover rounded-full aspect-square"
          />
        </div>
      </div>
    </div>
  );
}
