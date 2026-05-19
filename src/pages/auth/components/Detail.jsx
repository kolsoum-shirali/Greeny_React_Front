import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";

export default function Detail({ type }) {
  return (
    <div className="space-y-5">
      <div className="shadow-md border border-gray-400/20 p-5 rounded-md">
        <p className="text-center text-sm">
          {type === 1 ? "از قبل عضو هستید؟" : "هنوز ثبت نام نکرده اید؟"}
          <Link
            to={type === 1 ? "/login" : "/register"}
            className="text-green-800 font-semibold"
          >
            {type === 1 ? "وارد شوید" : "ثبت نام کنید."}
          </Link>
        </p>
      </div>
      <div className="flex items-center justify-center gap-2 text-sm text-green-800">
        <p>GREENY</p>
        <Divider orientation="vertical" flexItem />
        <div>
          <span>CopyRight by</span>
          <i className="icon-copyright"></i>
        </div>
      </div>
    </div>
  );
}
