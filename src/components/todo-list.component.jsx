import React, { useContext } from "react";
import ToDoContext from "../context/todo-context";
import ListItem from "./list-item.component";
import "./bootstrap-modified-styles.css";

const List = ({ status }) => {
  const { activeTasks, completedTasks, completeTask } = useContext(ToDoContext);
  return (
    <div className="List">
      {Object.keys(status === "active" ? activeTasks : completedTasks).map(
        (title) => (
          <ListItem
            key={title}
            title={title}
            description={
              status === "active" ? activeTasks[title] : completedTasks[title]
            }
            status={status}
            onclose={status === "active" ? completeTask : null}
          ></ListItem>
        )
      )}
    </div>
  );
};

export default List;
