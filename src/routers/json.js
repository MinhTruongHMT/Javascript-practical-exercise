const express = require('express');
const router = express.Router();
const jsonController = require('../controllers/jsoncontroller');

router.get('/hello',jsonController.hello);
router.get('/sum',jsonController.sum);

module.exports= router;