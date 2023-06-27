import React from "react";
import { Link } from "react-router-dom";
import { formatISO9075 } from "date-fns";

function Post({ _id, title, content, createdAt }) {
  return (
    <div
      style={{ marginLeft: "200px", marginTop: "30px", marginRight: "200px" }}
    >
      <Link to={`/post/${_id}`} style={{ textDecoration: "none" }}>
        <div class="card mb-3">
          <div class="card-body">
            <h5 class="card-title">{title}</h5>
            <p class="card-text">{content.substring(0, 350)}.....</p>
            <p class="card-text">
              <small class="text-muted">
                {formatISO9075(new Date(createdAt))}
              </small>
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Post;
