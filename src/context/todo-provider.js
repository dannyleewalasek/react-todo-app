import React, { Component } from "react";
import ToDoContext from "./todo-context";

class Provider extends React.Component {
  constructor(props) {
    super(props);
    let savedData = null;
    try {
      savedData = JSON.parse(localStorage.getItem("toDoList"));
    } catch (err) {
      console.log(err);
    }
    if (!savedData) {
      this.state = {
        activeTasks: { act: 1 },
        completedTasks: { comp: 1 },
        addTask: ({ title, description }) => {
          this.setState({
            activeTasks: { ...this.state.activeTasks, [title]: description },
          });
          this.saveState();
        },
        completeTask: (title) => {
          let stateTasks = { ...this.state.activeTasks };
          const removed = stateTasks[title];
          delete stateTasks[title];
          this.setState({
            activeTasks: stateTasks,
            completedTasks: {
              ...this.state.completedTasks,
              [title]: removed,
            },
          });
          this.saveState();
        },
      };
    } else {
      //FUNCTIONS ARE WRITTEN TWICE
      this.state = {
        ...savedData,
        addTask: ({ title, description }) => {
          this.setState({
            activeTasks: { ...this.state.activeTasks, [title]: description },
          });
          this.saveState();
        },
        completeTask: (title) => {
          let stateTasks = { ...this.state.activeTasks };
          const removed = stateTasks[title];
          delete stateTasks[title];
          this.setState({
            activeTasks: stateTasks,
            completedTasks: {
              ...this.state.completedTasks,
              [title]: removed,
            },
          });
          this.saveState();
        },
      };
    }
  }

  saveState = () => {
    localStorage.setItem("toDoList", JSON.stringify(this.state));
  };

  render() {
    return (
      <ToDoContext.Provider
        value={{
          addTask: this.state.addTask,
          activeTasks: this.state.activeTasks,
          completeTask: this.state.completeTask,
          completedTasks: this.state.completedTasks,
        }}
      >
        {this.props.children}
      </ToDoContext.Provider>
    );
  }
}

export default Provider;
