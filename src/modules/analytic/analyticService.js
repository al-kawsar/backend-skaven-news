// src/modules/analytic/analyticService.js
const AnalyticRepository = require('./analyticRepository');

class AnalyticService {
    async createAnalytic(newsId, userId, action, ipAddress, deviceInfo) {
        return await AnalyticRepository.createAnalytic(newsId, userId, action, ipAddress, deviceInfo);
    }

    async getAllAnalytics() {
        return await AnalyticRepository.getAllAnalytics();
    }

    async getAnalyticsByUserId(userId) {
        return await AnalyticRepository.getAnalyticsByUserId(userId);
    }

    async updateAnalytic(id, newsId, userId, action, ipAddress, deviceInfo) {
        return await AnalyticRepository.updateAnalytic(id, newsId, userId, action, ipAddress, deviceInfo);
    }

    async deleteAnalytic(id) {
        return await AnalyticRepository.deleteAnalytic(id);
    }
}

module.exports = new AnalyticService();
