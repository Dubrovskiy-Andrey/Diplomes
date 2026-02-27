import { useEffect, useState } from 'react';
import styles from './ThemeToggle.module.css';

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'dark';
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <button 
      className={styles.themeToggle}
      onClick={() => setIsDark(!isDark)}
      aria-label="Переключить тему"
    >
      <span className={styles.toggleIcon}>
        {isDark ? '☀️' : '🌙'}
      </span>
    </button>
  );
};