// src/modules/like/likeController.js
const LikeService = require('./likeService');

class LikeController {
    async likeNews(req, res) {
        const { newsId } = req.params;
        const userId = req.user.id;

        try {
            const like = await LikeService.likeNews(userId, newsId);
            res.status(201).json(like);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async unlikeNews(req, res) {
        const { newsId } = req.params;
        const userId = req.user.id;

        try {
            await LikeService.unlikeNews(userId, newsId);
            res.status(204).json();
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async getLikesCount(req, res) {
        const { newsId } = req.params;

        try {
            const likesCount = await LikeService.getLikesCount(newsId);
            res.status(200).json({ likesCount });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = new LikeController();
