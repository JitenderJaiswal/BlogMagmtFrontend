import { useState } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import jwt_decode from "jwt-decode";
import CreatePost from "./pages/CreatePost";
import ReadPost from "./pages/ReadPost";
import UpdatePost from "./pages/UpdatePost";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import ReadAllPost from "./pages/ReadAllPost";
import "./App.css";

function App() {
  const token = localStorage.getItem("token");
  const [user, setUser] = useState(token ? jwt_decode(token) : null);

  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Navbar user={user} setUser={setUser} />
          <Routes>
            <Route path="/" element={<ReadAllPost />} />
            <Route
              path="/signup"
              element={<Signup setUser={setUser} user={user} />}
            />
            <Route
              path="/login"
              element={<Login setUser={setUser} user={user} />}
            />
            <Route path="/create" element={<CreatePost user={user} />} />
            <Route path="/post/:id" element={<ReadPost user={user} />} />
            <Route path="/update/:id" element={<UpdatePost user={user} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
