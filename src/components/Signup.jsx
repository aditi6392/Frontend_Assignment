import { useState } from "react";
import "../styles/auth.css";

/**
 * Signup Component
 * - Validates user inputs
 * - Mimics account creation
 * - Redirects to success screen
 */
function Signup({ switchToLogin, onSuccess }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  // Handle signup form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Name validation
    if (name.trim().length < 3) {
      setError("Name must be at least 3 characters");
      return;
    }

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

    // Confirm password check
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // Clear error and mimic successful signup
    setError("");
    onSuccess(); // Redirect to success screen
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">Sign Up</h2>

        <form className="auth-form" onSubmit={handleSubmit}>
          {/* Name Input */}
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

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
              placeholder="Create password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Confirm Password */}
          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          {/* Error Message */}
          {error && <p className="error-text">{error}</p>}

          {/* Submit Button */}
          <button type="submit" className="auth-btn">
            Create Account
          </button>
        </form>

        {/* Switch to Login */}
        <p className="auth-switch">
          Already have an account?
          <span onClick={switchToLogin}> Login</span>
        </p>
      </div>
    </div>
  );
}

export default Signup;
