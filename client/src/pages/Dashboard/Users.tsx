import { useState } from "react";

/* User forms */
import AddUserForm from "../../components/UserForms/AddUserForm";
import EditUserForm from "../../components/UserForms/EditUserForm";

/* Icons imports */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";

const users = [
  {
    first_name: "Camilo",
    last_name: "Millan",
    email: "camilo.admin@databike",
    password: "adminpass",
    role: "admin",
  },
  {
    first_name: "Andres",
    last_name: "Sierra",
    email: "andres.cajero@databike",
    password: "cashierpass",
    role: "cashier",
  },
];

const Users = () => {
  const [currentUser, setCurrentUser] = useState<any>(null);

  return (
    <section className="grid grid-cols-12 gap-4 w-full h-full pl-24 md:pl-8 pr-4 py-4">
      {/* Left section */}
      <div className="col-span-8">
        {/* Header */}
        <div className="flex justify-between items-center w-full">
          {/* Title */}
          <div>
            <h1 className="font-bold text-xl">Usuarios</h1>
          </div>

          {/* Search bar */}
          <div className="relative flex items-center">
            <input
              type="text"
              className="rounded-full text-slate-900 pl-2 pr-8 py-1"
            />
            <FontAwesomeIcon
              icon={faSearch}
              className="absolute right-2 text-lg text-slate-900"
            />
          </div>
        </div>

        <div className="py-1" />

        <div className="flex justify-between items-center">
          {/* Add user button */}
          <button
            onClick={() => {
              setCurrentUser(null);
            }}
            className="flex justify-center items-center gap-1 bg-slate-50 hover:bg-red-400 rounded-md font-medium text-slate-900 px-2 py-1 active:scale-95 transition-colors duration-200 ease-in-out"
          >
            <FontAwesomeIcon icon={faPlus} className="text-lg" />
            Add user
          </button>

          {/* User filter */}
          <div className="flex items-center gap-1">
            <label>Filtrar rol:</label>
            <select
              onChange={() => {}}
              className="bg-slate-50 rounded-md text-slate-900 px-2 py-1"
            >
              <option value="">Todos</option>
              <option value="admin">Admin</option>
              <option value="cashier">Cajero</option>
            </select>
          </div>
        </div>

        <div className="py-2" />

        {/* Users grid */}
        <div className="grid md:grid-cols-4 gap-4 w-full">
          {users.map((user, index) => (
            <div
              key={index}
              onClick={() => {
                setCurrentUser(user);
              }}
              className={`bg-slate-800 border border-slate-800 hover:border-red-400 ${
                user.email == currentUser?.email ? "border-red-400" : ""
              } rounded-md w-full p-2 cursor-pointer transition-colors duration-200 ease-in-out`}
            >
              <p className="text-slate-50/50 text-sm">
                {user.role == "admin" ? user.role : "cajero"}
              </p>

              <p className="font-medium">
                {user.first_name} {user.last_name}
              </p>

              <div className="py-1" />

              <p>{user.email}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Forms section */}
      {currentUser ? <EditUserForm user={currentUser} /> : <AddUserForm />}
    </section>
  );
};

export default Users;
