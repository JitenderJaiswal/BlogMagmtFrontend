import React, { useState } from "react";
import { Navigate } from "react-router";
import { Alert } from "@mui/material";
import { login } from "../helper/apiFunction";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const { setUser } = props;
  if (success) {
    return <Navigate to={"/"} />;
  }
  return (
    <div>
      <form
        className="login-form"
        onSubmit={(ev) =>
          login(ev, email, password, setSuccess, setError, setUser)
        }
      >
        <span className="login-signup-header">Login</span>
        {error && <Alert severity="error">Error While Log In User!</Alert>}
        <div className="field">
          <input
            type="email"
            placeholder="email"
            value={email}
            required
            onChange={(ev) => setEmail(ev.target.value)}
          />
        </div>
        <div className="field">
          <input
            type="password"
            placeholder="password"
            required
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
          />
        </div>
        <div className="field">
          <button>Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
