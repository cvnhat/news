const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');

///////////////////////////////////////
router.get('/:id', siteController.show)
router.get('/', siteController.home);
module.exports = router;
