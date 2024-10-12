// src/modules/role/roleService.js
const RoleRepository = require('./roleRepository');

class RoleService {
    async createRole(name, description, permissions) {
        return await RoleRepository.createRole(name, description, permissions);
    }

    async getAllRoles() {
        return await RoleRepository.getAllRoles();
    }

    async getRoleById(roleId) {
        return await RoleRepository.getRoleById(roleId);
    }

    async updateRole(roleId, name, description, permissions) {
        return await RoleRepository.updateRole(roleId, name, description, permissions);
    }

    async deleteRole(roleId) {
        await RoleRepository.deleteRole(roleId);
    }
}

module.exports = new RoleService();
