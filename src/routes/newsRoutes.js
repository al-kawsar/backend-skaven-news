// src/routes/newsRoutes.js
const express = require("express");
const router = express.Router();
const NewsController = require("../modules/news/newsController");
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/news", authMiddleware, NewsController.create);
router.get("/news", NewsController.getAll);
router.get("/news/:id", NewsController.getById);
router.put("/news/:id", authMiddleware, NewsController.update);
router.delete("/news/:id", authMiddleware, NewsController.delete);

module.exports = router;
