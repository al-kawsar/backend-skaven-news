// src/modules/comment/commentService.js
const CommentRepository = require('./commentRepository');
const NotificationService = require('../notification/notificationService');
const NewsRepository = require('../news/newsRepository');

class CommentService {
    async createComment(newsId, userId, parentId, content) {
        const comment = await CommentRepository.createComment(newsId, userId, parentId, content);

        return comment;
    }

    async getCommentsByNews(newsId) {
        return await CommentRepository.getCommentsByNews(newsId);
    }

    async updateComment(commentId, content) {
        const comment = await CommentRepository.getCommentById(commentId);
        if (!comment) throw new Error('Comment not found');
        return await CommentRepository.updateComment(commentId, content);
    }

    async deleteComment(commentId) {
        const comment = await CommentRepository.getCommentById(commentId);
        if (!comment) throw new Error('Comment not found');
        return await CommentRepository.deleteComment(commentId);
    }

    async approveComment(commentId) {
        return await CommentRepository.approveComment(commentId);
    }

    async likeComment(commentId) {
        return await CommentRepository.likeComment(commentId);
    }
}

module.exports = new CommentService();
