const express = require('express');
const app = express();
const mhs = require('./controllers/mahasiswaController');

app.use(express.json());

app.get('/mahasiswa', mhs.getMahasiswa);
app.get('/mahasiswa/:nim', mhs.getMahasiswaByNim);
app.post('/mahasiswa', mhs.addMahasiswa);
app.put('/mahasiswa/:nim', mhs.updateMahasiswa);
app.delete('/mahasiswa/:nim', mhs.deleteMahasiswa);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
