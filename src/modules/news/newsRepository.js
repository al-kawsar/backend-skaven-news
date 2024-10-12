// src/modules/news/newsRepository.js
const NewsModel = require('./newsModel');

class NewsRepository {
    async createNews(title, content, authorId) {
        return await NewsModel.createNews(title, content, authorId);
    }

    async getAllNews() {
        return await NewsModel.getAllNews();
    }

    async getNewsById(id) {
        return await NewsModel.getNewsById(id);
    }

    async updateNews(id, title, content) {
        return await NewsModel.updateNews(id, title, content);
    }

    async deleteNews(id) {
        return await NewsModel.deleteNews(id);
    }
}

module.exports = new NewsRepository();
