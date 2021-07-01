import React, { useContext } from "react";
import ToDoContext from "../context/todo-context";
import {Form, Button} from 'react-bootstrap';

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
     // date: Date.now()
    });
  };

  render() {
    return (
      <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="name@example.com" onChange={(event) => this.setState({ title: event.target.value })}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={3} onChange={(event) =>
                  this.setState({ description: event.target.value })
                }/>
      </Form.Group>
      <Button variant="primary" type="submit" onClick={(e) => this.submitNewTask(e)}>
    Submit
  </Button>
    </Form>
    );



  }
}

export default NewTaskForm;
