import { Request } from '../requests/Request.jsx';
import { Input } from '../forms/Input.jsx';
import { useState } from "react";
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const Enable2FAReq = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [qrCode, setQrCode] = useState('');
  const enable2FA = async (e) => {
    e.preventDefault();
    setMessage('Loading...');
    try {
      const res = await axios.post(`${API_URL}/enable-2fa`, {
        email
      });
      setMessage('');
      setQrCode(res.data.qrCode);
    } catch (err) {
      console.log('Error:', err.response);
      const res = err.response?.data 
        ? JSON.stringify(err.response.data, null, 2) 
        : 'Enabling 2FA failed';
      setMessage(res);
      setQrCode('');
    }
  };

  return (
    <Request title={'ENABLE 2FA REQUEST'} 
      onSubmit={enable2FA} 
      output={message} 
      qrCode={qrCode}>
      <Input 
        label={'Email'} 
        type={'email'}
        value={email}
        placeholder={'fakeemail19@gmail.com'}
        onChange={(e) => setEmail(e.target.value)}/>
    </Request>
  );
}