const express = require('express');
const fetch = require('node-fetch');
const app = express();
const PORT = 3000;

// Enable CORS for frontend
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.header('Access-Control-Allow-Methods', 'GET, POST');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(express.json());

app.get('/api/furniture', async (req, res) => {
  try {
    const response = await fetch('https://furniture-api.fly.dev');
    if (!response.ok) throw new Error(`API error! Status: ${response.status}`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ error: 'Failed to fetch furniture data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});