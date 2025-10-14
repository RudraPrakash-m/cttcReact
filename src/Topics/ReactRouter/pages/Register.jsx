import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {

  const [user, setUser] = useState({
    name:"",
    email:"",
    password:"",
    course:""
  })

  const navigate = useNavigate()


  const handleForm=(e)=>{
    e.preventDefault()

    localStorage.setItem("newUser",JSON.stringify(user))

    setUser({
    name:"",
    email:"",
    password:"",
    course:""
  })

  navigate("/login")
    
  }

  const handleInput=(e)=>{
    const {name, value} = e.target
    setUser((prev)=>({
      ...prev,
      [name]:value
    }))
  }



  return (
    <div className="registration-container">
      <form className="registration-form" onSubmit={handleForm}>
        <h2>Registration Form</h2>

        <label htmlFor="fullname">Full Name</label>
        <input
          type="text"
          id="fullname"
          name="name"
          placeholder="Enter your full name"
          onChange={handleInput}
          value={user.name}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          onChange={handleInput}
          value={user.email}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          onChange={handleInput}
          value={user.password}
        />

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Confirm your password"
        />

        <label htmlFor="course">Course / Stream</label>
        <select id="course" name="course" onChange={handleInput}>
          <option value="">-- Select Course --</option>
          <option value="mern">MERN</option>
          <option value="python">Python</option>
          <option value="java">Java</option>
        </select>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
