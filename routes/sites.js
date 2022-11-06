const express = require('express');
const { getSites } = require('../controller/sites');
const router = express.Router();

router.route('/').get(getSites);

module.exports = router;