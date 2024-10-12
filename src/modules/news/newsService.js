// src/modules/news/newsService.js
const NewsRepository = require('./newsRepository');

class NewsService {
    async createNews(title, content, authorId) {
        return await NewsRepository.createNews(title, content, authorId);
    }

    async getAllNews() {
        return await NewsRepository.getAllNews();
    }

    async getNewsById(id) {
        return await NewsRepository.getNewsById(id);
    }

    async updateNews(id, title, content) {
        return await NewsRepository.updateNews(id, title, content);
    }

    async deleteNews(id) {
        return await NewsRepository.deleteNews(id);
    }
}

module.exports = new NewsService();
