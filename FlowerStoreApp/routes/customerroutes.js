const express = require('express');
const router = express.Router();

const customerController = require('../controller/customerscontroller');

// Retrieve all flowers
router.get('/', customerController.getAllCustomer);

router.get('/:cid', customerController.getCustomerByCid);

// Create a new flowers
router.post('/', customerController.createCustomer);


router.delete('/:cid', customerController.remove);

router.put('/:cid', customerController.updateByCid);

module.exports = router;