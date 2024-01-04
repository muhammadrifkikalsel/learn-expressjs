const express = require('express');

const app = express();

app.use((req, res) => {
  console.log('Hore, we got request.');

  res.send('Halo Rifki ini string dari response');
});

app.listen(8001, () => {
  console.log('Server is running on http://localhost:8001');
});
