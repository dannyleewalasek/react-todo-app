import React, { useContext } from "react";
import Toast from 'react-bootstrap/Toast'
import ToDoContext from "../context/todo-context";
import './bootstrap-modified-styles.css';

const ListItem = ({ title, description }) => {
  const contextState = useContext(ToDoContext);
  const { removeTask } = contextState;
  return (
<Toast onClose={() => removeTask(title)}>
  <Toast.Header className="activeTask">
    <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
    <strong className="mr-auto">{title}</strong>
    <small>11 mins ago</small>
  </Toast.Header>
  <Toast.Body>{description}</Toast.Body>
</Toast>
  );
};


export default ListItem;
