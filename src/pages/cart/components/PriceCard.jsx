import { Fragment } from "react";
export default function PriceCard({ priceListItems }) {
  return (
    <div className="bg-gray-100/50 p-5 rounded-md space-y-4">
      <h3 className="font-bold">جمع کل سبد خرید</h3>
      <div className="space-y-3">
        {priceListItems.map((item, index) => (
          <Fragment key={index}>
            <div className="grid grid-cols-2 gap-4">
              <p className="col-span-2 md:col-span-1">{item.title}</p>
              <p className="col-span-2 md:col-span-1">
                {item.value.toLocaleString("fa-IR")}
                <span className="text-green-600 font-semibold ms-1">تومان</span>
              </p>
            </div>
            {index < priceListItems.length - 1 && <hr className="my-2" />}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
