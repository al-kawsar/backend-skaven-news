// src/modules/comment/commentRepository.js
const pool = require('../../config/database');

class CommentRepository {
    async createComment(newsId, userId, parentId, content) {
        const result = await pool.query(
            'INSERT INTO comments (news_id, user_id, parent_id, content, is_approved) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [newsId, userId, parentId, content, false]
        );
        return result.rows[0];
    }

    async getCommentsByNews(newsId) {
        const result = await pool.query(
            `SELECT * FROM comments WHERE news_id = $1 AND is_deleted = false ORDER BY created_at ASC`,
            [newsId]
        );
        return result.rows;
    }

    async getCommentById(commentId) {
        const result = await pool.query('SELECT * FROM comments WHERE id = $1', [commentId]);
        return result.rows[0];
    }

    async updateComment(commentId, content) {
        const result = await pool.query(
            'UPDATE comments SET content = $1, updated_at = CURRENT_TIMESTAMP WHERE id = $2 RETURNING *',
            [content, commentId]
        );
        return result.rows[0];
    }

    async deleteComment(commentId) {
        await pool.query('UPDATE comments SET is_deleted = true WHERE id = $1', [commentId]);
    }

    async approveComment(commentId) {
        await pool.query('UPDATE comments SET is_approved = true WHERE id = $1', [commentId]);
    }

    async likeComment(commentId) {
        await pool.query('UPDATE comments SET likes_count = likes_count + 1 WHERE id = $1', [commentId]);
    }
}

module.exports = new CommentRepository();
