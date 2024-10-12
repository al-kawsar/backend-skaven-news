// src/modules/role/roleController.js
const RoleService = require('./roleService');

class RoleController {
    async createRole(req, res) {
        const { name, description, permissions } = req.body;
        try {
            const newRole = await RoleService.createRole(name, description, permissions);
            res.status(201).json(newRole);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getAllRoles(req, res) {
        try {
            const roles = await RoleService.getAllRoles();
            res.status(200).json(roles);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getRoleById(req, res) {
        const { roleId } = req.params;
        try {
            const role = await RoleService.getRoleById(roleId);
            if (!role) {
                return res.status(404).json({ message: 'Role not found' });
            }
            res.status(200).json(role);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async updateRole(req, res) {
        const { roleId } = req.params;
        const { name, description, permissions } = req.body;
        try {
            const updatedRole = await RoleService.updateRole(roleId, name, description, permissions);
            res.status(200).json(updatedRole);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async deleteRole(req, res) {
        const { roleId } = req.params;
        try {
            await RoleService.deleteRole(roleId);
            res.status(200).json({ message: 'Role deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = new RoleController();
