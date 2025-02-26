import styles from './Input.module.css';

export const Input = ({ label, type, value, placeholder, onChange }) => {
  return (
    <div className={styles.container}>
      <label htmlFor={label}>{label}</label>
      <input type={type} value={value} onChange={onChange} required placeholder={placeholder}></input>
    </div>
  );
}