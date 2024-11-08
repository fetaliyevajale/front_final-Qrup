import axios from "axios";

const baseURL = `http://localhost:8000/api/`;

export const http = axios.create({
  baseURL: `http://localhost:8000/api/`,
});
http.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("token");
    if (!config.url.includes("/login")) {
      if (!token) {
        localStorage.clear();
        window.location.replace("/login");
        return Promise.reject({ message: "Please login to your account" });
      }
      config.headers = {
        Authorization: `Bearer ${token}`,
      };
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

http.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error && error.response.status === 401) {
      localStorage.clear();
      window.location.replace("/login");
    }

    return Promise.reject(error);
  }
);

export const fetchBlogs = () => {
  return http
    .get("admin/blogs/index")
    .then((res) => res.data)
    .catch((err) => err);
};


export const fetchProducts = () => {
    return http
      .get("admin/products")
      .then((res) => res.data)
      .catch((err) => err);
  };

