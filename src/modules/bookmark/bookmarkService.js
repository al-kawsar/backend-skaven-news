// src/modules/bookmark/bookmarkService.js
const BookmarkRepository = require('./bookmarkRepository');

class BookmarkService {
    async createBookmark(userId, newsId, videoId) {
        return await BookmarkRepository.createBookmark(userId, newsId, videoId);
    }

    async getAllBookmarks(userId) {
        return await BookmarkRepository.getAllBookmarks(userId);
    }

    async deleteBookmark(id) {
        return await BookmarkRepository.deleteBookmark(id);
    }
}

module.exports = new BookmarkService();
