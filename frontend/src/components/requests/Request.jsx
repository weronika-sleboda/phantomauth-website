import styles from './Request.module.css';
import { Form } from '../forms/Form.jsx';
import { Output } from '../output/Output.jsx';
import { QrCode } from '../output/QRCode.jsx';

export const Request = ({ children, title, onSubmit, output, qrCode = null}) => {
  return (
    <div className={styles.container}>
      <Form title={title} onSubmit={onSubmit}>
        {children}
      </Form>
      {
        qrCode? <QrCode output={output} qrCode={qrCode}/> : <Output output={output}/>
      }
    </div>
  );
}