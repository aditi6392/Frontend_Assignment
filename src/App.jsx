import { useState } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Success from "./components/Success";

/**
 * App Component
 * Handles authentication flow and success screens
 */
function App() {
  const [page, setPage] = useState("login");

  return (
    <>
      {page === "login" && (
        <Login
          switchToSignup={() => setPage("signup")}
          onSuccess={() => setPage("loginSuccess")}
        />
      )}

      {page === "signup" && (
        <Signup
          switchToLogin={() => setPage("login")}
          onSuccess={() => setPage("signupSuccess")}
        />
      )}

      {page === "loginSuccess" && <Success message="Login Successful ✅" />}

      {page === "signupSuccess" && <Success message="Signup Successful 🎉" />}
    </>
  );
}

export default App;
