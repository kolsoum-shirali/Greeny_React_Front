import { baseUrl, defaultHeaders } from "./index.api";

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
export const fetchSingleProduct = async (productId) => {
  const response = await fetch(`${baseUrl}/products/${productId}`, {
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
