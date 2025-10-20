const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const biodataRoutes = require('./routes/biodataRoutes');
app.use('/biodata', biodataRoutes);

app.get('/', (req, res) => {
  res.send('API CRUD Mahasiswa aktif. Gunakan endpoint /biodata');
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
