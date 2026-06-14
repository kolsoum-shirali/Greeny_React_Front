import moment from "moment-jalaali";
const heading = [
  { number: "ردیف" },
  { name: "نام کاربر" },
  { email: "ایمیل" },
  { _id: "آیدی" },
  { createdAt: "تاریخ ثبت نام" },
];

export default function UsersTableDesktop({ users }) {
  return (
    <div className="hidden lg:block overflow-x-auto">
      <table className="w-full border border-gray-300 rounded-md text-right">
        <thead>
          <tr>
            {heading.map((item, index) => {
              const key = Object.keys(item)[0];
              return (
                <th key={index} className="border p-3 bg-green-100/50">
                  {item[key]}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {users.map((user, inx) => (
            <tr key={inx} className="hover:bg-gray-50 text-sm">
              <td className="border border-gray-300 px-4 py-2">{inx + 1}</td>
              <td className="border border-gray-300 px-4 py-2">{user.name}</td>
              <td className="border border-gray-300 px-4 py-2">{user.email}</td>
              <td className="border border-gray-300 px-4 py-2">{user._id}</td>

              <td className="border border-gray-300 px-4 py-2">
                {moment(user.createdAt).format("jYYYY/jMM/jDD - HH:mm:ss")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
