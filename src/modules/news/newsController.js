// src/modules/news/newsController.js
const NewsService = require('./newsService');

class NewsController {
    async create(req, res) {
        const { title, content, authorId } = req.body;
        try {
            const news = await NewsService.createNews(title, content, authorId);
            res.status(201).json(news);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getAll(req, res) {
        try {
            const news = await NewsService.getAllNews();
            res.status(200).json(news);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getById(req, res) {
        const { id } = req.params;
        try {
            const news = await NewsService.getNewsById(id);
            if (news) {
                res.status(200).json(news);
            } else {
                res.status(404).json({ message: 'News not found' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async update(req, res) {
        const { id } = req.params;
        const { title, content } = req.body;
        try {
            const news = await NewsService.updateNews(id, title, content);
            if (news) {
                res.status(200).json(news);
            } else {
                res.status(404).json({ message: 'News not found' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async delete(req, res) {
        const { id } = req.params;
        try {
            const news = await NewsService.deleteNews(id);
            if (news) {
                res.status(200).json({ message: 'News deleted successfully' });
            } else {
                res.status(404).json({ message: 'News not found' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = new NewsController();
