// src/modules/news/newsModel.js
const pool = require('../../config/database');

class NewsModel {
    async createNews(title, content, authorId) {
        const result = await pool.query(
            'INSERT INTO news (title, content, author_id, created_at) VALUES ($1, $2, $3, NOW()) RETURNING *',
            [title, content, authorId]
        );
        return result.rows[0];
    }

    async getAllNews() {
        const result = await pool.query('SELECT * FROM news ORDER BY created_at DESC');
        return result.rows;
    }

    async getNewsById(id) {
        const result = await pool.query('SELECT * FROM news WHERE id = $1', [id]);
        return result.rows[0];
    }

    async updateNews(id, title, content) {
        const result = await pool.query(
            'UPDATE news SET title = $1, content = $2 WHERE id = $3 RETURNING *',
            [title, content, id]
        );
        return result.rows[0];
    }

    async deleteNews(id) {
        const result = await pool.query('DELETE FROM news WHERE id = $1 RETURNING *', [id]);
        return result.rows[0];
    }
}

module.exports = new NewsModel();
