const express = require('express');

const app = express();
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ ok: true, service: 'curieosity-backend' });
});

app.post('/auth/google', (req, res) => {
  res.json({ message: 'Google Auth route placeholder' });
});

app.get('/auth/spotify', (req, res) => {
  res.json({ message: 'Spotify route placeholder' });
});

app.get('/auth/google-drive', (req, res) => {
  res.json({ message: 'Google Drive route placeholder' });
});

module.exports = app;
