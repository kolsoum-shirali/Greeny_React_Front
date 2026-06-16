import { baseUrl, defaultHeaders } from "./index.api";
export const createBlog = async (blog) => {
  const isFormData = blog instanceof FormData;
  const response = await fetch(`${baseUrl}/create/blog`, {
    method: "POST",
    headers: {
      ...(isFormData ? {} : defaultHeaders),
    },
    body: blog,
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || `HTTP error! status: ${response.status}`);
  }

  return data;
};
export const fetchBlogs = async () => {
  const response = await fetch(`${baseUrl}/blogs`, {
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
export const fetchSingleBlog = async (blogNum) => {
  const response = await fetch(`${baseUrl}/blogs/${blogNum}`, {
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
