// src/modules/bookmark/bookmarkRepository.js
const pool = require('../../config/database');

class BookmarkRepository {
    async createBookmark(userId, newsId, videoId) {
        const result = await pool.query(
            `INSERT INTO bookmarks (user_id, news_id, video_id)
             VALUES ($1, $2, $3) RETURNING *`,
            [userId, newsId, videoId]
        );
        return result.rows[0];
    }

    async getAllBookmarks(userId) {
        const result = await pool.query(
            `SELECT * FROM bookmarks WHERE user_id = $1 ORDER BY created_at DESC`,
            [userId]
        );
        return result.rows;
    }

    async deleteBookmark(id) {
        await pool.query(`DELETE FROM bookmarks WHERE id = $1`, [id]);
    }
}

module.exports = new BookmarkRepository();
