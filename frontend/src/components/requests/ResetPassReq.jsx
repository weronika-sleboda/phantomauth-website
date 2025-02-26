import { Request } from '../requests/Request.jsx';
import { Input } from '../forms/Input.jsx';
import { useState } from "react";
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const ResetPassReq = () => {
  const [email, setEmail] = useState('');
  const [newPass, setNewPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [message, setMessage] = useState('');
  const resetPassword = async (e) => {
    e.preventDefault();
    setMessage('Loading...');
    try {
      const res = await axios.post(`${API_URL}/reset-password`, {
        email,
        newPass,
        confirmPass
      });
      setMessage(JSON.stringify(res.data, null, 2));
    } catch (err) {
      console.log('Error:', err.response);
      const res = err.response?.data 
        ? JSON.stringify(err.response.data, null, 2) 
        : 'Password reset failed';
      setMessage(res);
    }
  };


  return (
    <Request title={'PASSWORD RESET REQUEST'} onSubmit={resetPassword} output={message}>
      <Input 
        label={'Email'} 
        type={'email'}
        value={email}
        placeholder={'fakeemail19@gmail.com'}
        onChange={(e) => setEmail(e.target.value)}/>
      <Input 
        label={'New Password'} 
        type={'password'} 
        value={newPass}
        placeholder={'fakePassword9@'}
        onChange={(e) => setNewPass(e.target.value)}/>
      <Input 
        label={'Confirm New Password'} 
        type={'password'} 
        value={confirmPass}
        placeholder={'fakePassword9@'}
        onChange={(e) => setConfirmPass(e.target.value)}/>
    </Request>
  );
}