import { baseUrl, defaultHeaders } from "./index.api";
export const createProduct = async (product) => {
  const isFormData = product instanceof FormData;
  const response = await fetch(`${baseUrl}/create/product`, {
    method: "POST",
    headers: {
      ...(isFormData ? {} : defaultHeaders),
    },
    body: product,
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || `HTTP error! status: ${response.status}`);
  }

  return data;
};

export const fetchProducts = async () => {
  const response = await fetch(`${baseUrl}/products`, {
    method: "GET",
    headers: defaultHeaders,
  });
  if (!response.ok) {
    const errorText = await response.statusText;
    throw new Error(
      `HTTP error! status: ${response.status}, message: ${errorText}`,
    );
  }
  const { data } = await response.json();
  return data;
};
export const fetchSingleProduct = async (productCode) => {
  const response = await fetch(`${baseUrl}/products/${productCode}`, {
    method: "GET",
    headers: defaultHeaders,
  });
  if (!response.ok) {
    const errorText = await response.statusText;
    throw new Error(
      `HTTP error! status: ${response.status}, message: ${errorText}`,
    );
  }
  const { data } = await response.json();
  return data;
};
