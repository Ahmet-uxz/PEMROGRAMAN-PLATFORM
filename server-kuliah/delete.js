const http = require('http');

const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/mahasiswa/20231111',
    method: 'DELETE'
};

const req = http.request(options, res => {
    res.on('data', chunk => {
        console.log("Response:", chunk.toString());
    });
});

req.end();
