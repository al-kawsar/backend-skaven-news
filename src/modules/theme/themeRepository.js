// src/modules/theme/themeRepository.js
const pool = require('../../config/database');

class ThemeRepository {
    async createTheme(name, description, createdBy) {
        const result = await pool.query(
            `INSERT INTO themes (name, description, created_by)
             VALUES ($1, $2, $3) RETURNING *`,
            [name, description, createdBy]
        );
        return result.rows[0];
    }

    async getAllThemes() {
        const result = await pool.query(`SELECT * FROM themes ORDER BY created_at DESC`);
        return result.rows;
    }

    async getThemeById(themeId) {
        const result = await pool.query(`SELECT * FROM themes WHERE id = $1`, [themeId]);
        return result.rows[0];
    }

    async updateTheme(themeId, name, description, updatedBy) {
        const result = await pool.query(
            `UPDATE themes SET name = $1, description = $2, updated_by = $3, updated_at = CURRENT_TIMESTAMP
             WHERE id = $4 RETURNING *`,
            [name, description, updatedBy, themeId]
        );
        return result.rows[0];
    }

    async deleteTheme(themeId) {
        await pool.query(`DELETE FROM themes WHERE id = $1`, [themeId]);
    }

    async activateTheme(themeId) {
        await pool.query(`UPDATE themes SET is_active = true WHERE id = $1`, [themeId]);
    }

    async deactivateTheme(themeId) {
        await pool.query(`UPDATE themes SET is_active = false WHERE id = $1`, [themeId]);
    }
}

module.exports = new ThemeRepository();
