// src/modules/user/userController.js
const UserService = require('./userService');

class UserController {
    async createUser(req, res) {
        const { username, password, email, first_name, last_name, phone, profile_picture, bio, role_id } = req.body;
        try {
            const newUser = await UserService.createUser(username, password, email, first_name, last_name, phone, profile_picture, bio, role_id);
            res.status(201).json(newUser);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getAllUsers(req, res) {
        try {
            const users = await UserService.getAllUsers();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getUserById(req, res) {
        const { userId } = req.params;
        try {
            const user = await UserService.getUserById(userId);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async updateUser(req, res) {
        const { userId } = req.params;
        const { username, email, first_name, last_name, phone, profile_picture, bio, role_id } = req.body;
        try {
            const updatedUser = await UserService.updateUser(userId, username, email, first_name, last_name, phone, profile_picture, bio, role_id);
            res.status(200).json(updatedUser);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async deleteUser(req, res) {
        const { userId } = req.params;
        try {
            await UserService.deleteUser(userId);
            res.status(200).json({ message: 'User deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = new UserController();
