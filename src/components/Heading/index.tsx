import styles from './styles.module.css';

type HeadingProps = {
  children: React.ReactNode;
};

export function Heading(props: HeadingProps) {
  // console.log(props);
  return (
    <h1 className={`${styles.cyan} ${styles.heading}`}>{props.children}</h1>
  );
}
