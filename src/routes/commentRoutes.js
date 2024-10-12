// src/routes/commentRoutes.js
const express = require('express');
const router = express.Router();
const CommentController = require('../modules/comment/commentController');
const authMiddleware = require('../middlewares/authMiddleware');

// Route untuk membuat komentar baru
router.post('/comments', authMiddleware, CommentController.createComment);

// Route untuk mendapatkan komentar pada berita tertentu
router.get('/news/:newsId/comments', CommentController.getCommentsByNews);

// Route untuk memperbarui komentar
router.put('/comments/:commentId', authMiddleware, CommentController.updateComment);

// Route untuk menghapus komentar (soft delete)
router.delete('/comments/:commentId', authMiddleware, CommentController.deleteComment);

// Route untuk menyetujui komentar (moderasi)
router.put('/comments/:commentId/approve', authMiddleware, CommentController.approveComment);

// Route untuk menambah like pada komentar
router.post('/comments/:commentId/like', authMiddleware, CommentController.likeComment);

module.exports = router;
