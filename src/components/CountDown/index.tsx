import { TimerIcon } from 'lucide-react';
import styles from './styles.module.css';

export function Countdown() {
  return (
    <div className={styles.countdown}>
      <a className={styles.countdownLink} href="#">
        <TimerIcon className={styles.icon} />
        <span>Chronos</span>
      </a>
    </div>
  );
}
