import moment from "moment-jalaali";

export default function UsersTableMobile({ users }) {
  return (
    <div className="lg:hidden space-y-8">
      {users.map((user, inx) => {
        return (
          <div key={inx} className="shadow border p-5 space-y-3">
            {/* Index Badge */}
            <div className="h-10 w-10 rounded-full bg-green-600 flex justify-center items-center text-white mx-auto font-bold">
              {inx + 1}
            </div>

            {/* Use block or normal flow instead of flex for readability */}
            <div className="text-sm">
              <span className="font-bold">نام کاربر: </span>
              <span className="break-words">{user.name}</span>
            </div>

            <div className="text-sm">
              <span className="font-bold">ایمیل: </span>
              <div className="break-all">{user.email}</div>
            </div>

            <div className="text-sm">
              <span className="font-bold">آیدی: </span>
              <div className="break-all text-gray-600">{user._id}</div>
            </div>

            <div className="text-sm">
              <span className="font-bold">تاریخ: </span>
              <span className="break-words">
                {moment(user.createdAt).format("jYYYY/jMM/jDD - HH:mm:ss")}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
