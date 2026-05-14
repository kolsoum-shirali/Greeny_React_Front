import Rating from "../../../../components/common/Rating";
import { useState } from "react";
import gril from "../../../../assets/img/gril.jpeg";
export default function SingleComment({ comment }) {
  const [productRate, setProductRate] = useState();
  const changeProductRate = (newValue) => {
    setProductRate(newValue);
  };

  return (
    <div className="relative bg-gray-100 px-10 py-5 rounded-md space-y-3">
      <p className="text-justify line-clamp-6 text-gray-700 text-base">
        {comment.desc}
      </p>
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-sm">{comment.author}</h3>
        <Rating
          rateVal={productRate}
          isReadable={false}
          onRatingChange={changeProductRate}
        />
        <div className="w-20 h-20 aspect-square rounded-full overflow-hidden">
          <img src={gril} alt="" />
        </div>
      </div>
    </div>
  );
}
