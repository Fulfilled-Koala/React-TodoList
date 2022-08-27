import { Tab } from "@headlessui/react";
import { classNames } from "../helpers";

type Props = {
  title: string;
  amount: number;
};

export default function TodoTab({ title, amount }: Props): JSX.Element {
  return (
    <Tab
      className={({ selected }) =>
        classNames(
          "flex w-full items-center justify-center gap-1 border-b-2 py-2.5 text-sm font-medium leading-5",
          selected
            ? "border-indigo-700 font-bold text-black dark:border-indigo-500 dark:text-white"
            : "hover:border-orange-500"
        )
      }
    >
      {({ selected }) => (
        <>
          {title}
          <span
            className={classNames(
              "hidden rounded-full py-0.5 px-2 sm:block",
              selected
                ? "bg-indigo-700 font-bold text-white dark:bg-indigo-500"
                : "bg-gray-200 dark:bg-neutral-700"
            )}
          >
            {amount}
          </span>
        </>
      )}
    </Tab>
  );
}
