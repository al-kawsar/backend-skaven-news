// src/routes/analyticRoutes.js
const express = require('express');
const router = express.Router();
const AnalyticController = require('../modules/analytic/analyticController');

// Mendapatkan semua entri analitik
router.get('/analytics', AnalyticController.getAllAnalytics);

// Mendapatkan entri analitik berdasarkan user ID
router.get('/analytics/user/:userId', AnalyticController.getAnalyticsByUserId);

// Membuat entri analitik baru
router.post('/analytics', AnalyticController.createAnalytic);

// Memperbarui entri analitik
router.put('/analytics/:id', AnalyticController.updateAnalytic);

// Menghapus entri analitik
router.delete('/analytics/:id', AnalyticController.deleteAnalytic);

module.exports = router;
