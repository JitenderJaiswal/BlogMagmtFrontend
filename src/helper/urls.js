const API_ROOT = "http://localhost:8000/api/v1";

export const APIUrls = {
  create: () => `${API_ROOT}/post/create`,
  fetchPosts: (page = 1, limit = 5) =>
    `${API_ROOT}/post?page=${page}&limit=${limit}`,
  fetchPost: (id) => `${API_ROOT}/post/${id}`,
  updatePost: (id) => `${API_ROOT}/post/update/${id}`,
  deletePost: (id) => `${API_ROOT}/post/delete/${id}`,
  signup: () => `${API_ROOT}/user/signup`,
  login: () => `${API_ROOT}/user/login`,
};
