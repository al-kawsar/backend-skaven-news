// src/modules/like/likeService.js
const LikeRepository = require('./likeRepository');

class LikeService {
    async likeNews(userId, newsId) {
        const hasLiked = await LikeRepository.hasLiked(userId, newsId);
        if (hasLiked) {
            throw new Error('User has already liked this news');
        }
        return await LikeRepository.likeNews(userId, newsId);
    }

    async unlikeNews(userId, newsId) {
        const hasLiked = await LikeRepository.hasLiked(userId, newsId);
        if (!hasLiked) {
            throw new Error('User has not liked this news');
        }
        await LikeRepository.unlikeNews(userId, newsId);
    }

    async getLikesCount(newsId) {
        return await LikeRepository.getLikesCount(newsId);
    }
}

module.exports = new LikeService();
