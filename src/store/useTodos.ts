import create from "zustand";
import { persist } from "zustand/middleware";
import { State, TodoForm } from "../types";

const useTodos = create<State>()(
  persist(
    (setState) => ({
      todos: [],
      addTodo(todo: TodoForm) {
        setState((state) => {
          const todos = [
            ...state.todos,
            {
              ...todo,
              id: state.todos.length + 1,
              completed: false,
              createdAt: new Date(),
            },
          ];
          return { todos };
        });
      },
      removeTodo(id: number) {
        setState((state) => ({
          todos: state.todos.filter((todo) => todo.id !== id),
        }));
      },
      toggleTodo(id: number) {
        setState((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id
              ? {
                  ...todo,
                  completed: !todo.completed,
                }
              : todo
          ),
        }));
      },
      updateTodo(id: number, todo: TodoForm) {
        setState((state) => ({
          todos: state.todos.map((t) =>
            t.id === id ? { ...t, ...todo } : t
          ),
        }));
      }
    }),
    {
      name: "todos",
      getStorage: () => localStorage,
    }
  )
);

export default useTodos;
