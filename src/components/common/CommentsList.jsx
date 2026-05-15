export default function CommentsList({ comments }) {
  return (
    <div>
      {comments.map((comment, index) => (
        <div
          key={index}
          className="py-5  border-b border-b-gray-400/20 last:border-0"
        >
          <div className="flex gap-5 ">
            <div className="h-20  flex justify-center ">
              <img
                src={`${process.env.REACT_APP_BASE_URL_IMG}${comment.img}`}
                alt=""
                className="object-cover rounded-full outline outline-green-800 aspect-square"
              />
            </div>
            <div>
              <p className="text-base">{comment.author}</p>
              <p className="text-gray-500 text-sm mt-1">{comment.date}</p>
            </div>
          </div>
          <p className="text-sm text-gray-700 mt-3">{comment.idea}</p>
        </div>
      ))}
    </div>
  );
}
