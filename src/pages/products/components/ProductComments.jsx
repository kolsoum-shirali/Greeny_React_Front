import CommentsList from "../../../components/common/CommentsList";
export default function ProductComments({ comments }) {
  return (
    <div className="shadow-md rounded-md p-5 md:p-10 border border-gray-400/20">
      <CommentsList comments={comments} />
    </div>
  );
}
