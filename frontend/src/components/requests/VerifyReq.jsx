import { Request } from '../requests/Request.jsx';
import { useState } from "react";
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const VerifyReq = () => {
  const [message, setMessage] = useState('');
  const verifyToken = async (e) => {
    e.preventDefault(); 
    setMessage('Loading...');
    try {
      const res = await axios.get(`${API_URL}/protected-1`, {
        withCredentials: true 
      });
      setMessage(JSON.stringify(res.data, null, 2));
    } catch (err) {
      console.log('Error:', err.response);
      const res = err.response?.data 
        ? JSON.stringify(err.response.data, null, 2) 
        : 'Token verification failed';
      setMessage(res);
    }
  };

  return (
    <Request title={'VERIFY TOKEN REQUEST'} onSubmit={verifyToken} output={message} />
  );
}