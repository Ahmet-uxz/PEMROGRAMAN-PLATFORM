const express = require('express');
const router = express.Router();
const db = require('../db');


router.get('/', (req, res) => {
    db.query("SELECT * FROM buku", (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.json(result);
    });
});


router.get('/:id', (req, res) => {
    const id = req.params.id;

    db.query("SELECT * FROM buku WHERE id = ?", [id], (err, result) => {
        if (err) return res.status(500).json({ error: err });

        if (result.length === 0) {
            return res.status(404).json({ message: "Buku tidak ditemukan" });
        }

        res.json(result[0]);
    });
});


router.post('/', (req, res) => {
    const { judul, penulis, tahun } = req.body;

    db.query(
        "INSERT INTO buku (judul, penulis, tahun) VALUES (?, ?, ?)",
        [judul, penulis, tahun],
        (err, result) => {
            if (err) return res.status(500).json({ error: err });

            res.json({ 
                message: "Buku berhasil ditambahkan",
                id: result.insertId
            });
        }
    );
});


router.put('/:id', (req, res) => {
    const id = req.params.id;
    const { judul, penulis, tahun } = req.body;

    db.query(
        "UPDATE buku SET judul = ?, penulis = ?, tahun = ? WHERE id = ?",
        [judul, penulis, tahun, id],
        (err) => {
            if (err) return res.status(500).json({ error: err });

            res.json({ message: "Buku berhasil diperbarui" });
        }
    );
});


router.delete('/:id', (req, res) => {
    const id = req.params.id;

    db.query("DELETE FROM buku WHERE id = ?", [id], (err) => {
        if (err) return res.status(500).json({ error: err });

        res.json({ message: "Buku berhasil dihapus" });
    });
});

module.exports = router;
