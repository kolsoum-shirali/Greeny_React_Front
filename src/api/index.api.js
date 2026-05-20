
const baseUrl = process.env.REACT_APP_BASE_URL;

const defaultHeaders = {
  "Content-Type": "application/json",
  
  // You can add other global headers here, e.g., Authorization: `Bearer ${token}`
};

export { baseUrl, defaultHeaders };