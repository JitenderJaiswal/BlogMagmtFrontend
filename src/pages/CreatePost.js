import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import { createNewPost } from "../helper/apiFunction";

const CreatePost = ({ user }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  if (!user) {
    return <Navigate to={"/"} />;
  }
  if (success) {
    return (
      <>
        <Alert severity="success">Post Created Successfully!</Alert>;
        <Navigate to={"/"} />
      </>
    );
  }

  return (
    <div style={{ marginTop: "20px" }}>
      {error && <Alert severity="error">Error While Creating Post!</Alert>}
      <form
        onSubmit={(ev) =>
          createNewPost(ev, title, content, setSuccess, setError)
        }
      >
        <div class="form-group mx-sm-3">
          <input
            type="title"
            class="form-control"
            placeholder="Enter Title"
            value={title}
            onChange={(ev) => setTitle(ev.target.value)}
          />
        </div>
        <div class="form-group mx-sm-3 mt-3">
          <textarea
            style={{ height: "400px" }}
            class="form-control"
            value={content}
            placeholder="Enter Content"
            onChange={(ev) => setContent(ev.target.value)}
          />
        </div>
        <button type="submit" class="btn btn-primary mt-5">
          Create post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
