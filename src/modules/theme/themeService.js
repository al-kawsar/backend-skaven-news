// src/modules/theme/themeService.js
const ThemeRepository = require('./themeRepository');

class ThemeService {
    async createTheme(name, description, createdBy) {
        return await ThemeRepository.createTheme(name, description, createdBy);
    }

    async getAllThemes() {
        return await ThemeRepository.getAllThemes();
    }

    async getThemeById(themeId) {
        return await ThemeRepository.getThemeById(themeId);
    }

    async updateTheme(themeId, name, description, updatedBy) {
        return await ThemeRepository.updateTheme(themeId, name, description, updatedBy);
    }

    async deleteTheme(themeId) {
        await ThemeRepository.deleteTheme(themeId);
    }

    async activateTheme(themeId) {
        await ThemeRepository.activateTheme(themeId);
    }

    async deactivateTheme(themeId) {
        await ThemeRepository.deactivateTheme(themeId);
    }
}

module.exports = new ThemeService();
