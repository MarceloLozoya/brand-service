let express = require('express');
let router = express.Router();

let categoryService = require('../../service/category/categoryService');

router.get('/', categoryService.getAllCategories);
router.get('/:id', categoryService.getCategoryById);
router.get('/name/search', categoryService.getCategoryByNameSearch);
router.post('/', categoryService.createCategory);
router.put('/', categoryService.updateCategory);
router.delete('/:id', categoryService.deleteCategory);
router.delete('/delete/multiple', categoryService.deleteCategoryIn);

module.exports = router;