import styles from './PageHeader.module.css';

export const PageHeader = ({header}) => {
  return (
    <h1 className={styles.header}>{header}</h1>
  );
}