// src/modules/notification/notificationController.js
const NotificationService = require('./notificationService');

class NotificationController {
    async getUserNotifications(req, res) {
        const userId = req.user.id;
        try {
            const notifications = await NotificationService.getUserNotifications(userId);
            res.status(200).json(notifications);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async markAsRead(req, res) {
        const { notificationId } = req.params;
        try {
            await NotificationService.markAsRead(notificationId);
            res.status(200).json({ message: 'Notification marked as read' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async deleteNotification(req, res) {
        const { notificationId } = req.params;
        try {
            await NotificationService.deleteNotification(notificationId);
            res.status(200).json({ message: 'Notification deleted' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = new NotificationController();
