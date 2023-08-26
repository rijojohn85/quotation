import express from 'express';

import * as customerController from '../controllers/customerController';

const router = express.Router();

router.get('/', customerController.getCustomers);
router.post('/', customerController.createCustomer);

export default router;
