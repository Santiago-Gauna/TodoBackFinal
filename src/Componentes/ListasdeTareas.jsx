import React, { useState } from "react";
import Title from "./Title";
import NavTodoList from "./NavTodoList";
import TareasPendientes from "./TareasPendientes";
import TareasEnProceso from "./TareasEnProceso";
import TareasCompletadas from "./TareasCompletadas";
import { useTasks } from "./TareasContext";
import classes from "../Estilos/ListasdeTareas.module.css";

const ListadeTareas = () => {
  const { updateTask, removeTask } = useTasks();

  return (
    <div>
      <Title />
      <NavTodoList />
      <div className={classes.div}>
        <TareasPendientes removeTask={removeTask} updateTask={updateTask} />
        <TareasEnProceso removeTask={removeTask} updateTask={updateTask} />
        <TareasCompletadas removeTask={removeTask} updateTask={updateTask} />
      </div>
    </div>
  );
};

export default ListadeTareas;
