import { Routes, Route } from "react-router-dom";

/* Pages imports */
import Home from "./Home";
import Products from "./Products";
import Warehouse from "./Warehouse";
import Analytics from "./Analytics";
import Bills from "./Bills";
import Users from "./Users";
import Profile from "./Profile";

/* Component imports */
import Navbar from "../../components/Navbar";

const Dashboard = () => {
  return (
    <div className="flex w-full h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Inner routes */}
      <Routes>
        <Route index path="/home" element={<Home />} />

        {/* Inventory */}
        <Route path="/products" element={<Products />} />
        <Route path="/warehouse" element={<Warehouse />} />

        {/* Sells */}
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/bills" element={<Bills />} />

        {/* Managment */}
        <Route path="/users" element={<Users />} />

        {/* Settings */}
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default Dashboard;
