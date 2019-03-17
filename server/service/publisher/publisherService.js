let Publisher = require(`${__basedir}/models/Publisher`);

let getAllPublishers = (req, res) => {
    return Publisher.find()
        .populate('blacklistedCategories')
        .populate('blacklistedBrands')
        .then(result => res.send(result))
        .catch(err => res.status(500).send(err));
};

let getPublisherById = (req, res) => {
    return Publisher.findById(req.params.id)
        .populate('blacklistedCategories')
        .populate('blacklistedBrands')
        .then(result => res.send(result))
        .catch(err => res.status(500).send(err));
};

let getPublisherByNameSearch = (req, res) => {
    let page = parseInt(req.query.page) || 0;
    let limit = parseInt(req.query.limit) || 10;
    let queryObj = req.params.q ? { "name": { "$regex": req.params.q, "$options": "i" } } : null;

    return Publisher.find(queryObj)
        .populate('blacklistedCategories')
        .populate('blacklistedBrands')
        .sort('name')
        .skip(page * limit)
        .limit(limit)
        .then(result => res.send(result))
        .catch(err => res.status(500).send(err));
};

let createPublisher = (req, res) => {
    let newPublisher = req.body;

    if (!newPublisher || !newPublisher.name) {
        return res.status(400).send('Invalid create publisher request (name is required)');
    }

    return new Publisher({
            name: newPublisher.name,
            blacklistedCategories: [],
            blacklistedBrands: []
        })
        .save()
        .then(result => res.send(result))
        .catch(err => res.status(500).send(err));
};

let updatePublisher = (req, res) => {
    let updatedPublisher = req.body;

    if (!updatedPublisher || !updatedPublisher._id) {
        return res.status(400).send('Invalid update publisher request');
    }

    return Publisher.findByIdAndUpdate(updatedPublisher._id, updatedPublisher, {new: true})
        .then(result => res.send(result))
        .catch(err => res.status(500).send(err));
};

let deletePublisher = (req, res) => {
    return Publisher.deleteOne({_id: req.params.id})
        .then((result) => (result && result.deletedCount) ? res.send(req.params.id) : null)
        .catch(err => res.status(500).send(err));
};

let deletePublisherIn = (req, res) => {
    return Publisher.deleteMany({_id: { $in: req.body } })
        .then((result) => (result && result.deletedCount) ? res.send(req.body) : null)
        .catch(err => res.status(500).send(err));
};

module.exports = {
    getAllPublishers : getAllPublishers,
    getPublisherById : getPublisherById,
    getPublisherByNameSearch: getPublisherByNameSearch,
    createPublisher : createPublisher,
    updatePublisher : updatePublisher,
    deletePublisher : deletePublisher,
    deletePublisherIn : deletePublisherIn
};