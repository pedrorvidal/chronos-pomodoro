import styles from './Heading.module.css';

export function Heading() {
  return (
    <h1 className={`${styles.cyan} ${styles.heading}`}>
      Olá mundo components!
    </h1>
  );
}
