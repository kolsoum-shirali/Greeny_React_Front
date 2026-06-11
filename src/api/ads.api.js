import { baseUrl, defaultHeaders } from "./index.api";

export const submitAds = async (userAds) => {
  // Check if it's FormData
  const isFormData = userAds instanceof FormData;

  const response = await fetch(`${baseUrl}/create/ads`, {
    method: "POST",
    headers: {
      // If it's NOT FormData, use your default headers (which probably includes JSON content-type)
      // If it IS FormData, do NOT set Content-Type header. Browser handles it.
      ...(isFormData ? {} : defaultHeaders),
    },
    body: userAds,
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || `HTTP error! status: ${response.status}`);
  }

  return data;
};
