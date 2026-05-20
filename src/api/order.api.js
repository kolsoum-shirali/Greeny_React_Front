import { baseUrl, defaultHeaders } from "./index.api";

export const submitOrder = async (userOrder) => {
  const response = await fetch(`${baseUrl}/order`, {
    method: "POST",
    headers: defaultHeaders,
    body: userOrder,
  });
  const data = await response.json();
  if (!response.ok) {
    let errorMessage = "An unknown error occurred.";
    try {
      errorMessage = data.message || `HTTP error!! status: ${response.status}`;
    } catch (e) {
      errorMessage = `HTTP error!!! status: ${response.status}`;
    }
    throw new Error(errorMessage);
  }

  return data;
};