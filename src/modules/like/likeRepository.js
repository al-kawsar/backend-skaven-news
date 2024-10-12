// src/modules/like/likeRepository.js
const pool = require('../../config/database');

class LikeRepository {
    async likeNews(userId, newsId) {
        const result = await pool.query(
            'INSERT INTO likes (user_id, news_id) VALUES ($1, $2) ON CONFLICT (user_id, news_id) DO NOTHING RETURNING *',
            [userId, newsId]
        );
        return result.rows[0];
    }

    async unlikeNews(userId, newsId) {
        await pool.query('DELETE FROM likes WHERE user_id = $1 AND news_id = $2', [userId, newsId]);
    }

    async getLikesCount(newsId) {
        const result = await pool.query('SELECT COUNT(*) FROM likes WHERE news_id = $1', [newsId]);
        return parseInt(result.rows[0].count, 10);
    }

    async hasLiked(userId, newsId) {
        const result = await pool.query('SELECT * FROM likes WHERE user_id = $1 AND news_id = $2', [userId, newsId]);
        return result.rows.length > 0;
    }
}

module.exports = new LikeRepository();
