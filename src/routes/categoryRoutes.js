// src/routes/categoryRoutes.js
const express = require('express');
const router = express.Router();
const CategoryController = require('../modules/category/categoryController');
const authMiddleware = require('../middlewares/authMiddleware');

// Route untuk membuat kategori baru
router.post('/categories', authMiddleware, CategoryController.createCategory);

// Route untuk mendapatkan semua kategori
router.get('/categories', CategoryController.getCategories);

// Route untuk mendapatkan kategori berdasarkan ID
router.get('/categories/:id', CategoryController.getCategoryById);

// Route untuk memperbarui kategori
router.put('/categories/:id', authMiddleware, CategoryController.updateCategory);

// Route untuk menghapus kategori
router.delete('/categories/:id', authMiddleware, CategoryController.deleteCategory);

// Route untuk mendapatkan subkategori berdasarkan parentId
router.get('/categories/:parentId/subcategories', CategoryController.getSubCategories);

module.exports = router;
