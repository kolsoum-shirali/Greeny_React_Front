import { useState, useEffect } from "react";
import { fetchRelatedAds } from "../../api/ads.api";
import { useSearchParams } from "react-router-dom";
import AdsCard from "./components/AdsCard";
import BreadCrumbsBanner from "../../components/common/BreadCrumbsBanner";
import Pagination from "../../components/common/Pagination";

export default function AdsPage() {
  const [messagePage, setmessagePage] = useState("");
  const [ads, setAllAds] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // 1. استیت جدید برای جستجو
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchParams] = useSearchParams();
  const typePage = searchParams.get("type");

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // 2. فیلتر کردن آگهی‌ها بر اساس caption
  const filteredAds = ads.filter((ad) =>
    ad.caption?.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  // 3. محاسبه آیتم‌های صفحه جاری از لیست فیلتر شده
  const currentItems = filteredAds.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Reset page when search or type changes
  useEffect(() => {
    setCurrentPage(1);
  }, [typePage, searchQuery]);

  useEffect(() => {
    let isMounted = true;

    const loadAds = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchRelatedAds(typePage);
        if (isMounted) setAllAds(data);
      } catch (e) {
        if (isMounted) setError(e.message);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    loadAds();

    // تنظیم عنوان صفحه
    const titles = {
      1: "تمامی آگهی های محصولات کشاورزی",
      2: "تمامی آگهی های کار و خدمات کشاورزی",
      3: "تمامی آگهی های تجهیزات و ادوات کشاورزی",
      4: "تمامی آگهی های ملک و زمین کشاورزی",
    };
    setmessagePage(titles[typePage] || "");

    return () => {
      isMounted = false;
    };
  }, [typePage]); // وابستگی به currentPage حذف شد (بهینه سازی)

  const options = [
    { title: "خانه", link: "/" },
    { title: messagePage, link: "" },
  ];

  return (
    <div>
      <BreadCrumbsBanner options={options} caption="ثبت آگهی" />

      <div className="container mx-auto p-5 mt-7 md:mt-16 space-y-10">
        <div className="w-full md:w-1/2">
          <input
            type="text"
            placeholder="جستجو بر اساس عنوان آگهی‌ها..."
            className="w-full h-11 border border-gray-400/20 focus:border focus:border-green-800/50 px-3 rounded-md placeholder:text-sm text-sm bg-gray-100/50 placeholder:text-gray-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        {loading ? (
          <div className="text-center">در حال بارگذاری...</div>
        ) : (
          <div className="grid grid-cols-3 gap-5">
            {currentItems.length > 0 ? (
              currentItems.map((item, index) => (
                <div
                  key={item.id || index}
                  className="col-span-3 lg:col-span-1"
                >
                  <AdsCard ads={item} />
                </div>
              ))
            ) : (
              <p className="col-span-3 text-center text-gray-500">
                آگهی یافت نشد.
              </p>
            )}
          </div>
        )}

        <div className="my-10">
          <Pagination
            totalItems={filteredAds.length} // استفاده از تعداد آیتم‌های فیلتر شده
            itemsPerPage={itemsPerPage}
            onPageChange={handlePageChange}
            currentPage={currentPage}
          />
        </div>
      </div>
    </div>
  );
}
