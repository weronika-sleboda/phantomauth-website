import { Request } from '../requests/Request.jsx';
import { Input } from '../forms/Input.jsx';
import { useState } from "react";
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const RegReq = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [bottrap, setBottrap] = useState('');
  const [message, setMessage] = useState('');
  const register = async (e) => {
    e.preventDefault();
    setMessage('Loading...');
    try {
      const res = await axios.post(`${API_URL}/register`, {
        email,
        password,
        bottrap
      });
      setMessage(JSON.stringify(res.data, null, 2));
    } catch (err) {
      console.log('Error:', err.response);
      const res = err.response?.data 
        ? JSON.stringify(err.response.data, null, 2) 
        : 'Registration failed';
      setMessage(res);
    }
  };

  return (
    <Request title={'REGISTER REQUEST'} onSubmit={register} output={message}>
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
      <input 
        value={bottrap} 
        type='text' 
        style={{display: 'none'}}
        onChange={(e) => setBottrap(e.target.value)}/>
    </Request>
  );
}



