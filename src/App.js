import logo from "./logo.svg";
import "./App.css";
import React from "react";
import ToDoContext from "./context/todo-context";
import NewTaskForm from "./components/new-task.component";
import List from "./components/todo-list.component";
import {Tab, Tabs} from 'react-bootstrap';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      activeTasks: { one: 1 },
      completedTasks: { one: 1 },
      addTask: ({ title, description }) => {
        this.setState({
          activeTasks: { ...this.state.activeTasks, [title]: description },
        });
      },
      completeTask: (title) => {
        let stateTasks = { ...this.state.activeTasks };
        const completedTask = stateTasks[title];
        delete stateTasks[title];
        this.setState({
          activeTasks: stateTasks,
         completedTasks : {...this.state.completedTasks, completedTask}
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
            activeTasks: this.state.activeTasks,
            completeTask: this.state.completeTask,
          }}
        >
          <NewTaskForm></NewTaskForm>
        <Tabs defaultActiveKey="Open Tasks" id="uncontrolled-tab-example" className="mb-3">
          <Tab eventKey="Open Tasks" title="Active Tasks">
                  <List status="active"></List>
          </Tab>
          <Tab eventKey="Completed Tasks" title="Completed Tasks">
          <List status="completed"></List>
          </Tab>
        </Tabs>
          
        </ToDoContext.Provider>
      </div>
    );
  }
}

export default App;
