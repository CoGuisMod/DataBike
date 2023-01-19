import { useState } from "react";
import { useNavigate } from "react-router-dom";

import loginImage from "../../assets/Images/loginImage.jpg";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    navigate("/dashboard");
  };

  return (
    <section className="relative flex w-full h-screen">
      <img
        src={loginImage}
        alt="Guy with bike in the mountain."
        className="w-full h-full object-cover object-center"
      />

      <div className="absolute flex flex-col justify-center items-center bg-slate-900/50 w-full h-full px-4 backdrop-blur-sm z-10">
        {/* Login title */}
        <h1 className="text-xl text-center">
          Ingresa a <span className="font-bold">DataBike</span>
        </h1>

        <div className="py-4" />

        <form
          onSubmit={handleSubmit}
          className="border flex flex-col rounded-md max-w-xs w-full p-4"
        >
          {/* Username inputs */}
          <label>Nombre de usuario</label>
          <input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            className="rounded-full text-slate-900 px-2 py-1"
          />

          {/* Password inputs */}
          <div className="py-2" />

          <label>Contraseña</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            className="rounded-full text-slate-900 px-2 py-1"
          />

          {/* Button */}
          <div className="py-4" />

          <button className="bg-red-500 rounded-full text-lg px-2 py-1">
            Entrar
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
