let express = require('express');
let router = express.Router();

let brandService = require('../../service/brand/brandService');

router.get('/', brandService.getAllBrands);
router.get('/:id', brandService.getBrandById);
router.get('/name/search', brandService.getBrandByNameSearch);
router.post('/', brandService.createBrand);
router.put('/', brandService.updateBrand);
router.delete('/:id', brandService.deleteBrand);
router.delete('/delete/multiple', brandService.deleteBrandIn);

module.exports = router;