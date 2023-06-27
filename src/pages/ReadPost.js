import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { formatISO9075 } from "date-fns";
import { useNavigate, Navigate } from "react-router-dom";
import { PropagateLoader } from "react-spinners";
import { getPost, deletePost } from "../helper/apiFunction";

function ReadPost({ user }) {
  const [post, setPost] = useState(null);
  const [flag, setFlag] = useState(false);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  const nav = useNavigate();

  useEffect(() => {
    getPost(id, setPost, setLoading);
  }, [id]);

  if (!post) return "";
  if (flag) {
    return <Navigate to={"/"} />;
  }
  if (loading) {
    return <PropagateLoader color="#36d7b7" />;
  }

  const { _id, title, content, createdAt } = post;
  return (
    <div>
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text">
          <small class="text-muted">{formatISO9075(new Date(createdAt))}</small>
        </p>
        {user && (
          <button
            type="button"
            class="btn btn-info"
            onClick={() => {
              nav(`/update/${_id}`, { state: post });
            }}
          >
            Update post
          </button>
        )}
        <div>{content}</div>
        {user && (
          <button
            type="button"
            class="btn btn-danger"
            onClick={() => deletePost(id, setFlag)}
          >
            Delete Post
          </button>
        )}
      </div>
    </div>
  );
}

export default ReadPost;
