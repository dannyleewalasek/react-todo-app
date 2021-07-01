import "./App.css";
import React from "react";
import NewTaskForm from "./components/new-task.component";
import List from "./components/todo-list.component";
import { Tab, Tabs } from "react-bootstrap";
import Provider from "./context/todo-provider";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Provider>
          <NewTaskForm></NewTaskForm>
          <Tabs
            defaultActiveKey="Open Tasks"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="Open Tasks" title="Active Tasks">
              <List status="active"></List>
            </Tab>
            <Tab eventKey="Completed Tasks" title="Completed Tasks">
              <List status="completed"></List>
            </Tab>
          </Tabs>
        </Provider>
        {/* </ToDoContext.Provider> */}
      </div>
    );
  }
}

export default App;
