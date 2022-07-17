const express = require('express');
const router = express.Router();
const survivorControler = require('../controllers/survivors.controller');

router.post('/', survivorControler.criar)

module.exports = router;


//router -- controller -- service -- repository
