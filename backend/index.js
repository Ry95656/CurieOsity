const express = require('express');
const app = express();

app.use(express.json());

app.post('/api/auth/google', (req, res) => {
    res.json({ message: 'Google Auth route' });
});

app.get('/api/auth/spotify', (req, res) => {
    res.json({ message: 'Spotify route' });
});

app.get('/api/auth/google-drive', (req, res) => {
    res.json({ message: 'Google Drive route' });
});

app.get('/api/health', (req, res) => {
    res.json({ status: 'ok' });
});

module.exports = app;