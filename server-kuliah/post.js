const http = require('http');

const data = JSON.stringify({
    nim: "20231111",
    nama: "Mahasiswa Baru",
    gender: "L",
    prodi: "TI",
    alamat: "Makassar"
});

const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/mahasiswa',
    method: 'POST',
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
