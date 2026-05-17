export default function Pagination({
  totalItems,
  itemsPerPage,
  onPageChange,
  currentPage,
}) {
  const pageCount = Math.ceil(totalItems / itemsPerPage);

  const getVisiblePages = () => {
    const pagesToShow = [];
    const maxPagesAroundCurrent = 1;
    const maxTotalPages = 5;

    if (pageCount <= maxTotalPages) {
      for (let i = 1; i <= pageCount; i++) {
        pagesToShow.push(i);
      }
    } else {
      pagesToShow.push(1);

      if (currentPage > 1 + maxPagesAroundCurrent) {
        pagesToShow.push("...");
      }

      const startPage = Math.max(2, currentPage - maxPagesAroundCurrent);
      const endPage = Math.min(
        pageCount - 1,
        currentPage + maxPagesAroundCurrent,
      );

      for (let i = startPage; i <= endPage; i++) {
        pagesToShow.push(i);
      }

      if (currentPage < pageCount - maxPagesAroundCurrent) {
        pagesToShow.push("...");
      }

      pagesToShow.push(pageCount);
    }

    return [...new Set(pagesToShow)];
  };

  const visiblePages = getVisiblePages();

  const handlePageClick = (page) => {
    if (
      typeof page === "number" &&
      page >= 1 &&
      page <= pageCount &&
      page !== currentPage
    ) {
      onPageChange(page);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      handlePageClick(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < pageCount) {
      handlePageClick(currentPage + 1);
    }
  };
  if (pageCount <= 1) {
    return null;
  }

  return (
    <div className="flex items-center justify-center md:gap-3">
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className={`p-2 rounded-full text-white ${currentPage === 1 ? "bg-gray-400" : "bg-green-600"} hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed`}
        aria-label="Previous page"
      >
        <i className="icon-right-big"></i>
      </button>
      <div className="flex items-center">
        {visiblePages.map((page, index) => {
          const isCurrentPage = currentPage === page;
          const isEllipsis = typeof page === "string";

          return (
            <button
              key={isEllipsis ? `ellipsis-${index}` : page}
              onClick={() => handlePageClick(page)}
              className={`rounded-full border aspect-square w-10 h-10 md:mx-1 flex items-center justify-center transition-colors duration-150
                ${
                  isCurrentPage
                    ? "font-bold text-xl bg-green-600 text-white"
                    : isEllipsis
                      ? "bg-gray-200 text-gray-500 cursor-default"
                      : "bg-white text-black hover:bg-gray-100"
                }`}
              disabled={isEllipsis}
            >
              {page}
            </button>
          );
        })}
      </div>
      <button
        onClick={handleNext}
        disabled={currentPage === pageCount}
        className={`p-2 rounded-full text-white ${currentPage === pageCount ? "bg-gray-400" : "bg-green-600"} hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed`}
        aria-label="Next page"
      >
        <i className="icon-left-big"></i>
      </button>
    </div>
  );
}
