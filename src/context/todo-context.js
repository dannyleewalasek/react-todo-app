import { createContext } from "react";

const ToDoContext = createContext({
  tasks: {
    1: 2,
    2: 3,
  },
});

export default ToDoContext;
