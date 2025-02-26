import styles from './Logo.module.css';

export const Logo = () => {
  return (
    <div className={styles.container}>
      <img 
        className={styles.logo} 
        src='/images/logo.svg'
        alt='PhantomAuth logo featuring an O designed as a futuristic combination dial.' />
    </div>
  );
}