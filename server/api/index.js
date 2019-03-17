const express = require('express');
let router = express.Router();

router.use('/brand', require('./routes/brandApi'));
router.use('/category', require('./routes/categoryApi'));
router.use('/publisher', require('./routes/publisherApi'));

module.exports = router;