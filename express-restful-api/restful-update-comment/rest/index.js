const path = require('path');
const { v4: uuidv4 } = require('uuid');
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const comments = [
  {
    id: uuidv4(),
    username: 'User123',
    text: 'Artikelnya sangat informatif, terima kasih!',
  },
  {
    id: uuidv4(),
    username: 'KucingManis',
    text: 'Sangat suka dengan tulisan Anda!',
  },
  {
    id: uuidv4(),
    username: 'PenaTajam',
    text: 'Bagus sekali, saya belajar banyak dari artikel ini.',
  },
  {
    id: uuidv4(),
    username: 'SiPembaca',
    text: 'Apakah ada sumber tambahan untuk topik ini?',
  },
  {
    id: uuidv4(),
    username: 'JagoBaca',
    text: 'Tulisan yang menarik, lanjutkan!',
  },
  {
    id: uuidv4(),
    username: 'PenikmatKata',
    text: 'Sangat menginspirasi, terima kasih telah berbagi!',
  },
  {
    id: uuidv4(),
    username: 'BelajarTulis',
    text: 'Bagaimana cara meningkatkan kemampuan menulis seperti Anda?',
  },
  {
    id: uuidv4(),
    username: 'CintaBahasa',
    text: 'Tulisan yang sangat bagus, saya suka sekali!',
  },
  {
    id: uuidv4(),
    username: 'SiPembacaKritis',
    text: 'Apakah argumen ini sudah teruji?',
  },
  {
    id: uuidv4(),
    username: 'PecintaLiterasi',
    text: 'Sangat menyenangkan membaca tulisan ini.',
  },
];

app.get('/comments', (req, res) => {
  res.render('comments/index', { comments });
});

app.get('/comments/create', (req, res) => {
  res.render('comments/create');
});

app.post('/comments', (req, res) => {
  const { username, text } = req.body;
  comments.push({ username, text, id: uuidv4() });
  res.redirect('/comments');
});

app.get('/comments/:id', (req, res) => {
  const { id } = req.params;
  const comment = comments.find((comment) => comment.id === id);
  res.render('comments/show', { comment });
});

app.patch('/comments/:id', (req, res) => {
  const { id } = req.params;
  const newComment = req.body.text;
  const comment = comments.find((comment) => comment.id === id);
  comment.text = newComment;
  console.log(newComment);
  console.log(comment);
  res.redirect('/comments');
});

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
