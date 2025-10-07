import React from "react";

const Nav = () => {
  return (
    <nav>
      <div className="logo">
        <h1>Logo</h1>
      </div>
      <div className="list">
        <ul>
          <li>home</li>
          <li>about</li>
          <li>services</li>
        </ul>
      </div>
      <div className="btn">
        <button>Register</button>
        <button>Login</button>
      </div>
    </nav>
  );
};

export default Nav;
