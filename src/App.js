import logo from "./logo.svg";
import "./App.css";
import React from "react";
import ToDoContext from "./context/todo-context";
import NewTaskForm from "./components/new-task.component";
import ToDoList from "./components/todo-list.component";
import {Tab, Tabs} from 'react-bootstrap';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: { one: 1 },
      addTask: ({ title, description }) => {
        this.setState({
          tasks: { ...this.state.tasks, [title]: description },
        });
      },
      removeTask: (title) => {
        console.log(title);
        let stateTasks = { ...this.state.tasks };
        delete stateTasks[title];
        this.setState({
          tasks: stateTasks,
        });
      },
    };
  }

  //ADD MEMOIZATION!??
  render() {
    return (
      <div className="App">
        <ToDoContext.Provider
          value={{
            addTask: this.state.addTask,
            tasks: this.state.tasks,
            removeTask: this.state.removeTask,
          }}
        >
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
          <Tab eventKey="Open Tasks" title="Open Tasks">
          <NewTaskForm></NewTaskForm>
                  <ToDoList></ToDoList>
          </Tab>
          <Tab eventKey="Active Tasks" title="Active Tasks">
            DONE GO HERE
          </Tab>
        </Tabs>
          
        </ToDoContext.Provider>
      </div>
    );
  }
}

export default App;
