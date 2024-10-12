// src/modules/comment/commentController.js
const CommentService = require('./commentService');

class CommentController {
    async createComment(req, res) {
        const { newsId, content, parentId } = req.body;
        const userId = req.user.id;

        try {
            const comment = await CommentService.createComment(newsId, userId, parentId, content);
            res.status(201).json(comment);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getCommentsByNews(req, res) {
        const { newsId } = req.params;

        try {
            const comments = await CommentService.getCommentsByNews(newsId);
            res.status(200).json(comments);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async updateComment(req, res) {
        const { commentId } = req.params;
        const { content } = req.body;

        try {
            const updatedComment = await CommentService.updateComment(commentId, content);
            res.status(200).json(updatedComment);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async deleteComment(req, res) {
        const { commentId } = req.params;

        try {
            await CommentService.deleteComment(commentId);
            res.status(204).json();
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async approveComment(req, res) {
        const { commentId } = req.params;

        try {
            await CommentService.approveComment(commentId);
            res.status(200).json({ message: 'Comment approved' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async likeComment(req, res) {
        const { commentId } = req.params;

        try {
            await CommentService.likeComment(commentId);
            res.status(200).json({ message: 'Comment liked' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = new CommentController();

