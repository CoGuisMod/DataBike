import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* Page imports */
import Login from "./pages/Auth/Login";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Home route */}
        <Route path="/" element={<Login />} />

        {/* Dashboar route */}
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
