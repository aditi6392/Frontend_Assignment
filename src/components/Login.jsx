import { useState } from "react";
import "../styles/auth.css";

/**
 * Login Component
 * - Performs basic email & password validation
 * - Mimics successful login on valid input
 * - Redirects to success screen (handled by App)
 */
function Login({ switchToSignup, onSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Handle login form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Email validation
    if (!email.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }

    // Password validation
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    // Clear error and mimic successful login
    setError("");
    onSuccess(); // Redirect to success screen
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">Login</h2>

        <form className="auth-form" onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password Input */}
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Error Message */}
          {error && <p className="error-text">{error}</p>}

          {/* Submit Button */}
          <button type="submit" className="auth-btn">
            Login
          </button>
        </form>

        {/* Switch to Signup */}
        <p className="auth-switch">
          Don’t have an account?
          <span onClick={switchToSignup}> Sign up</span>
        </p>
      </div>
    </div>
  );
}

export default Login;
