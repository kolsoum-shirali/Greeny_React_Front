import { fetchAllAds } from "../../../api/ads.api";
import { useState, useEffect } from "react";
import DescriptionDialog from "./DescriptionDialog";
import Pagination from "../../../components/common/Pagination";
import AdsTableDesktop from "./AdsTableDesktop";
import AdsTableMobile from "./AdsTableMobile";

export default function AdsList() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedAds, setSelectedAds] = useState(null);

  const [ads, setAds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const [searchByCaption, setSearchByCaption] = useState("");

  const openDialog = (adsValue) => {
    setSelectedAds(adsValue);
    setIsDialogOpen(true);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    let isMounted = true;

    const loadAds = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchAllAds();

        if (isMounted) {
          setAds(data);
        }
      } catch (e) {
        console.error("Error fetching ads:", e.message);
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
    return () => {
      isMounted = false;
    };
  }, []);

  const filteredAds = ads.filter((adsItem) => {
    if (!searchByCaption.trim()) return true;

    const adsName = String(adsItem.caption ?? "").toLowerCase();
    return adsName.includes(searchByCaption.trim().toLowerCase());
  });

  // Reset to page 1 when searching
  useEffect(() => {
    setCurrentPage(1);
  }, [searchByCaption]);

  const currentItems = filteredAds.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    <div>
      <div className="mb-4">
        <input
          type="text"
          value={searchByCaption}
          onChange={(e) => setSearchByCaption(e.target.value)}
          placeholder="جستجو بر اساس عنوان آگهی..."
          className="w-full lg:w-1/2  h-11 border border-gray-400/20 focus:border focus:border-green-800/50 px-3 rounded-md placeholder:text-sm text-sm bg-gray-100/50 placeholder:text-gray-500"
        />
      </div>

      <AdsTableDesktop ads={currentItems} openDialog={openDialog} />
      <AdsTableMobile ads={currentItems} openDialog={openDialog} />

      <div className="my-10">
        <Pagination
          totalItems={filteredAds.length}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
          currentPage={currentPage}
        />
      </div>

      {selectedAds && (
        <DescriptionDialog
          desc={selectedAds.description}
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
        />
      )}
    </div>
  );
}
