// src/modules/role/roleRepository.js
const pool = require('../../config/database');

class RoleRepository {
    async createRole(name, description, permissions) {
        const result = await pool.query(
            `INSERT INTO roles (name, description, permissions)
             VALUES ($1, $2, $3) RETURNING *`,
            [name, description, permissions]
        );
        return result.rows[0];
    }

    async getAllRoles() {
        const result = await pool.query(`SELECT * FROM roles ORDER BY created_at DESC`);
        return result.rows;
    }

    async getRoleById(roleId) {
        const result = await pool.query(`SELECT * FROM roles WHERE id = $1`, [roleId]);
        return result.rows[0];
    }

    async updateRole(roleId, name, description, permissions) {
        const result = await pool.query(
            `UPDATE roles SET name = $1, description = $2, permissions = $3, updated_at = CURRENT_TIMESTAMP
             WHERE id = $4 RETURNING *`,
            [name, description, permissions, roleId]
        );
        return result.rows[0];
    }

    async deleteRole(roleId) {
        await pool.query(`DELETE FROM roles WHERE id = $1`, [roleId]);
    }
}

module.exports = new RoleRepository();
