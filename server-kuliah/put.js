const http = require('http');

const data = JSON.stringify({
    nama: "Nama Baru",
    alamat: "Alamat Baru",
    prodi: "SI",
    gender: "P"
});

const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/mahasiswa/20231111',
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
    }
};

const req = http.request(options, res => {
    res.on('data', chunk => {
        console.log("Response:", chunk.toString());
    });
});

req.write(data);
req.end();
