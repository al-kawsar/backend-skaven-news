// src/modules/theme/themeController.js
const ThemeService = require('./themeService');

class ThemeController {
    async createTheme(req, res) {
        const { name, description } = req.body;
        const createdBy = req.user.id; // Mengambil id pengguna dari middleware
        try {
            const newTheme = await ThemeService.createTheme(name, description, createdBy);
            res.status(201).json(newTheme);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getAllThemes(req, res) {
        try {
            const themes = await ThemeService.getAllThemes();
            res.status(200).json(themes);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getThemeById(req, res) {
        const { themeId } = req.params;
        try {
            const theme = await ThemeService.getThemeById(themeId);
            if (!theme) {
                return res.status(404).json({ message: 'Theme not found' });
            }
            res.status(200).json(theme);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async updateTheme(req, res) {
        const { themeId } = req.params;
        const { name, description } = req.body;
        const updatedBy = req.user.id; // Mengambil id pengguna dari middleware
        try {
            const updatedTheme = await ThemeService.updateTheme(themeId, name, description, updatedBy);
            res.status(200).json(updatedTheme);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async deleteTheme(req, res) {
        const { themeId } = req.params;
        try {
            await ThemeService.deleteTheme(themeId);
            res.status(200).json({ message: 'Theme deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async activateTheme(req, res) {
        const { themeId } = req.params;
        try {
            await ThemeService.activateTheme(themeId);
            res.status(200).json({ message: 'Theme activated successfully' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async deactivateTheme(req, res) {
        const { themeId } = req.params;
        try {
            await ThemeService.deactivateTheme(themeId);
            res.status(200).json({ message: 'Theme deactivated successfully' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = new ThemeController();
