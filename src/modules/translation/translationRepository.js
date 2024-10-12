// src/modules/translation/translationRepository.js
const pool = require('../../config/database');

class TranslationRepository {
    async createTranslation(key, language, value, context) {
        const result = await pool.query(
            `INSERT INTO translations (key, language, value, context)
             VALUES ($1, $2, $3, $4) RETURNING *`,
            [key, language, value, context]
        );
        return result.rows[0];
    }

    async getAllTranslations() {
        const result = await pool.query(`SELECT * FROM translations ORDER BY created_at DESC`);
        return result.rows;
    }

    async getTranslationByKeyAndLanguage(key, language) {
        const result = await pool.query(
            `SELECT * FROM translations WHERE key = $1 AND language = $2`,
            [key, language]
        );
        return result.rows[0];
    }

    async updateTranslation(id, key, language, value, context) {
        const result = await pool.query(
            `UPDATE translations SET key = $1, language = $2, value = $3, context = $4, updated_at = CURRENT_TIMESTAMP
             WHERE id = $5 RETURNING *`,
            [key, language, value, context, id]
        );
        return result.rows[0];
    }

    async deleteTranslation(id) {
        await pool.query(`DELETE FROM translations WHERE id = $1`, [id]);
    }
}

module.exports = new TranslationRepository();
