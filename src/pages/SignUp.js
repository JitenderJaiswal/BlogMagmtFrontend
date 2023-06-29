import React, { useState } from "react";
import { Navigate } from "react-router";
import { Alert } from "@mui/material";
import { register } from "../helper/apiFunction";

function SignUp(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const [checkPassword, setCheckPassword] = useState(false);
  const { setUser, user } = props;
  if (success || user) {
    return <Navigate to={"/"} />;
  }
  return (
    <div>
      <form
        className="login-form"
        onSubmit={(ev) =>
          register(
            ev,
            name,
            email,
            password,
            confirmPassword,
            setSuccess,
            setError,
            setUser,
            setCheckPassword
          )
        }
      >
        <span className="login-signup-header">SignUp</span>
        {checkPassword && (
          <Alert severity="error">
            Password and Confirm Password not match!
          </Alert>
        )}
        {error && <Alert severity="error">Error While Sign Up User!</Alert>}

        <div className="field">
          <input
            type="text"
            placeholder="username"
            value={name}
            required
            onChange={(ev) => setName(ev.target.value)}
          />
        </div>
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
            value={password}
            required
            onChange={(ev) => setPassword(ev.target.value)}
          />
        </div>
        <div className="field">
          <input
            type="password"
            placeholder="confirm password"
            value={confirmPassword}
            required
            onChange={(ev) => setConfirmPassword(ev.target.value)}
          />
        </div>
        <div className="field">
          <button>SignUp</button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
