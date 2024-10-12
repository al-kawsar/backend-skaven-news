// src/routes/likeRoutes.js
const express = require('express');
const router = express.Router();
const LikeController = require('../modules/like/likeController');
const authMiddleware = require('../middlewares/authMiddleware');

// Route untuk "like" berita
router.post('/news/:newsId/like', authMiddleware, LikeController.likeNews);

// Route untuk "unlike" berita
router.delete('/news/:newsId/unlike', authMiddleware, LikeController.unlikeNews);

// Route untuk mendapatkan jumlah "like" pada berita
router.get('/news/:newsId/likes', LikeController.getLikesCount);

module.exports = router;
