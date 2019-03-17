let Brand = require(`${__basedir}/models/Brand`);

let getAllBrands = (req, res) => {
    return Brand.find()
        .populate('category')
        .then(result => res.send(result))
        .catch(err => res.status(500).send(err));
};

let getBrandById = (req, res) => {
    return Brand.findById(req.params.id)
        .populate('category')
        .then(result => res.send(result))
        .catch(err => res.status(500).send(err));
};

let getBrandByNameSearch = (req, res) => {
    let page = parseInt(req.query.page) || 0;
    let limit = parseInt(req.query.limit) || 10;
    let queryObj = req.params.q ? { "name": { "$regex": req.params.q, "$options": "i" } } : null;

    return Brand.find(queryObj)
        .populate('category')
        .sort('name')
        .skip(page * limit)
        .limit(limit)
        .then(result => res.send(result))
        .catch(err => res.status(500).send(err));
};

let createBrand = (req, res) => {
    let newBrand = req.body;

    if (!newBrand || !newBrand.name) {
        return res.status(400).send('Invalid create brand request (name is required)');
    }

    return new Brand({
            name: newBrand.name,
            category: newBrand.category
        })
        .save()
        .then(result => {
            return Brand.populate(result,{path:'category'})
                .then(populate => res.send(populate))
                .catch(err => res.status(500).send(err));
        })
        .catch(err => res.status(500).send(err));
};

let updateBrand = (req, res) => {
    let updatedBrand = req.body;

    if (!updatedBrand || !updatedBrand._id) {
        return res.status(400).send('Invalid update brand request');
    }

    return Brand.findByIdAndUpdate(updatedBrand._id, updatedBrand, {new: true})
        .then(result => {
            return Brand.populate(result,{path:'category'})
                .then(populate => res.send(populate))
                .catch(err => res.status(500).send(err));
        })
        .catch(err => res.status(500).send(err));
};

let deleteBrand = (req, res) => {
    return Brand.deleteOne({_id: req.params.id})
        .then((result) => (result && result.deletedCount) ? res.send(req.params.id) : null)
        .catch(err => res.status(500).send(err));
};

let deleteBrandIn = (req, res) => {
    return Brand.deleteMany({_id: { $in: req.body } })
        .then((result) => (result && result.deletedCount) ? res.send(req.body) : null)
        .catch(err => res.status(500).send(err));
};

module.exports = {
    getAllBrands : getAllBrands,
    getBrandById : getBrandById,
    getBrandByNameSearch : getBrandByNameSearch,
    createBrand : createBrand,
    updateBrand : updateBrand,
    deleteBrand : deleteBrand,
    deleteBrandIn : deleteBrandIn
};