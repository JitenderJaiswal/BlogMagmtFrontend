import jwt_decode from "jwt-decode";
import { getFormBody, getAuthTokenFromLocalStorage } from "./utils";
import { APIUrls } from "./urls";

export async function createNewPost(ev, title, content, setSuccess, setError) {
  ev.preventDefault();

  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Bearer ${getAuthTokenFromLocalStorage()}`,
    },

    body: getFormBody({ title, content }),
  };
  const response = await fetch(APIUrls.create(), options);
  const data = await response.json();

  if (data.success) {
    setSuccess(true);

    return;
  }
  setError(true);
}
export async function getAllPosts(setPosts, setLoading) {
  const response = await fetch(APIUrls.fetchPosts());
  const data = await response.json();
  if (data.success) {
    setPosts(data.data.posts);
    setLoading(false);
  }
}

export async function getPost(id, setPost, setLoading) {
  const response = await fetch(APIUrls.fetchPost(id));
  const data = await response.json();
  if (data.success) {
    setPost(data.data.post);
    setLoading(false);
  }
}

export async function updatePost(ev, id, title, content, setSuccess, setError) {
  ev.preventDefault();
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Bearer ${getAuthTokenFromLocalStorage()}`,
    },

    body: getFormBody({ title, content }),
  };
  const response = await fetch(APIUrls.updatePost(id), options);
  const data = await response.json();
  if (data.success) {
    setSuccess(true);
    return;
  }
  setError(true);
}

export async function deletePost(id, setFlag) {
  const options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Bearer ${getAuthTokenFromLocalStorage()}`,
    },
  };
  const response = await fetch(APIUrls.deletePost(id), options);
  const data = await response.json();
  if (data.success) {
    setFlag(true);
  }
}

export async function register(
  ev,
  name,
  email,
  password,
  confirmPassword,
  setSuccess,
  setError,
  setUser,
  setCheckPassword
) {
  ev.preventDefault();
  if (password !== confirmPassword) {
    setCheckPassword(true);
    return;
  }
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: getFormBody({ name, email, password }),
  };
  const response = await fetch(APIUrls.signup(), options);
  const data = await response.json();

  if (data.success) {
    localStorage.setItem("token", data.data.token);
    setUser(jwt_decode(data.data.token));
    setSuccess(true);
    return;
  }
  setError(true);
}

export async function login(
  ev,
  email,
  password,
  setSuccess,
  setError,
  setUser
) {
  ev.preventDefault();
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: getFormBody({ email, password }),
  };
  const response = await fetch(APIUrls.login(), options);
  const data = await response.json();

  if (data.success) {
    localStorage.setItem("token", data.data.token);
    setUser(jwt_decode(data.data.token));
    setSuccess(true);
    return;
  }
  setError(true);
}
