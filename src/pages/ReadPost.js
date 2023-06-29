import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { formatISO9075 } from "date-fns";
import { useNavigate, Navigate } from "react-router-dom";
import { PropagateLoader } from "react-spinners";
import { getPost, deletePost } from "../helper/apiFunction";
import blog from "../assets/images/blog.png";

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

  const { _id, title, content, createdAt, authorId } = post;
  return (
    <div style={{ background: "#423434" }}>
      <div
        class="card mb-3"
        style={{ marginLeft: "100px", marginRight: "100px" }}
      >
        <img
          class="card-img-top "
          style={{
            height: "200px",
            width: "1100px",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "5px",
          }}
          src={blog}
          alt=""
        />
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <p class="card-text">
            {user && user._id === authorId && (
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
            {user && user._id === authorId && (
              <button
                type="button"
                class="btn btn-danger mt-2"
                onClick={() => deletePost(id, setFlag)}
              >
                Delete Post
              </button>
            )}
          </p>
          <p class="card-text">{formatISO9075(new Date(createdAt))}</p>
        </div>
      </div>
    </div>
  );
}

export default ReadPost;
