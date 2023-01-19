import { NavLink } from "react-router-dom";

/* Icons import */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBicycle,
  faBox,
  faChartLine,
  faHouse,
  faReceipt,
  faRightFromBracket,
  faUser,
  faWarehouse,
} from "@fortawesome/free-solid-svg-icons";

const NavMobile = () => {
  return (
    <div className="flex flex-col items-center h-full">
      {/* Title */}
      <div className="flex flex-col justify-center items-center gap-1">
        <FontAwesomeIcon icon={faBicycle} className="text-3xl text-red-500" />
      </div>

      <div className="py-4" />

      <p className="text-slate-50/50 text-center leading-none">-</p>

      {/* Navigation */}
      <nav className="flex flex-col w-full">
        <NavLink
          to="/dashboard/home"
          className={({ isActive }) =>
            (isActive ? "bg-red-500 font-medium" : "hover:text-slate-50/50") +
            " flex justify-center items-center rounded-md p-1 transition-colors duration-200 ease-in-out"
          }
        >
          <FontAwesomeIcon icon={faHouse} className="text-2xl" />
        </NavLink>

        {/* Inventory */}
        <div className="py-2" />

        <p className="text-slate-50/50 text-center leading-none">-</p>

        <NavLink
          to="/dashboard/products"
          className={({ isActive }) =>
            (isActive ? "bg-red-500 font-medium" : "hover:text-slate-50/50") +
            " flex justify-center items-center rounded-md p-1 transition-colors duration-200 ease-in-out"
          }
        >
          <FontAwesomeIcon icon={faBox} className="text-2xl" />
        </NavLink>

        <NavLink
          to="/dashboard/warehouse"
          className={({ isActive }) =>
            (isActive ? "bg-red-500 font-medium" : "hover:text-slate-50/50") +
            " flex justify-center items-center rounded-md p-1 transition-colors duration-200 ease-in-out"
          }
        >
          <FontAwesomeIcon icon={faWarehouse} className="text-2xl" />
        </NavLink>

        {/* Sales */}
        <div className="py-2" />

        <p className="text-slate-50/50 text-center leading-none">-</p>

        <NavLink
          to="/dashboard/analytics"
          className={({ isActive }) =>
            (isActive ? "bg-red-500 font-medium" : "hover:text-slate-50/50") +
            " flex justify-center items-center rounded-md p-1 transition-colors duration-200 ease-in-out"
          }
        >
          <FontAwesomeIcon icon={faChartLine} className="text-2xl" />
        </NavLink>

        <NavLink
          to="/dashboard/bills"
          className={({ isActive }) =>
            (isActive ? "bg-red-500 font-medium" : "hover:text-slate-50/50") +
            " flex justify-center items-center rounded-md p-1 transition-colors duration-200 ease-in-out"
          }
        >
          <FontAwesomeIcon icon={faReceipt} className="text-2xl" />
        </NavLink>

        {/* Users */}
        <div className="py-2" />

        <p className="text-slate-50/50 text-center leading-none">-</p>

        <NavLink
          to="/dashboard/users"
          className={({ isActive }) =>
            (isActive ? "bg-red-500 font-medium" : "hover:text-slate-50/50") +
            " flex justify-center items-center rounded-md p-1 transition-colors duration-200 ease-in-out"
          }
        >
          <FontAwesomeIcon icon={faUser} className="text-2xl" />
        </NavLink>
      </nav>

      {/* Profile and logout */}
      <div className="flex flex-col gap-4 border rounded-full mt-auto p-1">
        {/* Profile page */}
        <NavLink
          to="/dashboard/profile"
          className={({ isActive }) =>
            (isActive ? "bg-red-500 font-medium" : "hover:text-slate-50/50") +
            " flex justify-center items-center rounded-full p-2 transition-colors duration-200 ease-in-out"
          }
        >
          <FontAwesomeIcon icon={faUser} />
        </NavLink>

        {/* Logout button */}
        <button className="hover:text-red-500">
          <FontAwesomeIcon icon={faRightFromBracket} />
        </button>
      </div>
    </div>
  );
};

export default NavMobile;
