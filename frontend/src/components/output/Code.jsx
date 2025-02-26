import { Prism } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styles from './Code.module.css';

export const Code = ({ code }) => {
  return (
    <div className={styles.code}>
      <Prism language='bash' style={atomDark}>{code}</Prism>
    </div>
  );
}