"use client"
import { useState } from "react";
import Weather from "./weather/page";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-regular-svg-icons";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <main className={`flex min-h-screen flex-col gap-8 ${darkMode ? "bg-gray-900 text-white" : "bg-[var(--foreground-rgb: 0, 0, 0, --background-start-rgb: 214, 219, 220 ,--background-end-rgb: 255, 255, 255)] text-black"}`}>

      <button onClick={toggleDarkMode} className='flex items-center h-auto w-auto justify-end p-3'>
        <FontAwesomeIcon icon={darkMode ? faMoon : faSun} size='2x' />
      </button>

      <Weather />
    </main>
  );
}
