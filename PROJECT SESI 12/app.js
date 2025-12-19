const express = require('express');
const app = express();

/* =========================
   IMPORT MIDDLEWARE
========================= */
const logging = require('./middleware/logging');
const validasiProduk = require('./middleware/validasiProduk');
const auth = require('./middleware/auth');
const executionTime = require('./middleware/executionTime');
const jamAkses = require('./middleware/jamAkses');

app.use(express.json());
app.use(logging);        
app.use(executionTime);   
app.use(jamAkses);         

app.get('/', (req, res) => {
  res.send('Server Express berjalan');
});

app.post('/produk', validasiProduk, (req, res) => {
  res.json({
    message: 'Produk berhasil ditambahkan',
    data: req.body
  });
});

app.delete('/produk/:id', auth, (req, res) => {
  res.json({
    message: `Produk dengan id ${req.params.id} berhasil dihapus`
  });
});

app.listen(3000, () => {
  console.log('Server berjalan di http://localhost:3000');
});
