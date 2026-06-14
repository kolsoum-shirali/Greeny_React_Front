import { useState, useEffect } from "react";
import { fetchAllAds } from "../../api/ads.api";
import { useSearchParams } from "react-router-dom";
import AdsCard from "./components/AdsCard";
import BreadCrumbsBanner from "../../components/common/BreadCrumbsBanner";

export default function AdsPage() {
  const [messagePage, setmessagePage] = useState("");
  const [ads, setAllAds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchParams] = useSearchParams();
  const typePage = searchParams.get("type");
  const options = [
  { title: "خانه", link: "/" },
  { title: messagePage, link: "" },
];

  useEffect(() => {
    let isMounted = true;
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    const loadAds = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchAllAds(typePage);
        if (isMounted) {
          setAllAds(data);
        }
      } catch (e) {
        console.error("Error fetching ads! ", e.message);
        if (isMounted) {
          setError(e.message);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadAds();
    switch (typePage) {
      case "1":
        setmessagePage("تمامی آگهی های محصولات کشاورزی");
        break;
      case "2":
        setmessagePage("تمامی آگهی های کار و خدمات کشاورزی");
        break;
      case "3":
        setmessagePage("تمامی آگهی های تجهیزات و ادوات کشاورزی");
        break;
      case "4":
        setmessagePage("تمامی آگهی های ملک و زمین کشاورزی");
        break;
    }
    return () => {
      isMounted = false;
    };
  }, [searchParams]);
  return (
    <div>
      <BreadCrumbsBanner options={options} caption="ثبت آگهی" />
      <div className="container mx-auto p-5 mt-7 md:mt-16 space-y-10 lg:space-y-32">
        <div className="grid grid-cols-3 gap-5 ">
          {ads.map((item, index) => (
            <div key={index} className="col-span-1">
              <AdsCard ads={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
