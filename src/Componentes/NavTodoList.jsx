import React from "react";
import { Link } from "react-router-dom";
import classes from "../Estilos/NavTodoList.module.css";

const NavTodoList = () => {
  return (
    <nav className={classes.navContainer}>
      <Link to="/ListadeTareas" className={classes.navButton}>
        Listas de Tareas
      </Link>
      <Link to="/NuevaTarea" className={classes.navButton}>
        Agregar Nueva Tarea
      </Link>
      <Link to="/Estadisticas" className={classes.navButton}>
        Estadisticas
      </Link>
    </nav>
  );
};

export default NavTodoList;
