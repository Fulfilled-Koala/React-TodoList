import Todo from "./todo-type";
import TodoForm from "./todo-form-type";

type State = {
  todos: Todo[];
  addTodo: (todo: TodoForm) => void;
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
};

export default State;
