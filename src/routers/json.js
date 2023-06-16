const express = require('express');
const router = express.Router();
const jsonController = require('../controllers/jsoncontroller');

router.get('/hello',jsonController.hello);
router.get('/number/sum',jsonController.sum);
router.get('/number/primenumbers',jsonController.checkPrimeNumbers);
router.post('/arrays',jsonController.maxNumber);
router.get('/strings/:string',jsonController.stringReverse);

module.exports= router;