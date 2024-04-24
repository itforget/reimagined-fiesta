'use client'
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-regular-svg-icons";

export default function DarkMode() {
    const [darkMode, setDarkMode] = useState(false);

    function toggleDarkMode() {
      setDarkMode(!darkMode);
    }
  
    return (
      <div className={`${darkMode ? 'dark' : ''}`}>
        <nav className="p-4 justify-end">
          <button onClick={toggleDarkMode}>
            {darkMode ? (
              <FontAwesomeIcon icon={faMoon} size="xl" />
            ) : (
              <FontAwesomeIcon icon={faSun} size="xl" />
            )}
          </button>
        </nav>
      </div>
    );
  }
  