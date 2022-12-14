const {Category} = require('../database/models');


const getCategories = async () => {
    const categories = await Category.findAll();
    return categories;
}

const getCategoryById = async (id) => {
    const category = await Category.findByPk(id);
    return category;
}

const createCategory = async (category) => {
    const newCategory = await Category.create(category);
    return newCategory;
}

const updateCategory = async (id, category) => {
    const updatedCategory = await Category.update(category, {
        where: {
            id: id
        }
    });
    return updatedCategory;
}

const deleteCategory = async (id) => {
    const deletedCategory = await Category.destroy({
        where: {
            id: id
        }
    });
    return deletedCategory;
}

module.exports = {
    getCategories,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory
};

