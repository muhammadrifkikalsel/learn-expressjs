const express = require('express');

const app = express();

app.use(() => {
  console.log('Hore, we got request.');
});

app.listen(8001, () => {
  console.log('Server is running on http://localhost:8001');
});
