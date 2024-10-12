// src/modules/analytic/analyticRepository.js
const pool = require('../../config/database');

class AnalyticRepository {
    async createAnalytic(newsId, userId, action, ipAddress, deviceInfo) {
        const result = await pool.query(
            `INSERT INTO analytic (news_id, user_id, action, ip_address, device_info)
             VALUES ($1, $2, $3, $4, $5) RETURNING *`,
            [newsId, userId, action, ipAddress, deviceInfo]
        );
        return result.rows[0];
    }

    async getAllAnalytics() {
        const result = await pool.query(`SELECT * FROM analytic ORDER BY created_at DESC`);
        return result.rows;
    }

    async getAnalyticsByUserId(userId) {
        const result = await pool.query(
            `SELECT * FROM analytic WHERE user_id = $1 ORDER BY created_at DESC`,
            [userId]
        );
        return result.rows;
    }

    async updateAnalytic(id, newsId, userId, action, ipAddress, deviceInfo) {
        const result = await pool.query(
            `UPDATE analytic SET news_id = $1, user_id = $2, action = $3,
             ip_address = $4, device_info = $5, updated_at = CURRENT_TIMESTAMP
             WHERE id = $6 RETURNING *`,
            [newsId, userId, action, ipAddress, deviceInfo, id]
        );
        return result.rows[0];
    }

    async deleteAnalytic(id) {
        await pool.query(`DELETE FROM analytic WHERE id = $1`, [id]);
    }
}

module.exports = new AnalyticRepository();
