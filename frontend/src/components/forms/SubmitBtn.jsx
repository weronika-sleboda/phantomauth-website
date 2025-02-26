import styles from './SubmitBtn.module.css';

export const SubmitBtn = () => {
  return (
    <input type='submit' className={styles.button} value='SEND'/>
  );
}