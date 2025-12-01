const db = require('../models/db');

exports.getMahasiswa = (req, res) => {
    db.query("SELECT * FROM mahasiswa", (err, result) => {
        if (err) throw err;
        res.json(result);
    });
};

exports.getMahasiswaByNim = (req, res) => {
    const nim = req.params.nim;

    db.query("SELECT * FROM mahasiswa WHERE nim=?", [nim], (err, result) => {
        if (err) throw err;

        if (result.length === 0) {
            res.send("Data tidak ditemukan");
        } else {
            res.json(result[0]);
        }
    });
};

exports.addMahasiswa = (req, res) => {
    const data = req.body;

    db.query("INSERT INTO mahasiswa SET ?", data, (err, result) => {
        if (err) throw err;
        res.send("Data mahasiswa berhasil ditambahkan!");
    });
};

exports.updateMahasiswa = (req, res) => {
    const nim = req.params.nim;
    const data = req.body;

    db.query("UPDATE mahasiswa SET ? WHERE nim=?", [data, nim], (err) => {
        if (err) throw err;
        res.send("Data mahasiswa berhasil diupdate!");
    });
};

exports.deleteMahasiswa = (req, res) => {
    const nim = req.params.nim;

    db.query("DELETE FROM mahasiswa WHERE nim=?", [nim], (err, result) => {
        if (err) throw err;

        if (result.affectedRows === 0) {
            res.send("Data tidak ditemukan");
        } else {
            res.send("Data mahasiswa berhasil dihapus!");
        }
    });
};
