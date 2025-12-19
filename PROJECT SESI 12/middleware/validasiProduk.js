const validasiProduk = (req, res, next) => {
  const { nama, harga } = req.body;

  if (!nama || !harga) {
    return res.status(400).json({
      message: 'Nama dan harga wajib diisi'
    });
  }

  next();
};

module.exports = validasiProduk;
