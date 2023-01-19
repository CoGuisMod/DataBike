import { Routes, Route } from "react-router-dom";

/* Page imports */
import Home from "./Home";

/* Component imports */
import Navbar from "../../components/Navbar";

const Dashboard = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Inner routes */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default Dashboard;
