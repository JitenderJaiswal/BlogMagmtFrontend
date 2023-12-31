import React from "react";
import { Link } from "react-router-dom";

function Navbar({ user, setUser }) {
  const logOut = () => {
    localStorage.removeItem("token");
    setUser(null);
  };
  console.log("user", user);
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
              <h4>{user.name}</h4>
            </div>
            <div style={{ marginRight: "10px" }}>
              <Link to="/create" style={{ textDecoration: "none" }}>
                Create Post
              </Link>
            </div>
            <div onClick={logOut} style={{ color: "red" }}>
              Logout
            </div>
          </>
        ) : (
          <>
            <div style={{ marginRight: "10px" }}>
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "green" }}
              >
                Login
              </Link>
            </div>
            <div>
              <Link
                to="/signup"
                style={{ textDecoration: "none", color: "green" }}
              >
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
