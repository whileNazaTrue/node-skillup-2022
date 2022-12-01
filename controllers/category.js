const categoryService = require('../services/category');
const { getTransactionById } = require('./transaction');

const getCategories = async (req, res) => {
    try {
        const categories = await categoryService.getCategories();
        res.status(200).json(categories);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}

const getCategoryById = async (req, res) => {
    try {
        const category = await categoryService.getCategoryById(req.params.id);
        if (category) {
            res.status(200).json(category);
        } else {
            res.status(404).json({error: 'Category not found'});
        }
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}

const createCategory = async (req, res) => {
    try {
        const category = await categoryService.createCategory(req.body);
        res.status(201).json(category);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}

const updateCategory = async (req, res) => {
    try {
        const {name} = req.body;
        if (!name) {
            res.status(500).json({error: "No data was provided"});
        }else{
            const category = await categoryService.updateCategory(req.params.id, req.body);
            if (category) {
                const updatedCategory = await categoryService.getCategoryById(req.params.id);
                res.status(200).json(updatedCategory);
            } else {
                res.status(404).json({error: 'Category not found'});
            }
        }
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}

const deleteCategory = async (req, res) => {
    try {
        const category = await categoryService.deleteCategory(req.params.id);
        if (category) {
            res.status(200).json({message: 'Category deleted'});
        } else {
            res.status(404).json({error: 'Category not found'});
        }
    } catch (err) {
        res.status(500).json({error: err.message});
    }
}



module.exports = {
    getCategories,
    getCategoryById,
    createCategory,
    updateCategory,
    deleteCategory
};