// src/modules/translation/translationController.js
const TranslationService = require('./translationService');

class TranslationController {
    async createTranslation(req, res) {
        const { key, language, value, context } = req.body;
        try {
            const newTranslation = await TranslationService.createTranslation(key, language, value, context);
            res.status(201).json(newTranslation);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getAllTranslations(req, res) {
        try {
            const translations = await TranslationService.getAllTranslations();
            res.status(200).json(translations);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getTranslationByKeyAndLanguage(req, res) {
        const { key, language } = req.params;
        try {
            const translation = await TranslationService.getTranslationByKeyAndLanguage(key, language);
            if (!translation) {
                return res.status(404).json({ message: 'Translation not found' });
            }
            res.status(200).json(translation);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async updateTranslation(req, res) {
        const { id } = req.params;
        const { key, language, value, context } = req.body;
        try {
            const updatedTranslation = await TranslationService.updateTranslation(id, key, language, value, context);
            res.status(200).json(updatedTranslation);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async deleteTranslation(req, res) {
        const { id } = req.params;
        try {
            await TranslationService.deleteTranslation(id);
            res.status(200).json({ message: 'Translation deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = new TranslationController();
