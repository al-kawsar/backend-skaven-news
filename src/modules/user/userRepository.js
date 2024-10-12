// src/modules/user/userRepository.js
const pool = require('../../config/database');

class UserRepository {
    async createUser(username, password, email, firstName, lastName, phone, profilePicture, bio, roleId) {
        const result = await pool.query(
            `INSERT INTO users (username, password, email, first_name, last_name, phone, profile_picture, bio, role_id)
             VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`,
            [username, password, email, firstName, lastName, phone, profilePicture, bio, roleId]
        );
        return result.rows[0];
    }

    async getAllUsers() {
        const result = await pool.query(`SELECT * FROM users WHERE is_deleted = false ORDER BY created_at DESC`);
        return result.rows;
    }

    async getUserById(userId) {
        const result = await pool.query(`SELECT * FROM users WHERE id = $1 AND is_deleted = false`, [userId]);
        return result.rows[0];
    }

    async updateUser(userId, username, email, firstName, lastName, phone, profilePicture, bio, roleId) {
        const result = await pool.query(
            `UPDATE users SET username = $1, email = $2, first_name = $3, last_name = $4, phone = $5, 
             profile_picture = $6, bio = $7, role_id = $8, updated_at = CURRENT_TIMESTAMP
             WHERE id = $9 RETURNING *`,
            [username, email, firstName, lastName, phone, profilePicture, bio, roleId, userId]
        );
        return result.rows[0];
    }

    async deleteUser(userId) {
        await pool.query(`UPDATE users SET is_deleted = true WHERE id = $1`, [userId]);
    }
}

module.exports = new UserRepository();
