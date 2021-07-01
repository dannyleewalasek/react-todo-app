import React, { useContext } from "react";
import ToDoContext from "../context/todo-context";
import styled from "styled-components";

const ListItem = ({ title, description }) => {
  const contextState = useContext(ToDoContext);
  const { removeTask } = contextState;
  return (
    <Item onClick={() => removeTask(title)}>
      <span>{title}</span>
      <span>{description}</span>
    </Item>
  );
};

const Item = styled.div`
  background-color: blue;
  box-sixing: border-box;
  width: 50%;
  transition: 2s;

  :hover {
    background-color: green;
  }
`;

export default ListItem;
