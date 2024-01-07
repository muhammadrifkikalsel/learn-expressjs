const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/order', (req, res) => {
  res.send('GET order response');
});

app.post('/order', (req, res) => {
  const { item, qyt } = req.body;
  res.send(`Item : ${item} - Qyt : ${qyt}`);
});

app.listen('8001', () => {
  console.log(`Server is running on : http://localhost:8001`);
});
