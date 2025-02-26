import phantomauth from 'phantomauth';
import dotenv from 'dotenv';
import path from 'path';
import express from 'express';

dotenv.config();

const API_URL = process.env.API_URL;
const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT;

const pa = await phantomauth(MONGO_URI, API_URL);
const {app, verifyToken, verify2FA } = pa;

app.use(express.static(path.resolve('../frontend/dist')));

app.use(API_URL + '/protected-1', verifyToken, (req, res) => {
  return res.status(200).json({
    success: true,
    message: 'Token verified'
  })
});
app.use(API_URL + '/protected-2', verify2FA, (req, res) => {
  return res.status(200).json({
    success: true,
    message: '2FA verified'
  })
});

// Catch-all route for React Router
app.get('*', (req, res) => {
  res.sendFile(path.resolve('../frontend/dist/index.html'));
});

app.listen(PORT, () => {

});