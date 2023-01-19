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

const NavDesktop = () => {
  return (
    <div className="flex flex-col items-center h-full">
      {/* Title */}
      <div className="flex flex-col justify-center items-center gap-1">
        <FontAwesomeIcon icon={faBicycle} className="text-3xl text-red-500" />
        <h1 className="text-xl font-bold">DataBike</h1>
      </div>

      <div className="py-4" />

      {/* Navigation */}
      <nav className="flex flex-col w-full">
        <NavLink
          to="/dashboard/home"
          className={({ isActive }) =>
            (isActive ? "bg-red-500 font-medium" : "hover:text-slate-50/50") +
            " flex justify-start items-center gap-1 rounded-md p-1 transition-colors duration-200 ease-in-out"
          }
        >
          <FontAwesomeIcon icon={faHouse} className="text-lg" /> Inicio
        </NavLink>

        {/* Inventory */}
        <div className="py-2" />

        <span className="text-slate-50/50">Inventario</span>

        <NavLink
          to="/dashboard/products"
          className={({ isActive }) =>
            (isActive ? "bg-red-500 font-medium" : "hover:text-slate-50/50") +
            " flex justify-start items-center gap-1 rounded-md p-1 transition-colors duration-200 ease-in-out"
          }
        >
          <FontAwesomeIcon icon={faBox} className="text-lg" /> Productos
        </NavLink>

        <NavLink
          to="/dashboard/warehouse"
          className={({ isActive }) =>
            (isActive ? "bg-red-500 font-medium" : "hover:text-slate-50/50") +
            " flex justify-start items-center gap-1 rounded-md p-1 transition-colors duration-200 ease-in-out"
          }
        >
          <FontAwesomeIcon icon={faWarehouse} className="text-lg" /> Bodegas
        </NavLink>

        {/* Sales */}
        <div className="py-2" />

        <span className="text-slate-50/50">Ventas</span>

        <NavLink
          to="/dashboard/analytics"
          className={({ isActive }) =>
            (isActive ? "bg-red-500 font-medium" : "hover:text-slate-50/50") +
            " flex justify-start items-center gap-1 rounded-md p-1 transition-colors duration-200 ease-in-out"
          }
        >
          <FontAwesomeIcon icon={faChartLine} className="text-lg" />{" "}
          Estadisticas
        </NavLink>

        <NavLink
          to="/dashboard/bills"
          className={({ isActive }) =>
            (isActive ? "bg-red-500 font-medium" : "hover:text-slate-50/50") +
            " flex justify-start items-center gap-1 rounded-md p-1 transition-colors duration-200 ease-in-out"
          }
        >
          <FontAwesomeIcon icon={faReceipt} className="text-lg" />
          <span>Facturas</span>
        </NavLink>

        {/* Users */}
        <div className="py-2" />

        <span className="text-slate-50/50">Administracion</span>

        <NavLink
          to="/dashboard/users"
          className={({ isActive }) =>
            (isActive ? "bg-red-500 font-medium" : "hover:text-slate-50/50") +
            " flex justify-start items-center gap-1 rounded-md p-1 transition-colors duration-200 ease-in-out"
          }
        >
          <FontAwesomeIcon icon={faUser} className="text-lg" /> Usuarios
        </NavLink>
      </nav>

      {/* Profile and logout */}
      <div className="flex gap-4 border rounded-full mt-auto px-2 py-1">
        {/* Profile page */}
        <NavLink
          to="/dashboard/profile"
          className={({ isActive }) =>
            (isActive ? "bg-red-500 font-medium" : "hover:text-slate-50/50") +
            " flex justify-start items-center gap-1 rounded-full p-2 transition-colors duration-200 ease-in-out"
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

export default NavDesktop;
