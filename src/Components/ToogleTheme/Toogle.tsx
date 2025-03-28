import  { useEffect, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const ToggleTheme = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light';
    }
    return 'light';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  const handleToggle = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      onClick={handleToggle}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 
        text-gray-800 dark:text-gray-200 
        hover:bg-gray-300 dark:hover:bg-gray-600 
        transition duration-300"
      title={theme === 'light' ? 'Switch to Dark Theme' : 'Switch to Light Theme'}
    >
      {theme === 'light' ? <FaMoon /> : <FaSun />}
    </button>
  );
};

export default ToggleTheme;