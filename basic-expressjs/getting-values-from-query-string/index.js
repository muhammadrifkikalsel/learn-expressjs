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

app.get('/article/:title', (req, res) => {
  const { title } = req.params;

  res.send(`You are reading article with title : ${title}`);
});

app.get('/article/:title/:category/:author', (req, res) => {
  const { title, category, author } = req.params;

  res.send(
    `You are reading article with title : ${title}, category : ${category}, and author is ${author}`
  );
});

app.get('/search', (req, res) => {
  const { q } = req.query;

  if (!q) {
    return res.send('<h1>Tidak ada data yang dicari</h1>');
  }

  res.send(`<h1>Search keyword : ${q}</h1>`);
});

app.get('*', (req, res) => {
  res.send('Page not found');
});

app.listen(8001, () => {
  console.log('Server is running on http://localhost:8001');
});
