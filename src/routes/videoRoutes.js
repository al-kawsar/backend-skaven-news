// src/routes/videoRoutes.js
const express = require('express');
const router = express.Router();
const VideoController = require('../modules/video/videoController');
const authMiddleware = require('../middlewares/authMiddleware');

// Mendapatkan semua video
router.get('/videos', authMiddleware, VideoController.getAllVideos);

// Mendapatkan video berdasarkan ID
router.get('/videos/:videoId', authMiddleware, VideoController.getVideoById);

// Membuat video baru
router.post('/videos', authMiddleware, VideoController.createVideo);

// Memperbarui video
router.put('/videos/:videoId', authMiddleware, VideoController.updateVideo);

// Menghapus video
router.delete('/videos/:videoId', authMiddleware, VideoController.deleteVideo);

// Mempublikasikan video
router.post('/videos/:videoId/publish', authMiddleware, VideoController.publishVideo);

// Meng-unpublish video
router.post('/videos/:videoId/unpublish', authMiddleware, VideoController.unpublishVideo);

// Menyukai video
router.post('/videos/:videoId/like', authMiddleware, VideoController.likeVideo);

// Tidak menyukai video
router.post('/videos/:videoId/dislike', authMiddleware, VideoController.dislikeVideo);

module.exports = router;
