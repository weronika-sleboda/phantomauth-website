import styles from './BulletList.module.css';

export const BulletList = ({ list }) => {
  return (
    <ul className={styles.list}>
      {
        list.map(bulletPoint => <li key={crypto.randomUUID()}><p>{bulletPoint}</p></li>)
      }
    </ul>
  );
}