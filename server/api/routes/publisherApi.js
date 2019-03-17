let express = require('express');
let router = express.Router();

let publisherService = require('../../service/publisher/publisherService');

router.get('/', publisherService.getAllPublishers);
router.get('/:id', publisherService.getPublisherById);
router.get('/name/search', publisherService.getPublisherByNameSearch);
router.post('/', publisherService.createPublisher);
router.put('/', publisherService.updatePublisher);
router.delete('/:id', publisherService.deletePublisher);
router.delete('/delete/multiple', publisherService.deletePublisherIn);

module.exports = router;