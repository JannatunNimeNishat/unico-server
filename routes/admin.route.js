const express = require('express');
const { getAllAdmins } = require('../controllers/admin.controller');
const router = express.Router;

router.get('/',getAllAdmins);

module.exports = router;