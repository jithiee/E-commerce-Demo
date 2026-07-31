import React, { useContext } from "react";
import "./Register.css";
import { UserContext } from "../../context/UserContext";

const Register = ({
  formData,
  handleChange,
  handleSubmit,
  error,
}) => {


  
  return (
    <div className="register-container">
      <div className="register-card">
        <h1>Create Account</h1>
        <p className="subtitle">Create your account to continue.</p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              name="username"
              placeholder="Enter username"
              value={formData.username}
              onChange={handleChange}
            />
            <span className="error">{error.username}</span>
          </div>

          <div className="input-group">
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
            />
            <span className="error">{error.email}</span>
          </div>

          <div className="input-group">
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
            />
            <span className="error">{error.password}</span>
          </div>

          <button type="submit" className="register-btn">
            Register
          </button>
        </form>

        <p className="login-text">
          Already have an account?
          <a href="/login"> Login</a>
        </p>
      </div>
    </div>
  );
};

export default Register;