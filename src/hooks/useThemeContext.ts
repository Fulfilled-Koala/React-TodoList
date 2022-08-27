import { useContext } from "react";
import { ThemeContext, ThemeContextType } from "../context/ThemeProvider";

export default function useThemeContext(): ThemeContextType | undefined {
  return useContext(ThemeContext);
}
