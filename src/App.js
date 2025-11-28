import { Routes, Route, Link } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import ProtectedRoute from "./ProtectedRoute";
import EditProfile from "./EditProfile";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import Switch from "@mui/material/Switch";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light"
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <div style={{ minHeight: "100vh" }}>
        <nav
          style={{
            background: darkMode ? "#222" : "#007bff",
            color: "#fff",
            padding: "12px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <div style={{ display: "flex", gap: "20px" }}>
            <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>Register</Link>
            <Link to="/login" style={{ color: "#fff", textDecoration: "none" }}>Login</Link>
            <Link to="/dashboard" style={{ color: "#fff", textDecoration: "none" }}>Dashboard</Link>
            <Link to="/profile" style={{ color: "#fff", textDecoration: "none" }}>Profile</Link>
          </div>

          <div>
            Dark Mode
            <Switch
              checked={darkMode}
              onChange={() => {
                setDarkMode(!darkMode);
                document.body.classList.toggle("dark-mode");
              }}
            />
          </div>
        </nav>

        {/* Passing darkMode to children */}
        <Routes>
          <Route path="/" element={<Register darkMode={darkMode} />} />
          <Route path="/login" element={<Login darkMode={darkMode} />} />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard darkMode={darkMode} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/edit-profile"
            element={
              <ProtectedRoute>
                <EditProfile darkMode={darkMode} />
              </ProtectedRoute>
            }
          />

          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile darkMode={darkMode} />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
