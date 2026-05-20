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
      errorMessage = data.message || `HTTP error!! status: ${response.status}`;
    } catch (e) {
      errorMessage = `HTTP error!!! status: ${response.status}`;
    }
    throw new Error(errorMessage);
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
      errorMessage = data.message || `HTTP error!! status: ${response.status}`;
    } catch (e) {
      errorMessage = `HTTP error!!! status: ${response.status}`;
    }
    throw new Error(errorMessage);
  } else {
    await localStorage.setItem("token", data.data.token);
  }

  return data;
};

export const userProfile = async () => {
  const response = await fetch(`${baseUrl}/user/me`, {
    method: "GET",
    headers: {
      ...defaultHeaders,
      "x-auth-token": localStorage.getItem("token"),
    },
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
  localStorage.setItem("user", JSON.stringify(data.data));
  return data.data;
};
