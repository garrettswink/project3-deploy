const router = require('express').Router();
const userRoutes = require('./user-routes');
const transactionRoutes = require('./transaction-routes');

router.use('/users', userRoutes);
router.use('/transactions', transactionRoutes);

module.exports = router;