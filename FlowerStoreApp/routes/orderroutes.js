const express = require('express');
const router = express.Router();

const orderController = require('../controller/orderscontroller');

// Retrieve all flowers
router.get('/', orderController.getAllOrder);

router.get('/',  orderController.getOrderById);

// Create a new flowers
router.post('/',  orderController.insert);


router.delete('/',  orderController.remove);

router.put('/',  orderController.updateById);

module.exports = router;