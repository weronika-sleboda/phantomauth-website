import { Request } from '../requests/Request.jsx';
import { Input } from '../forms/Input.jsx';
import { useState } from "react";
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const LoginReq = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const login = async (e) => {
    e.preventDefault();
    setMessage('Loading...');
    try {
      const res = await axios.post(`${API_URL}/login`, {
        email,
        password
      });
      setMessage(JSON.stringify(res.data, null, 2));
    } catch (err) {
      console.log('Error:', err.response);
      const res = err.response?.data 
        ? JSON.stringify(err.response.data, null, 2) 
        : 'Login failed';
      setMessage(res);
    }
  };

  return (
    <Request title={'LOGIN REQUEST'} onSubmit={login} output={message}>
      <Input 
        label={'Email'} 
        type={'email'}
        value={email}
        placeholder={'fakeemail19@gmail.com'}
        onChange={(e) => setEmail(e.target.value)}/>
      <Input 
        label={'Password'} 
        type={'password'} 
        value={password}
        placeholder={'fakePassword9@'}
        onChange={(e) => setPassword(e.target.value)}/>
    </Request>
  );
}