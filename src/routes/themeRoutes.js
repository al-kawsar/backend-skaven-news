// src/routes/themeRoutes.js
const express = require('express');
const router = express.Router();
const ThemeController = require('../modules/theme/themeController');
const authMiddleware = require('../middlewares/authMiddleware');

// Mendapatkan semua theme
router.get('/themes', authMiddleware, ThemeController.getAllThemes);

// Mendapatkan theme berdasarkan ID
router.get('/themes/:themeId', authMiddleware, ThemeController.getThemeById);

// Membuat theme baru
router.post('/themes', authMiddleware, ThemeController.createTheme);

// Memperbarui theme berdasarkan ID
router.put('/themes/:themeId', authMiddleware, ThemeController.updateTheme);

// Menghapus theme berdasarkan ID
router.delete('/themes/:themeId', authMiddleware, ThemeController.deleteTheme);

// Mengaktifkan theme berdasarkan ID
router.put('/themes/:themeId/activate', authMiddleware, ThemeController.activateTheme);

// Menonaktifkan theme berdasarkan ID
router.put('/themes/:themeId/deactivate', authMiddleware, ThemeController.deactivateTheme);

module.exports = router;
