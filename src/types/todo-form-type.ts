import Todo from "./todo-type";

type TodoForm = Omit<Todo, "id" | "completed" | "createdAt">;

export default TodoForm;
