const express = require('express');
const router = express.Router();

const orderitemController =require('../controller/orderitemscontroller');

// Retrieve all flowers
router.get('/', orderitemController.getAllOrderItem);

router.get('/:fid',orderitemController.getOrderItemById);

// Create a new flowers
router.post('/', orderitemController.insert);

//router.delete('/', flowerController.remove);
router.delete('/:fid', orderitemController.remove);

router.put('/:fid', orderitemController.updateById);

module.exports = router;