import "../styles/auth.css";

/**
 * Success Component
 * Displays success message after login or signup
 */
function Success({ message }) {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">{message}</h2>
        <p style={{ textAlign: "center", marginTop: "10px", color: "#555" }}>
          This is a frontend-only success screen.
        </p>
      </div>
    </div>
  );
}

export default Success;
