import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Register</Link> | 
        <Link to="/login">Login</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
