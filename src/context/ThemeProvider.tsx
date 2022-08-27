import React, { createContext, Dispatch, ReactNode, SetStateAction, useMemo } from "react";

function getInitialTheme(): string {
  if (typeof window !== "undefined") {
    const storedPreference: string | null = window.localStorage.getItem("color-theme");

    if (storedPreference !== null) {
      return storedPreference;
    }

    const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
    if (userMedia.matches) {
      return "dark";
    }
  }

  return "light";
}

export type ThemeContextType = {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

type Props = {
  initialTheme?: string;
  children: ReactNode;
};

export default function ThemeProvider({ initialTheme, children }: Props): JSX.Element {
  const [theme, setTheme] = React.useState(getInitialTheme);

  function rawSetTheme(rawTheme: string): void {
    const root = window.document.documentElement;
    const isDark = rawTheme === "dark";

    root.classList.remove(isDark ? "light" : "dark");
    root.classList.add(rawTheme);

    localStorage.setItem("color-theme", rawTheme);
  }

  if (initialTheme != null) {
    rawSetTheme(initialTheme);
  }

  React.useEffect(() => {
    rawSetTheme(theme);
  }, [theme]);

  const value = useMemo(() => ({ theme, setTheme }), [theme, setTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

ThemeProvider.defaultProps = {
  initialTheme: "light",
};
