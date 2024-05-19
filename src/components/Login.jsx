// Login.jsx
import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { toast, ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const handleInput = (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };

  const getData = () => {
    const data = { email, password };
    axios
      .post("https://drive-together-backend.onrender.com/login", data)
      .then((response) => {
        if (response.data.status === false) {
          toast.error("Invalid login credentials", {
            transition: Slide,
            className: "custom-toast",
          });
        } else {
          sessionStorage.setItem("username", response.data.user);
          sessionStorage.setItem("email", response.data.email);
          sessionStorage.setItem("phone", response.data.phone);
          localStorage.setItem("token", response.data.token);
          toast.success("Login successful!", {
            transition: Slide,
            className: "custom-toast",
          });
          history.push("/home");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Email"
        name="email"
        onChange={handleInput}
        autoComplete="off"
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        onChange={handleInput}
        autoComplete="off"
      />
      <button onClick={getData}>Log in</button>
      <ToastContainer />
    </div>
  );
};

export default Login;
