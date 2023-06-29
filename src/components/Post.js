import React from "react";
import { Link } from "react-router-dom";
import { formatISO9075 } from "date-fns";
import blog from "../assets/images/blog.png";

function Post({ _id, title, content, createdAt, authorId }) {
  return (
    <div
      style={{
        marginLeft: "200px",
        marginTop: "30px",
        marginRight: "200px",
      }}
    >
      <Link to={`/post/${_id}`} style={{ textDecoration: "none" }}>
        <div class="card flex-row mb-3">
          <img class="card-img-left w-50" src={blog} alt="" />
          <div class="card-body">
            <h5 class="card-title">{title}</h5>
            <p class="card-text">
              {content.length > 350
                ? `${content.substring(0, 350)}.....`
                : content}
            </p>
            <p class="card-text">
              <small class="text-muted">
                {formatISO9075(new Date(createdAt))}
              </small>
            </p>
            <p>
              <b>{`Author : ${authorId.name}`}</b>
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Post;
