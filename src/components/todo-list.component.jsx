import React, { useContext } from "react";
import ToDoContext from "../context/todo-context";
import ListItem from "./list-item.component";
import styled from "styled-components";

const ToDoList = () => {
  const contextState = useContext(ToDoContext);
  const tasks = contextState.tasks;
  return (
    <StyledList>
      {Object.keys(tasks).map((title) => (
        <ListItem
          key={title}
          title={title}
          description={tasks[title]}
        ></ListItem>
      ))}
    </StyledList>
  );
};

const StyledList = styled.div`
  background-color: green;
`;

export default ToDoList;
