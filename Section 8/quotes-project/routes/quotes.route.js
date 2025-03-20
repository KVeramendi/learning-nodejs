const router = require('express').Router();
const { QuotesController } = require('../controllers');

router.get('/quotes', QuotesController.index);
router.get('/quotes/all', QuotesController.getAll);
router.post('/quotes/add', QuotesController.addItem);

module.exports = router;