// const DEV_URL = "http://localhost:8000";
const PROD_URL = "https://blog-management-wtsh.onrender.com";
const API_ROOT = `${PROD_URL}/api/v1`;

export const APIUrls = {
  create: () => `${API_ROOT}/post/create`,
  fetchPosts: () => `${API_ROOT}/post/`,
  fetchPost: (id) => `${API_ROOT}/post/${id}`,
  updatePost: (id) => `${API_ROOT}/post/update/${id}`,
  deletePost: (id) => `${API_ROOT}/post/delete/${id}`,
  signup: () => `${API_ROOT}/user/signup`,
  login: () => `${API_ROOT}/user/login`,
};
