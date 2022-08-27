import { MoonIcon, SunIcon } from "@heroicons/react/20/solid";
import { ReactNode } from "react";
import useThemeContext from "../hooks/useThemeContext";
import { ThemeContextType } from "../context/ThemeProvider";

function Button({ children, onClick }: { children: ReactNode; onClick: () => void }): JSX.Element {
  return (
    <button
      onClick={onClick}
      type="button"
      className="inline-flex items-start justify-start rounded bg-gray-100 px-4 py-3 font-medium text-black ring-indigo-600 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-0 dark:bg-dim-100 dark:text-gray-100 dark:ring-indigo-500 dark:hover:bg-dim-200 dark:active:bg-dim-50 sm:mt-0"
    >
      {children}
    </button>
  );
}

export default function Header(): JSX.Element {
  const { theme, setTheme } = useThemeContext() as ThemeContextType;

  return (
    <header className="flex items-center justify-between px-8 py-4 shadow-md dark:bg-dim-700">
      <h1 className="pointer-events-none text-xl font-bold text-indigo-800 dark:text-indigo-500">
        TodoList
      </h1>

      {theme === "dark" ? (
        <Button onClick={() => setTheme("light")}>
          <SunIcon className="h-5 w-5" />
        </Button>
      ) : (
        <Button onClick={() => setTheme("dark")}>
          <MoonIcon className="h-5 w-5" />
        </Button>
      )}
    </header>
  );
}
