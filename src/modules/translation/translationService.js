// src/modules/translation/translationService.js
const TranslationRepository = require('./translationRepository');

class TranslationService {
    async createTranslation(key, language, value, context) {
        return await TranslationRepository.createTranslation(key, language, value, context);
    }

    async getAllTranslations() {
        return await TranslationRepository.getAllTranslations();
    }

    async getTranslationByKeyAndLanguage(key, language) {
        return await TranslationRepository.getTranslationByKeyAndLanguage(key, language);
    }

    async updateTranslation(id, key, language, value, context) {
        return await TranslationRepository.updateTranslation(id, key, language, value, context);
    }

    async deleteTranslation(id) {
        await TranslationRepository.deleteTranslation(id);
    }
}

module.exports = new TranslationService();
