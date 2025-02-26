import { Request } from '../requests/Request.jsx';
import { useState } from "react";
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const LogoutReq = () => {
  const [message, setMessage] = useState('');
  const logout = async (e) => {
    e.preventDefault();
    setMessage('Loading...');
    try {
      const res = await axios.post(`${API_URL}/logout`, {}, {
        withCredentials: true
      });
      setMessage(JSON.stringify(res.data, null, 2));
    } catch (err) {
      console.log('Error:', err.response);
      const res = err.response?.data 
        ? JSON.stringify(err.response.data, null, 2) 
        : 'Logout failed';
      setMessage(res);
    }
  };

  return (
    <Request title={'LOGOUT REQUEST'} onSubmit={logout} output={message} />
  );
}