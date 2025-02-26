import { Request } from '../requests/Request.jsx';
import { Input } from '../forms/Input.jsx';
import { useState } from "react";
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const Verify2FA = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');
  const verify2FA = async (e) => {
    e.preventDefault();
    setMessage('Loading...');
    try {
      const res = await axios.post(`${API_URL}/protected-2`, { email, otp });
      setMessage(JSON.stringify(res.data, null, 2));
    } catch (err) {
      console.log('Error:', err.response);
      const res = err.response?.data 
        ? JSON.stringify(err.response.data, null, 2) 
        : '2FA verification failed';
      setMessage(res);
    }
  };

  return (
    <Request title={'2FA VERIFICATION REQUEST'} onSubmit={verify2FA} output={message}>
      <Input 
        label={'Email'} 
        type={'email'}
        value={email}
        placeholder={'fakeemail19@gmail.com'}
        onChange={(e) => setEmail(e.target.value)}/>
      <Input 
          label={'OTP'} 
          type={'text'} 
          value={otp}
          placeholder={'OTP'}
          onChange={(e) => setOtp(e.target.value)}/>
      </Request>
    );
}