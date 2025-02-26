import styles from './TextHeader.module.css';

export const TextHeader = ({header}) => {
  return (
    <h3 className={styles.header}>{header}</h3>
  );
}