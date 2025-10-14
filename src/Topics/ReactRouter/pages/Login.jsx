import React, { useState } from "react";

const Login = () => {
  const [loginUser, setLoginUser] = useState({
    email: "",
    password: "",
  });

  const handleForm = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("newUser"));

    if(users.email===loginUser.email && users.password===loginUser.password){
      alert("Login Succefull")
      setLoginUser({
        email:"",
        password:""
      })
    }else{
      alert("Invalid User Credentials")
      setLoginUser({
        email:"",
        password:""
      })
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;

    setLoginUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleForm}>
        <h2>Login</h2>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            onChange={handleInput}
            value={loginUser.email}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            onChange={handleInput}
            value={loginUser.password}
          />
        </div>

        <button type="submit" className="btns">
          Login
        </button>

        <p className="register-link">
          Don't have an account? <a href="/register">Register</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
