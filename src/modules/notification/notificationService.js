// src/modules/notification/notificationService.js
const NotificationRepository = require('./notificationRepository');

class NotificationService {
    async createNotification(userId, type, content, referenceId, referenceType) {
        return await NotificationRepository.createNotification(userId, type, content, referenceId, referenceType);
    }

    async getUserNotifications(userId) {
        return await NotificationRepository.getUserNotifications(userId);
    }

    async markAsRead(notificationId) {
        await NotificationRepository.markAsRead(notificationId);
    }

    async deleteNotification(notificationId) {
        await NotificationRepository.deleteNotification(notificationId);
    }
}

module.exports = new NotificationService();
