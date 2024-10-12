// src/modules/category/categoryRepository.js
const pool = require('../../config/database');

class CategoryRepository {
    async createCategory(name, description, parentId) {
        const result = await pool.query(
            'INSERT INTO categories (name, description, parent_id) VALUES ($1, $2, $3) RETURNING *',
            [name, description, parentId]
        );
        return result.rows[0];
    }

    async getCategories() {
        const result = await pool.query(
            'SELECT * FROM categories ORDER BY created_at ASC'
        );
        return result.rows;
    }

    async getCategoryById(id) {
        const result = await pool.query('SELECT * FROM categories WHERE id = $1', [id]);
        return result.rows[0];
    }

    async updateCategory(id, name, description, parentId) {
        const result = await pool.query(
            'UPDATE categories SET name = $1, description = $2, parent_id = $3, updated_at = CURRENT_TIMESTAMP WHERE id = $4 RETURNING *',
            [name, description, parentId, id]
        );
        return result.rows[0];
    }

    async deleteCategory(id) {
        await pool.query('DELETE FROM categories WHERE id = $1', [id]);
    }

    async getSubCategories(parentId) {
        const result = await pool.query('SELECT * FROM categories WHERE parent_id = $1', [parentId]);
        return result.rows;
    }
}

module.exports = new CategoryRepository();
