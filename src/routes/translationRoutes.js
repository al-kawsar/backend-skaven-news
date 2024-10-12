// src/routes/translationRoutes.js
const express = require('express');
const router = express.Router();
const TranslationController = require('../modules/translation/translationController');

// Mendapatkan semua terjemahan
router.get('/translations', TranslationController.getAllTranslations);

// Mendapatkan terjemahan berdasarkan kunci dan bahasa
router.get('/translations/:key/:language', TranslationController.getTranslationByKeyAndLanguage);

// Membuat terjemahan baru
router.post('/translations', TranslationController.createTranslation);

// Memperbarui terjemahan
router.put('/translations/:id', TranslationController.updateTranslation);

// Menghapus terjemahan
router.delete('/translations/:id', TranslationController.deleteTranslation);

module.exports = router;
