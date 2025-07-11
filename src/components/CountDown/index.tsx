import type { homeProps } from '../../pages/Home';
import styles from './styles.module.css';

export function Countdown({ state }: homeProps) {
  return <div className={styles.container}>{state.formattedSecondsRemaining}</div>;
}
