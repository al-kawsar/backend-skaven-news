// src/routes/userRoutes.js
const express = require('express');
const router = express.Router();
const UserController = require('../modules/user/userController');
const authMiddleware = require('../middlewares/authMiddleware');

// Mendapatkan semua pengguna
router.get('/users', authMiddleware, UserController.getAllUsers);

// Mendapatkan pengguna berdasarkan ID
router.get('/users/:userId', authMiddleware, UserController.getUserById);

// Membuat pengguna baru
router.post('/users', UserController.createUser);

// Memperbarui pengguna
router.put('/users/:userId', authMiddleware, UserController.updateUser);

// Menghapus pengguna
router.delete('/users/:userId', authMiddleware, UserController.deleteUser);

module.exports = router;
