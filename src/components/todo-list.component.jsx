import React, { useContext } from "react";
import ToDoContext from "../context/todo-context";
import ListItem from "./list-item.component";
import './bootstrap-modified-styles.css';


const List = ({status}) => {
  const {activeTasks}  =  useContext(ToDoContext);
  return (
    <div className="List">
      {Object.keys(activeTasks).map((title) => (
        <ListItem
          key={title}
          title={title}
          description={activeTasks[title]}
          status={status}
        ></ListItem>
      ))}
    </div>
  );
};

export default List;
