const path = require('path');
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const comments = [
  {
    username: 'User123',
    text: 'Artikelnya sangat informatif, terima kasih!',
  },
  {
    username: 'KucingManis',
    text: 'Sangat suka dengan tulisan Anda!',
  },
  {
    username: 'PenaTajam',
    text: 'Bagus sekali, saya belajar banyak dari artikel ini.',
  },
  {
    username: 'SiPembaca',
    text: 'Apakah ada sumber tambahan untuk topik ini?',
  },
  {
    username: 'JagoBaca',
    text: 'Tulisan yang menarik, lanjutkan!',
  },
  {
    username: 'PenikmatKata',
    text: 'Sangat menginspirasi, terima kasih telah berbagi!',
  },
  {
    username: 'BelajarTulis',
    text: 'Bagaimana cara meningkatkan kemampuan menulis seperti Anda?',
  },
  {
    username: 'CintaBahasa',
    text: 'Tulisan yang sangat bagus, saya suka sekali!',
  },
  {
    username: 'SiPembacaKritis',
    text: 'Apakah argumen ini sudah teruji?',
  },
  {
    username: 'PecintaLiterasi',
    text: 'Sangat menyenangkan membaca tulisan ini.',
  },
];

app.get('/comments', (req, res) => {
  res.render('comments/index', { comments });
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
