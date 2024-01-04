const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('This is home page');
});

app.get('/transactions', (req, res) => {
  res.send('This is transactions page');
});

app.post('/transactions', (req, res) => {
  res.send('This is transactions page from post');
});

app.get('/about', (req, res) => {
  res.send('This is about page');
});

app.get('*', (req, res) => {
  res.send('Page not found');
});

app.listen(8001, () => {
  console.log('Server is running on http://localhost:8001');
});
