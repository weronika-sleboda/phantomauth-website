import styles from './Output.module.css';

export const Output = ({ output }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.header}>OUTPUT</h3>
      <p className={styles.output}>{output}</p>
    </div>
  );
}