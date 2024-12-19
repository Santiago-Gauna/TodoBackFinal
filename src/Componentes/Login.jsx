import React, { useState } from "react";
import classes from "../Estilos/Login.module.css";
import { axiosLogin } from "../Api/axios";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [mail, setMail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    if (mail === "" || contraseña === "") {
      setError("Todos los campos son obligatorios");
      return;
    }

    try {
      const response = await axiosLogin.post("/login", {
        mail: mail,
        password: contraseña,
      });

      const { token } = response.data;

      localStorage.setItem("token", token);

      setMail("");
      setContraseña("");
      setError("");

      navigate("/ListadeTareas");
    } catch (err) {
      console.error("Error al iniciar sesión", err.response?.data || err);
      setError(err.response?.data?.error || "Credenciales inválidas.");
    }
  };

  return (
    <div className={classes.principal}>
      <h1 className={classes.title}>Iniciar Sesión</h1>
      <form className={classes.login} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            value={mail}
            onChange={(evt) => setMail(evt.target.value)}
            name="email"
            id="email"
            placeholder="Coloque su correo"
          />
        </div>
        <div>
          <label htmlFor="Contraseña">Contraseña </label>
          <input
            type="password"
            value={contraseña}
            onChange={(evt) => setContraseña(evt.target.value)}
            name="Contraseña"
            id="Contraseña"
            placeholder="Coloque su Contraseña"
          />
        </div>
        <button type="submit" className={classes.button}>
          Inicia Sesión
        </button>
        <Link to="/Registro" className={classes.button}>
          Registrarte
        </Link>
      </form>
      {error && <p className={classes.error}>{error}</p>}
    </div>
  );
};

export default Login;
