const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const users = require('../data/users');

const router = express.Router();

router.post('/login', (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Validasi input
    if (!email || !password) {
      const error = new Error("Email dan password wajib diisi");
      error.statusCode = 400;
      throw error;
    }

    const user = users.find(u => u.email === email);
    if (!user) {
      const error = new Error("Login gagal: user tidak ditemukan");
      error.statusCode = 401;
      throw error;
    }

    const isMatch = bcrypt.compareSync(password, user.password);
    if (!isMatch) {
      const error = new Error("Login gagal: password salah");
      error.statusCode = 401;
      throw error;
    }

    // Generate JWT
    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES }
    );

    res.json({
      success: true,
      message: "Login berhasil",
      token
    });
  } catch (error) {
    next(error); // lempar ke errorHandler
  }
});

module.exports = router;