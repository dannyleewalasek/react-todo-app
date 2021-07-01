import React, { useContext } from "react";
import ToDoContext from "../context/todo-context";

class NewTaskForm extends React.Component {
  static contextType = ToDoContext;

  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
    };
  }

  submitNewTask = (event) => {
    const { addTask } = this.context;
    event.preventDefault();
    addTask({
      title: this.state.title,
      description: this.state.description,
    });
  };

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            onChange={(event) => this.setState({ title: event.target.value })}
            placeholder="title"
          ></input>
          <input
            type="text"
            onChange={(event) =>
              this.setState({ description: event.target.value })
            }
            placeholder="description"
          ></input>
          <button type="submit" onClick={this.submitNewTask}>
            ADD NEW TASK
          </button>
        </form>
      </div>
    );
  }
}

export default NewTaskForm;
