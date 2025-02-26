import styles from './SecHeader.module.css';

export const SecHeader = ({header}) => {
  return (
    <h2 className={styles.header}>{header}</h2>
  );
}