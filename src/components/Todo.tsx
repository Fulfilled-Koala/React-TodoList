import { CalendarIcon } from "@heroicons/react/24/solid";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { Todo as TodoType } from "../types";
import useTodos from "../store/useTodos";
import Form from "./Form";
import { classNames } from "../helpers";

type Props = {
  todo: TodoType;
};

export default function Todo ({ todo }: Props): JSX.Element {
  const [showModal, setShowModal] = useState(false);
  const {
    toggleTodo,
    removeTodo,
  } = useTodos((state) => ({
    toggleTodo: state.toggleTodo,
    removeTodo: state.removeTodo,
  }));

  const due = new Date(todo.due);
  const dueString = `${due.getDate()} ${due.toLocaleString("en-us", {
    month: "short",
  })} ${due.getFullYear()}`;
  const createdAt = new Date(todo.createdAt);
  const createdAtString = `${createdAt.getDate()} ${createdAt.toLocaleString("en-us", {
    month: "short",
  })} ${createdAt.getFullYear()}`;

  return (
    <>
      <Form show={showModal} onClose={() => setShowModal(false)} editingState={todo} />

      <li className="flex items-center justify-between gap-2 py-4 px-6 even:border-y dark:border-neutral-600">
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
            className="inline-block cursor-pointer rounded-full border-2 border-indigo-500 p-2 text-indigo-500 shadow dark:border-indigo-400 dark:text-indigo-600"
          />

          <div className="flex flex-col gap-1">
          <span
            className={classNames(
              todo.completed
                ? "text-gray-500 line-through dark:text-gray-400"
                : "text-black dark:text-neutral-100",
              "font-bold",
            )}
          >
            {todo.title}
          </span>

            {todo.description != null && (
              <p
                className={classNames(
                  todo.completed
                    ? "text-gray-500 line-through dark:text-gray-400"
                    : "text-black dark:text-neutral-100",
                  "text-sm font-medium",
                )}
              >
                {todo.description}
              </p>
            )}

            <div
              className={classNames(
                "flex items-center gap-1 text-sm font-medium text-neutral-500 dark:text-neutral-200",
                todo.completed && "line-through",
              )}
            >
            <span className="flex items-center gap-1 font-bold text-red-500 dark:text-red-400">
              <CalendarIcon className="h-4 w-4" />
              {dueString}
            </span>
              · {createdAtString}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button type="button" onClick={() => setShowModal(true)}>
            <PencilSquareIcon className="h-5 w-5" />
          </button>
          <button type="button" onClick={() => removeTodo(todo.id)}>
            <TrashIcon className="h-5 w-5 cursor-pointer text-red-500 dark:text-red-400" />
          </button>
        </div>
      </li>
    </>
  );
}
