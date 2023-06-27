import React, { useState, useEffect } from "react";
import { getAllPosts } from "../helper/apiFunction";
import Post from "../components/Post";
import { PropagateLoader } from "react-spinners";

function ReadAllPost() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllPosts(setPosts, setLoading);
  }, []);
  if (loading) {
    return <PropagateLoader color="#36d7b7" />;
  }
  return (
    <div>
      {posts?.map((post) => (
        <Post {...post} key={post._id} />
      ))}
    </div>
  );
}

export default ReadAllPost;
