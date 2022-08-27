/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from "react-hook-form";
import { TodoForm } from "../../types";
import useTodos from "../../store/useTodos";

type Props = {
  onClose: () => void;
};

export default function Form({ onClose }: Props): JSX.Element {
  const addTodo = useTodos((state) => state.addTodo);
  const { register, handleSubmit } = useForm<TodoForm>();

  function onSubmit(data: TodoForm): void {
    addTodo(data);
    onClose();
  }

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
      <h1 className="text-lg font-bold leading-6 text-gray-900 dark:text-neutral-100">
        Create a Todo
      </h1>

      <div className="flex flex-col gap-2">
        <label className="flex flex-col gap-1 font-medium text-black dark:text-white">
          <div>
            Title <span className="font-bold text-red-500 dark:text-red-400">*</span>
          </div>
          <input
            className="block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-indigo-600 focus:bg-white focus:text-gray-700 focus:outline-none dark:border-dim-50 dark:bg-dim-50 dark:text-gray-100 dark:focus:border-indigo-400"
            required
            {...register("title", { required: true })}
          />
        </label>

        <label className="flex flex-col gap-1 font-medium text-black dark:text-white">
          Description
          <input
            className="block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-indigo-600 focus:bg-white focus:text-gray-700 focus:outline-none dark:border-dim-50 dark:bg-dim-50 dark:text-gray-100 dark:focus:border-indigo-400"
            {...register("description")}
          />
        </label>
      </div>

      <div className="flex items-center justify-between gap-2">
        <input
          defaultValue={new Date().toISOString().split("T")[0]}
          {...register("due", { required: true })}
          type="date"
          className="flex items-center gap-1 rounded-lg border border-gray-400 px-2 py-2 text-sm font-bold leading-tight text-gray-700 text-white shadow-md transition duration-150 ease-in-out hover:bg-neutral-700 hover:text-white hover:shadow-lg active:bg-neutral-600 active:text-white active:shadow-lg dark:bg-dim-50 dark:text-neutral-50"
        />

        <div className="flex items-center gap-2">
          <button
            type="submit"
            className="inline-block rounded-lg bg-indigo-600 px-6 py-2 text-sm font-bold leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-indigo-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg"
          >
            Add Todo
          </button>

          <button
            type="button"
            className="inline-block rounded-lg border border-gray-400 px-6 py-2 text-sm font-bold leading-tight text-gray-700 text-white shadow-md transition duration-150 ease-in-out hover:bg-neutral-700 hover:text-white hover:shadow-lg focus:bg-neutral-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-neutral-600 active:text-white active:shadow-lg dark:text-neutral-50"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
}
