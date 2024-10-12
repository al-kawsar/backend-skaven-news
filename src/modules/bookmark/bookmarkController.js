// src/modules/bookmark/bookmarkController.js
const BookmarkService = require('./bookmarkService');

class BookmarkController {
    async createBookmark(req, res) {
        const { userId, newsId, videoId } = req.body;
        try {
            const newBookmark = await BookmarkService.createBookmark(userId, newsId, videoId);
            res.status(201).json(newBookmark);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getAllBookmarks(req, res) {
        const { userId } = req.params;
        try {
            const bookmarks = await BookmarkService.getAllBookmarks(userId);
            res.status(200).json(bookmarks);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async deleteBookmark(req, res) {
        const { id } = req.params;
        try {
            await BookmarkService.deleteBookmark(id);
            res.status(200).json({ message: 'Bookmark deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = new BookmarkController();
