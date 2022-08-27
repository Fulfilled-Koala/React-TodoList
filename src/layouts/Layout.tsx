import { ReactNode } from "react";
import Header from "./Header";

export default function Layout({ children }: { children: ReactNode }): JSX.Element {
  return (
    <div className="flex h-screen flex-col">
      <Header />

      <div className="flex h-screen items-center justify-center bg-gray-100 px-4 dark:bg-dim-800">
        {children}
      </div>
    </div>
  );
}
