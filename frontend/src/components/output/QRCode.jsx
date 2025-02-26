import styles from './Output.module.css';

export const QrCode = ({ output, qrCode }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.header}>OUTPUT</h3>
      <div className={styles.output}>
        <img src={qrCode} alt={'Placeholder for a 2 Factor Authentication QR Code'}/>
        <p>{output}</p>
      </div>
    </div>
  );
}