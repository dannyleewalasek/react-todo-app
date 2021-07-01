import React, { Component } from "react";
import { Provider } from "./todo-context";

class Parent extends Component {
  state = {
    toggleGrandChild: false,
    toggleName: false,
    people: [
      { id: 0, name: "Bob", age: 24 },
      { id: 1, name: "Jack", age: 22 },
      { id: 2, name: "Jill", age: 26 },
    ],
  };

  toggleComponent = () => {
    this.setState({
      toggleGrandChild: !this.state.toggleGrandChild,
    });
  };

  switchNameHandler = (newName) => {
    this.setState({
      toggleName: !this.state.toggleName,
      people: [
        { id: 0, name: newName, age: 24 },
        { id: 1, name: "Jack", age: 22 },
        { id: 2, name: "Jill", age: 26 },
      ],
    });
  };

  render() {
    return (
      <Provider
        value={{
          state: this.state,
          toggleComponent: this.toggleComponent,
          switchNameHandler: (e) => this.switchNameHandler(e),
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export default Parent;
