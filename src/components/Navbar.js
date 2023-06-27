import React from "react";
import { Link } from "react-router-dom";

function Navbar({ user, setUser }) {
  const logOut = () => {
    localStorage.removeItem("token");
    setUser(null);
  };
  return (
    <div className="nav">
      <div className="left-div">
        <h1>
          <Link to="/" style={{ textDecoration: "none" }}>
            BLOG
          </Link>
        </h1>
      </div>
      <div className="nav-links" style={{ display: "flex" }}>
        {user ? (
          <>
            <div className="right-nav" style={{ marginRight: "10px" }}>
              {user.name}
            </div>
            <div style={{ marginRight: "10px" }}>
              <Link to="/create" style={{ textDecoration: "none" }}>
                Create Post
              </Link>
            </div>
            <div onClick={logOut}>Logout</div>
          </>
        ) : (
          <>
            <div style={{ marginRight: "10px" }}>
              <Link to="/login" style={{ textDecoration: "none" }}>
                Login
              </Link>
            </div>
            <div>
              <Link to="/signup" style={{ textDecoration: "none" }}>
                Signup
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
