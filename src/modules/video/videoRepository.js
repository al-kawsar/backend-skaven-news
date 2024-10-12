// src/modules/video/videoRepository.js
const pool = require('../../config/database');

class VideoRepository {
    async createVideo(userId, title, description, url, thumbnailUrl, categoryId) {
        const result = await pool.query(
            `INSERT INTO videos (user_id, title, description, url, thumbnail_url, category_id)
             VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
            [userId, title, description, url, thumbnailUrl, categoryId]
        );
        return result.rows[0];
    }

    async getAllVideos() {
        const result = await pool.query(`SELECT * FROM videos WHERE is_deleted = false ORDER BY created_at DESC`);
        return result.rows;
    }

    async getVideoById(videoId) {
        const result = await pool.query(`SELECT * FROM videos WHERE id = $1 AND is_deleted = false`, [videoId]);
        return result.rows[0];
    }

    async updateVideo(videoId, title, description, thumbnailUrl, categoryId) {
        const result = await pool.query(
            `UPDATE videos SET title = $1, description = $2, thumbnail_url = $3, category_id = $4, updated_at = CURRENT_TIMESTAMP
             WHERE id = $5 RETURNING *`,
            [title, description, thumbnailUrl, categoryId, videoId]
        );
        return result.rows[0];
    }

    async deleteVideo(videoId) {
        await pool.query(`UPDATE videos SET is_deleted = true WHERE id = $1`, [videoId]);
    }

    async publishVideo(videoId) {
        await pool.query(`UPDATE videos SET is_published = true WHERE id = $1`, [videoId]);
    }

    async unpublishVideo(videoId) {
        await pool.query(`UPDATE videos SET is_published = false WHERE id = $1`, [videoId]);
    }

    async incrementViews(videoId) {
        await pool.query(`UPDATE videos SET views_count = views_count + 1 WHERE id = $1`, [videoId]);
    }

    async incrementLikes(videoId) {
        await pool.query(`UPDATE videos SET likes_count = likes_count + 1 WHERE id = $1`, [videoId]);
    }

    async incrementDislikes(videoId) {
        await pool.query(`UPDATE videos SET dislikes_count = dislikes_count + 1 WHERE id = $1`, [videoId]);
    }
}

module.exports = new VideoRepository();
