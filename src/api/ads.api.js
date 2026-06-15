import { baseUrl, defaultHeaders } from "./index.api";

export const submitAds = async (userAds) => {
  const isFormData = userAds instanceof FormData;
  const response = await fetch(`${baseUrl}/create/ads`, {
    method: "POST",
    headers: {
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
export const fetchRelatedAds = async (typePage) => {
  const response = await fetch(`${baseUrl}/ads/${typePage}`, {
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

export const fetchAllAds = async () => {
  const response = await fetch(`${baseUrl}/ads`, {
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
