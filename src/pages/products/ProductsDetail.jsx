import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import ContactForm from "../../components/common/ContactForm";
import Rating from "../../components/common/Rating";
import BreadCrumbsBanner from "../../components/common/BreadCrumbsBanner";
import ProductComments from "./components/ProductComments";
import ProductsInfo from "./components/ProductsInfo";
import Product from "./components/Product";
import { fetchSingleProduct } from "../../api/products.api";

export default function ProductsDetail() {
  const { id: productId } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const options = [
    { title: "خانه", link: "/" },
    { title: "فروشگاه", link: "/products" },
    { title: product.title || "", link: "" },
  ];

  useEffect(() => {
    let isMounted = true;

    const loadProduct = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchSingleProduct(productId);

        if (isMounted) {
          setProduct(data);
        }
      } catch (e) {
        console.error("Error fetching product:", e.message);
        if (isMounted) {
          setError(e.message);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadProduct();
    return () => {
      isMounted = false;
    };
  }, []);
  return (
    <div>
      <BreadCrumbsBanner options={options} caption={product.title} />
      <div className="container mx-auto p-5 mt-7 md:mt-16 space-y-10 lg:space-y-16">
        <Product product={product} />
        <ProductsInfo product={product} />
        {product.comments && <ProductComments comments={product?.comments} />}
        <div className="shadow-md rounded-md p-5 md:p-10 border border-gray-400/20">
          <h3 className="text-lg font-semibold mb-5">نظر خود را اضافه کنید</h3>
          <div className="flex justify-center mb-5">
            <Rating />
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
