import { Routes, Route } from "react-router-dom";

/* Page imports */
import Home from "./Home";

/* Component imports */
import Navbar from "../../components/Navbar";

const Dashboard = () => {
  return (
    <div className="flex w-full h-screen gap-4">
      {/* Navbar */}
      <Navbar />

      {/* Inner routes */}
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
};

export default Dashboard;
