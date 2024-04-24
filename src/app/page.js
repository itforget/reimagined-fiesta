"use client";
import Weather from "./weather/page";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode((prevMode) => !prevMode);
  }

  return (
    <main
      className={`flex min-h-screen flex-col gap-8 ${
        darkMode ? "dark:bg-gray-900 dark:text-gray-100" : ""
      }`}
    >
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>

      <Weather className="dark:bg-gray-800 dark:text-gray-100" />
    </main>
  );
}
