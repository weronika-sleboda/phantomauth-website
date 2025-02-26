import { SubmitBtn } from './SubmitBtn.jsx';
import styles from './Form.module.css';

export const Form = ({ children, title, onSubmit}) => {
  return (
    <div className={styles.container}>
      <legend className={styles.legend}>{title}</legend>
      <form onSubmit={onSubmit} className={styles.form}>
        { children }
        <SubmitBtn/>
      </form>
    </div>
  );
}