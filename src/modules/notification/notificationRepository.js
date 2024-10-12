// src/modules/notification/notificationRepository.js
const pool = require('../../config/database');

class NotificationRepository {
    async createNotification(userId, type, content, referenceId, referenceType) {
        const result = await pool.query(
            `INSERT INTO notifications (user_id, type, content, reference_id, reference_type)
             VALUES ($1, $2, $3, $4, $5) RETURNING *`,
            [userId, type, content, referenceId, referenceType]
        );
        return result.rows[0];
    }

    async getUserNotifications(userId) {
        const result = await pool.query(
            `SELECT * FROM notifications WHERE user_id = $1 AND is_deleted = false ORDER BY created_at DESC`,
            [userId]
        );
        return result.rows;
    }

    async markAsRead(notificationId) {
        await pool.query(
            `UPDATE notifications SET is_read = true, updated_at = CURRENT_TIMESTAMP WHERE id = $1`,
            [notificationId]
        );
    }

    async deleteNotification(notificationId) {
        await pool.query(
            `UPDATE notifications SET is_deleted = true, updated_at = CURRENT_TIMESTAMP WHERE id = $1`,
            [notificationId]
        );
    }
}

module.exports = new NotificationRepository();
