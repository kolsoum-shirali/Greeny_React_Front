import { baseUrl, defaultHeaders } from "./index.api";
export const fetchAllUsers = async () => {
  const response = await fetch(`${baseUrl}/user/allUser`, {
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
