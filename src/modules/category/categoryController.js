// src/modules/category/categoryController.js
const CategoryService = require('./categoryService');

class CategoryController {
    async createCategory(req, res) {
        const { name, description, parentId } = req.body;

        try {
            const category = await CategoryService.createCategory(name, description, parentId);
            res.status(201).json(category);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getCategories(req, res) {
        try {
            const categories = await CategoryService.getCategories();
            res.status(200).json(categories);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getCategoryById(req, res) {
        const { id } = req.params;

        try {
            const category = await CategoryService.getCategoryById(id);
            res.status(200).json(category);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async updateCategory(req, res) {
        const { id } = req.params;
        const { name, description, parentId } = req.body;

        try {
            const updatedCategory = await CategoryService.updateCategory(id, name, description, parentId);
            res.status(200).json(updatedCategory);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async deleteCategory(req, res) {
        const { id } = req.params;

        try {
            await CategoryService.deleteCategory(id);
            res.status(204).json();
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getSubCategories(req, res) {
        const { parentId } = req.params;

        try {
            const subCategories = await CategoryService.getSubCategories(parentId);
            res.status(200).json(subCategories);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = new CategoryController();
