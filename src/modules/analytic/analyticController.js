// src/modules/analytic/analyticController.js
const AnalyticService = require('./analyticService');

class AnalyticController {
    async createAnalytic(req, res) {
        const { newsId, userId, action, ipAddress, deviceInfo } = req.body;
        try {
            const newAnalytic = await AnalyticService.createAnalytic(newsId, userId, action, ipAddress, deviceInfo);
            res.status(201).json(newAnalytic);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getAllAnalytics(req, res) {
        try {
            const analytics = await AnalyticService.getAllAnalytics();
            res.status(200).json(analytics);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getAnalyticsByUserId(req, res) {
        const { userId } = req.params;
        try {
            const analytics = await AnalyticService.getAnalyticsByUserId(userId);
            res.status(200).json(analytics);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async updateAnalytic(req, res) {
        const { id } = req.params;
        const { newsId, userId, action, ipAddress, deviceInfo } = req.body;
        try {
            const updatedAnalytic = await AnalyticService.updateAnalytic(id, newsId, userId, action, ipAddress, deviceInfo);
            res.status(200).json(updatedAnalytic);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async deleteAnalytic(req, res) {
        const { id } = req.params;
        try {
            await AnalyticService.deleteAnalytic(id);
            res.status(200).json({ message: 'Analytic entry deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = new AnalyticController();
