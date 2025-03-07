"use client";

import { MoonIcon, SunIcon } from '@/src/app/icons/icons';
import { useCallback, useEffect, useState } from 'react';

export default function ChangeTheme() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  const toggleTheme = useCallback(() => {
    setDarkMode((prevMode) => !prevMode);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const theme = darkMode ? 'dark' : 'light';

    root.classList.toggle('dark', darkMode);
    localStorage.setItem('theme', theme);
  }, [darkMode]);

  return (
    <button
      onClick={toggleTheme}
      className="w-5 h-5 flex items-center justify-center"
      aria-label="Toggle Theme"
    >
      {darkMode ? (
        <SunIcon className="w-full h-full" />
      ) : (
        <MoonIcon className="w-full h-full" />
      )}
    </button>
  );
}
