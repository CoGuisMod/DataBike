import { useState } from "react";

const EditUserForm = ({ user }: { user: any }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rol, setRol] = useState("");

  return (
    <div className="col-span-4 flex flex-col bg-slate-800 rounded-md w-full h-full p-2">
      <h2 className="font-bold text-lg">Editar usuario</h2>

      <div className="py-1" />

      <div className="grid md:grid-cols-2 gap-2">
        <div className="w-full">
          <label>Nombres:</label>
          <input
            type="text"
            value={user.first_name}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            className="rounded-md text-slate-900 w-full px-2 py-1"
          />
        </div>

        <div>
          <label>Apellidos:</label>
          <input
            type="text"
            value={user.last_name}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            className="rounded-md text-slate-900 w-full px-2 py-1"
          />
        </div>

        <div className="col-span-2">
          <label>Email:</label>
          <input
            type="text"
            value={user.email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="rounded-md text-slate-900 w-full px-2 py-1"
          />
        </div>

        <div className="col-span-2 flex flex-col">
          <label>Contraseña:</label>
          <input
            type="text"
            value={user.password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="rounded-md text-slate-900 w-full px-2 py-1"
          />
        </div>

        <div className="col-span-2 flex items-center gap-1">
          <label>Rol:</label>
          <select
            value={user.role}
            onChange={(e) => {
              setRol(e.target.value);
            }}
            className="bg-slate-50 rounded-md text-slate-900 px-2 py-1"
          >
            <option value="">Seleccionar rol</option>
            <option value="admin">Admin</option>
            <option value="cashier">Cajero</option>
          </select>
        </div>
      </div>

      <div className="h-full" />

      <button className="bg-red-400 hover:bg-red-500 rounded-md font-medium py-1 active:scale-95 transition-colors duration-200 ease-in-out">
        Editar
      </button>
    </div>
  );
};

export default EditUserForm;
