const express = require('express');
const router = express.Router();
const biodataController = require('../controller/biodataController');

router.get('/', biodataController.getAllBiodata);
router.get('/:id', biodataController.getBiodataById);
router.post('/', biodataController.createBiodata);
router.put('/:id', biodataController.updateBiodata);
router.delete('/:id', biodataController.deleteBiodata);

module.exports = router;
