import { baseUrl, defaultHeaders } from "./index.api";
export const addComment = async (userComment) => {
  const response = await fetch(`${baseUrl}/create/comment`, {
    method: "POST",
    headers: defaultHeaders,
    body: userComment,
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
export const fetchComments = async () => {
  const response = await fetch(`${baseUrl}/comments`, {
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
