import React, { useContext } from "react";
import ToDoContext from "../context/todo-context";
import ListItem from "./list-item.component";
import styled from "styled-components";

const ToDoList = () => {
  const {activeTasks}  = useContext(ToDoContext);
  return (
    <div>
      {Object.keys(activeTasks).map((title) => (
        <ListItem
          key={title}
          title={title}
          description={activeTasks[title]}
        ></ListItem>
      ))}
    </div>
  );
};

export default ToDoList;
