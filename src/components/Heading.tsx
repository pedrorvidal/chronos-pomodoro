import styles from './Heading.module.css';

export function Heading(props: any) {
  console.log(props);
  return (
    <h1 className={`${styles.cyan} ${styles.heading}`}>{props.children}</h1>
  );
}
