import { Tab } from "@headlessui/react";
import { useState } from "react";
import TodoTab from "./components/TodoTab";
import Todo from "./components/Todo";
import useTodos from "./store/useTodos";
import FormModal from "./components/FormModal";

export default function App(): JSX.Element {
  const [showModal, setShowModal] = useState(false);
  const todos = useTodos((state) => state.todos);

  const activeTodos = todos.filter((todo) => !todo.completed);
  const completedTodos = todos.filter((todo) => todo.completed);

  return (
    <>
      <FormModal show={showModal} onClose={() => setShowModal(false)} />

      <div className="flex h-1/2 w-auto flex-col justify-between rounded-md bg-white px-2 py-4 text-black shadow-md dark:bg-dim-300 dark:text-neutral-100 sm:px-6 xl:w-1/3">
        <Tab.Group>
          <Tab.List as="div" className="flex justify-between">
            <TodoTab title="All Todos" amount={todos.length} />
            <TodoTab title="Active Todos" amount={activeTodos.length} />
            <TodoTab title="Completed Todos" amount={completedTodos.length} />
          </Tab.List>

          <Tab.Panels as="ul" className="my-4 h-full overflow-y-auto">
            <Tab.Panel>
              {todos.map((todo) => (
                <Todo key={todo.id} todo={todo} />
              ))}
            </Tab.Panel>

            <Tab.Panel>
              {activeTodos.map((todo) => (
                <Todo key={todo.id} todo={todo} />
              ))}
            </Tab.Panel>

            <Tab.Panel>
              {completedTodos.map((todo) => (
                <Todo key={todo.id} todo={todo} />
              ))}
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>

        <button
          onClick={() => setShowModal(true)}
          type="button"
          className="rounded-md bg-green-500 px-4 py-2 text-sm font-bold font-medium text-white shadow-xl duration-300 hover:bg-opacity-50 dark:bg-green-600 dark:hover:bg-opacity-50"
        >
          Create Todo
        </button>
      </div>
    </>
  );
}
