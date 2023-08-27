import express from 'express';

import * as customerController from '../controllers/customerController';

const router = express.Router();

router.get('/', customerController.getCustomers);
router.post('/', customerController.createCustomer);
router.put('/:id', customerController.updateCustomer);
router.get('/:id', customerController.getCustomerById);

export default router;
