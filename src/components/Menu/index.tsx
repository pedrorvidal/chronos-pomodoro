import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';

export function Menu() {
  return (
    <nav className={styles.menu}>
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
      <a className={styles.menuLink} href="#" aria-label="Tema" title="Tema">
        <SunIcon className={styles.icon} />
      </a>
    </nav>
  );
}
