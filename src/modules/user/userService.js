// src/modules/user/userService.js
const UserRepository = require('./userRepository');

class UserService {
    async createUser(username, password, email, firstName, lastName, phone, profilePicture, bio, roleId) {
        return await UserRepository.createUser(username, password, email, firstName, lastName, phone, profilePicture, bio, roleId);
    }

    async getAllUsers() {
        return await UserRepository.getAllUsers();
    }

    async getUserById(userId) {
        return await UserRepository.getUserById(userId);
    }

    async updateUser(userId, username, email, firstName, lastName, phone, profilePicture, bio, roleId) {
        return await UserRepository.updateUser(userId, username, email, firstName, lastName, phone, profilePicture, bio, roleId);
    }

    async deleteUser(userId) {
        await UserRepository.deleteUser(userId);
    }
}

module.exports = new UserService();
