import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import { UserContext } from "../../context/UserContext";

const Home = () => {
  const navigate = useNavigate();
  const { is_loggedin, setIsLoggedin } = useContext(UserContext);

  const logoutUser = () => {
    localStorage.setItem("is_loggedin", "false");
    setIsLoggedin(false);
    navigate("/login");
  };

  return (
    <div className="home-container">
      {is_loggedin ? (
        <div className="home-card">

          <div className="badge">
            ✨ Authentication Successful
          </div>

          <h1>Welcome Back 👋</h1>

          <p className="subtitle">
            Great to see you again. Your account is active and ready to use.
          </p>

          <div className="info-box">

            <div className="feature">
              <span>⚛️</span>
              <div>
                <h4>React Router</h4>
                <p>Protected navigation and page routing.</p>
              </div>
            </div>

            <div className="feature">
              <span>🔐</span>
              <div>
                <h4>Authentication</h4>
                <p>Context API + Local Storage session management.</p>
              </div>
            </div>

            <div className="feature">
              <span>⚡</span>
              <div>
                <h4>Axios & JSON Server</h4>
                <p>REST API integration for login and user data.</p>
              </div>
            </div>

          </div>

          <button className="logout-btn" onClick={logoutUser}>
            Logout →
          </button>

        </div>
      ) : (
        <div className="login-box">
          <h2>Please Login</h2>
          <p>You need to sign in to continue.</p>
        </div>
      )}
    </div>
  );
};

export default Home;