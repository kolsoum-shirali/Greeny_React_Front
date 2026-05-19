import { baseUrl, defaultHeaders } from "./index.api";

export const register = async (userInfo) => {
  const response = await fetch(`${baseUrl}/auth/register`, {
    method: "POST",
    headers: defaultHeaders,
    body: userInfo,
  });
  const data = await response.json();
  if (!response.ok) {
    let errorMessage = "An unknown error occurred.";
    try {
      const errorData = await response.json();
      errorMessage =
        errorData.message || `HTTP error!! status: ${response.status}`;
    } catch (e) {
      errorMessage = `HTTP error!!! status: ${response.status}`;
    }
    throw new Error(data.message);
  }

  return data;
};

export const login = async (userInfo) => {
  const response = await fetch(`${baseUrl}/auth/login`, {
    method: "POST",
    headers: defaultHeaders,
    body: userInfo,
  });
  const data = await response.json();
  if (!response.ok) {
    let errorMessage = "An unknown error occurred.";
    try {
      const errorData = await response.json();
      errorMessage =
        errorData.message || `HTTP error!! status: ${response.status}`;
    } catch (e) {
      errorMessage = `HTTP error!!! status: ${response.status}`;
    }
    throw new Error(data.message);
  }

  return data;
};
