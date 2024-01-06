const path = require('path');
const express = require('express');
const app = express();

const tagsData = require('./data.json');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/t/:tag', (req, res) => {
  const { tag } = req.params;
  const data = tagsData[tag];

  if (data) {
    res.render('tag', { data });
  } else {
    res.render('notfound', { tag });
  }
});

app.get('/cats', (req, res) => {
  const cats = [
    'Whiskers',
    'Mr. Meowington',
    'Fluffykins',
    'Mittens',
    'Sir Purr-a-lot',
    'Princess Paws',
    'Fuzzy Wuzzy',
    'Socks',
    'Cheddar Paws',
    'Purrfecto',
  ];

  res.render('cats', { cats });
});

app.get('/rand', (req, res) => {
  const num = Math.floor(Math.random() * 20) + 1;
  res.render('random', { num });
});

app.listen(8001, () => {
  console.log(`listening on host http://localhost:8001`);
});
