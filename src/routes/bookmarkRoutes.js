// src/routes/bookmarkRoutes.js
const express = require('express');
const router = express.Router();
const BookmarkController = require('../modules/bookmark/bookmarkController');

// Membuat bookmark baru
router.post('/bookmarks', BookmarkController.createBookmark);

// Mendapatkan semua bookmark untuk pengguna
router.get('/bookmarks/user/:userId', BookmarkController.getAllBookmarks);

// Menghapus bookmark
router.delete('/bookmarks/:id', BookmarkController.deleteBookmark);

module.exports = router;
