import React, { useState } from "react";
import classes from "../Estilos/NuevoUsuario.module.css";
import { axiosRegister } from "../Api/axios";

const NuevoUsuario = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }
    setError("");

    try {
      const response = await axiosRegister.post("/register", {
        user: username,
        mail: email,
        password: password,
      });

      setSuccessMessage("Usuario registrado con éxito.");
      console.log("Respuesta del servidor:", response.data);

      setUsername("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setError("");

      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
    } catch (err) {
      console.error(
        "Error al registrar el usuario:",
        err.response?.data || err
      );
      setError(err.response?.data?.message || "Hubo un error al registrar.");
    }
  };

  return (
    <div className={classes.principal}>
      <h1 className={classes.title}>Registrarse</h1>
      <div className={classes["nuevo-usuario-container"]}>
        <form className={classes.form} onSubmit={handleSubmit}>
          <div className={classes["form-group"]}>
            <label htmlFor="username">Nombre de usuario</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Ingresa tu nombre de usuario"
            />
          </div>
          <div className={classes["form-group"]}>
            <label htmlFor="email">Correo electrónico</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ingresa tu correo electrónico"
            />
          </div>
          <div className={classes["form-group"]}>
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Crea una contraseña"
            />
          </div>
          <div className={classes["form-group"]}>
            <label htmlFor="confirmPassword">Confirmar contraseña</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Repite la contraseña"
            />
          </div>
          {error && <p className={classes.error}>{error}</p>}
          {successMessage && (
            <p className={classes.success}>{successMessage}</p>
          )}
          <button type="submit" className={classes["submit-button"]}>
            Registrarse
          </button>
        </form>
      </div>
    </div>
  );
};

export default NuevoUsuario;
