const express = require('express');
const { getSites, addSite } = require('../controller/sites');
const router = express.Router();

router.route('/')
    .get(getSites)
    .post(addSite);

module.exports = router;