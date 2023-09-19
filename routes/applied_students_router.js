const express = require('express');

const { getAllAppliedStudents } = require('../controllers/applied_students_controller');

const router = express.Router();

router.get('/', getAllAppliedStudents)


module.exports = router;