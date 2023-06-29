import { useState } from "react";
import { Navigate, useParams, useLocation } from "react-router-dom";
import Alert from "@mui/material/Alert";
import { updatePost } from "../helper/apiFunction";

function UpdatePost({ user }) {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const { state } = useLocation();
  if (!user) {
    return <Navigate to={"/"} />;
  }
  if (success) {
    return (
      <>
        <Alert severity="success">Post Updated Successfully!</Alert>;
        <Navigate to={"/post/" + id} />
      </>
    );
  }

  return (
    <div style={{ marginTop: "20px" }}>
      {error && <Alert severity="error">Error While Updating Post!</Alert>}
      <form
        onSubmit={(ev) =>
          updatePost(ev, id, title, content, setSuccess, setError)
        }
      >
        <div class="form-group mx-sm-3">
          <input
            type="title"
            class="form-control"
            placeholder="Enter Title"
            value={title ? title : state.title}
            onChange={(ev) => setTitle(ev.target.value)}
          />
        </div>
        <div class="form-group mx-sm-3 mt-3">
          <textarea
            style={{ height: "400px" }}
            class="form-control"
            onChange={(ev) => setContent(ev.target.value)}
            value={content ? content : state.content}
            placeholder="Enter Content"
          />
        </div>
        <button type="submit" class="btn btn-primary mt-2">
          Submit Post
        </button>
      </form>
    </div>
  );
}

export default UpdatePost;
