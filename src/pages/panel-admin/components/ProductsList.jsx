import { useState, useEffect } from "react";
import AddProductDialog from "./AddProductDialog";
import { fetchProducts } from "../../../api/products.api";
import DescriptionDialog from "./DescriptionDialog";
import Pagination from "../../../components/common/Pagination";
import ProductsTableDesktop from "./ProductsTableDesktop";
import ProductsTableMobile from "./ProductsTableMobile";

export default function ProductsList() {
  const [isAddDialogOpen, setAddDialogOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const [searchByTitle, setSearchByTitle] = useState("");

  const openDialog = (productValue) => {
    setSelectedProduct(productValue);
    setIsDialogOpen(true);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    let isMounted = true;

    const loadProducts = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchProducts();

        if (isMounted) {
          setProducts(data);
        }
      } catch (e) {
        console.error("Error fetching products:", e.message);
        if (isMounted) {
          setError(e.message);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadProducts();
    return () => {
      isMounted = false;
    };
  }, []);

  const filteredProducts = products.filter((productItem) => {
    if (!searchByTitle.trim()) return true;

    const productTitle = String(productItem.title ?? "").toLowerCase();
    return productTitle.includes(searchByTitle.trim().toLowerCase());
  });

  // Reset to page 1 when searching
  useEffect(() => {
    setCurrentPage(1);
  }, [searchByTitle]);

  const currentItems = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    <div className="space-y-4">
      <button
        onClick={() => setAddDialogOpen(true)}
        className="bg-green-600 text-white px-6 py-1.5 rounded text-sm hover:bg-white hover:text-green-800 border-2 border-green-600 transition-all font-medium whitespace-nowrap"
      >
        افزودن محصول
      </button>
      <div>
        <input
          type="text"
          value={searchByTitle}
          onChange={(e) => setSearchByTitle(e.target.value)}
          placeholder="جستجو بر اساس عنوان محصول..."
          className="w-full lg:w-1/2  h-11 border border-gray-400/20 focus:border focus:border-green-800/50 px-3 rounded-md placeholder:text-sm text-sm bg-gray-100/50 placeholder:text-gray-500"
        />
      </div>

      <ProductsTableDesktop products={currentItems} openDialog={openDialog} />
      <ProductsTableMobile products={currentItems} openDialog={openDialog} />

      <div className="my-10">
        <Pagination
          totalItems={filteredProducts.length}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
          currentPage={currentPage}
        />
      </div>
      {selectedProduct && (
        <DescriptionDialog
          desc={selectedProduct.shortDesc}
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
        />
      )}
      <AddProductDialog
        isOpen={isAddDialogOpen}
        onClose={() => setAddDialogOpen(false)}
      />
    </div>
  );
}
