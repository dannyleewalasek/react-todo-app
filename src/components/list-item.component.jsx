import React, { useContext } from "react";
import Toast from 'react-bootstrap/Toast'
import ToDoContext from "../context/todo-context";
import './bootstrap-modified-styles.css';

const ListItem = ({ title, description , status}) => {
  const contextState = useContext(ToDoContext);
  const { completeTask } = contextState;
  console.log(`toast-header-${status}`);
  return (
<Toast onClose={() => completeTask(title)}>
  <Toast.Header className={`toast-header-${status}`}>
    <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
    <strong className="mr-auto">{title}</strong>
    <small>11 mins ago</small>
  </Toast.Header>
  <Toast.Body>{description}</Toast.Body>
</Toast>
  );
};


export default ListItem;
