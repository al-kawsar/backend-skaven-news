// src/routes/notificationRoutes.js
const express = require('express');
const router = express.Router();
const NotificationController = require('../modules/notification/notificationController');
const authMiddleware = require('../middlewares/authMiddleware');

// Mendapatkan notifikasi pengguna
router.get('/notifications', authMiddleware, NotificationController.getUserNotifications);

// Menandai notifikasi sebagai dibaca
router.patch('/notifications/:notificationId/read', authMiddleware, NotificationController.markAsRead);

// Menghapus notifikasi
router.delete('/notifications/:notificationId', authMiddleware, NotificationController.deleteNotification);

module.exports = router;
