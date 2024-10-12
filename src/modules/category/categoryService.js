// src/modules/category/categoryService.js
const CategoryRepository = require('./categoryRepository');

class CategoryService {
    async createCategory(name, description, parentId) {
        if (!name) {
            throw new Error('Category name is required');
        }
        return await CategoryRepository.createCategory(name, description, parentId);
    }

    async getCategories() {
        return await CategoryRepository.getCategories();
    }

    async getCategoryById(id) {
        const category = await CategoryRepository.getCategoryById(id);
        if (!category) {
            throw new Error('Category not found');
        }
        return category;
    }

    async updateCategory(id, name, description, parentId) {
        const category = await this.getCategoryById(id);
        if (!category) {
            throw new Error('Category not found');
        }
        return await CategoryRepository.updateCategory(id, name, description, parentId);
    }

    async deleteCategory(id) {
        const category = await this.getCategoryById(id);
        if (!category) {
            throw new Error('Category not found');
        }
        return await CategoryRepository.deleteCategory(id);
    }

    async getSubCategories(parentId) {
        return await CategoryRepository.getSubCategories(parentId);
    }
}

module.exports = new CategoryService();
