let Category = require(`${__basedir}/models/Category`);

let getAllCategories = (req, res) => {
    return Category.find()
        .then(result => res.send(result))
        .catch(err => res.status(500).send(err));
};

let getCategoryById = (req, res) => {
    return Category.findById(req.params.id)
        .then(result => res.send(result))
        .catch(err => res.status(500).send(err));
};

let getCategoryByNameSearch = (req, res) => {
    let page = parseInt(req.query.page) || 0;
    let limit = parseInt(req.query.limit) || 10;
    let queryObj = req.params.q ? { "name": { "$regex": req.params.q, "$options": "i" } } : null;

    return Category.find(queryObj)
        .sort('name')
        .skip(page * limit)
        .limit(limit)
        .then(result => res.send(result))
        .catch(err => res.status(500).send(err));
};

let createCategory = (req, res) => {
    let newCategory = req.body;

    if (!newCategory || !newCategory.name) {
        return res.status(400).send('Invalid create category request (name is required)');
    }

    return new Category({
            name: newCategory.name,
            description: newCategory.description
        })
        .save()
        .then(result => res.send(result))
        .catch(err => res.status(500).send(err));
};

let updateCategory = (req, res) => {
    let updatedCategory = req.body;

    if (!updatedCategory || !updatedCategory._id) {
        return res.status(400).send('Invalid update category request');
    }

    return Category.findByIdAndUpdate(updatedCategory._id, updatedCategory, {new: true})
        .then(result => res.send(result))
        .catch(err => res.status(500).send(err));
};

let deleteCategory = (req, res) => {
    return Category.deleteOne({_id: req.params.id})
        .then((result) => (result && result.deletedCount) ? res.send(req.params.id) : null)
        .catch(err => res.status(500).send(err));
};

let deleteCategoryIn = (req, res) => {
    return Category.deleteMany({_id: { $in: req.body } })
        .then((result) => (result && result.deletedCount) ? res.send(req.body) : null)
        .catch(err => res.status(500).send(err));
};

module.exports = {
    getAllCategories : getAllCategories,
    getCategoryById : getCategoryById,
    getCategoryByNameSearch : getCategoryByNameSearch,
    createCategory : createCategory,
    updateCategory : updateCategory,
    deleteCategory : deleteCategory,
    deleteCategoryIn : deleteCategoryIn
};