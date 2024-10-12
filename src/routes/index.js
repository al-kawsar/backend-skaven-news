const express = require('express');
const router = express.Router();

// Import semua rute
const analyticRoutes = require("./analyticRoutes.js");
const authRoutes = require("./authRoutes.js");
const bookmarkRoutes = require("./bookmarkRoutes.js");
const categoryRoutes = require("./categoryRoutes.js");
const commentRoutes = require("./commentRoutes.js");
const likeRoutes = require("./likeRoutes.js");
const newsRoutes = require("./newsRoutes.js");
const notificationRoutes = require("./notificationRoutes.js");
const roleRoutes = require("./roleRoutes.js");
const themeRoutes = require("./themeRoutes.js");
const translationRoutes = require("./translationRoutes.js");
const userRoutes = require("./userRoutes.js");
const videoRoutes = require("./videoRoutes.js"); // Perbaiki kesalahan ketik di sini

// Menggunakan rute
router.use("/api", authRoutes);
router.use("/api", newsRoutes);
router.use("/api", commentRoutes);
router.use("/api", categoryRoutes);
router.use("/api", bookmarkRoutes); // Tambahkan rute bookmark
router.use("/api", analyticRoutes); // Tambahkan rute analitik
router.use("/api", likeRoutes); // Tambahkan rute like
router.use("/api", notificationRoutes); // Tambahkan rute notifikasi
router.use("/api", roleRoutes); // Tambahkan rute role
router.use("/api", themeRoutes); // Tambahkan rute tema
router.use("/api", translationRoutes); // Tambahkan rute terjemahan
router.use("/api", userRoutes); // Tambahkan rute pengguna
router.use("/api", videoRoutes); // Tambahkan rute video

module.exports = router;
