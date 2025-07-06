import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';
import { useState } from 'react';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>('dark');
  function handleThemeChange(event) {
    event?.preventDefault();
    console.log('Theme changed', theme);
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  }

  return (
    <nav className={styles.menu}>
      <h1>{theme}</h1>
      <a className={styles.menuLink} href="#" aria-label="Home" title="Home">
        <HouseIcon className={styles.icon} />
      </a>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Histórico"
        title="Histórico"
      >
        <HistoryIcon className={styles.icon} />
      </a>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Configurações"
        title="Configurações"
      >
        <SettingsIcon className={styles.icon} />
      </a>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Tema"
        title="Tema"
        onClick={handleThemeChange}
      >
        <SunIcon className={styles.icon} />
      </a>
    </nav>
  );
}
