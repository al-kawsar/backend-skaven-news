// src/routes/roleRoutes.js
const express = require('express');
const router = express.Router();
const RoleController = require('../modules/role/roleController');
const authMiddleware = require('../middlewares/authMiddleware');

// Mendapatkan semua role
router.get('/roles', authMiddleware, RoleController.getAllRoles);

// Mendapatkan role berdasarkan ID
router.get('/roles/:roleId', authMiddleware, RoleController.getRoleById);

// Membuat role baru
router.post('/roles', authMiddleware, RoleController.createRole);

// Memperbarui role berdasarkan ID
router.put('/roles/:roleId', authMiddleware, RoleController.updateRole);

// Menghapus role berdasarkan ID
router.delete('/roles/:roleId', authMiddleware, RoleController.deleteRole);

module.exports = router;
