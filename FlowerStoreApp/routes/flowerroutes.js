const express = require('express');
const router = express.Router();

const flowerController =require('../controller/flowerscontroller');

// Retrieve all flowers
router.get('/', flowerController.getAllFlower);

router.get('/:fid', flowerController.getFlowerByFid);

// Create a new flowers
router.post('/', flowerController.createFlower);

//router.delete('/', flowerController.remove);
router.delete('/:fid', flowerController.remove);

router.put('/:fid', flowerController.updateByFid);

module.exports = router;