const express = require('express');

const { getAllAppliedStudents, getSingleAppliedStudent } = require('../controllers/applied_students_controller');

const router = express.Router();

router.get('/', getAllAppliedStudents);
router.get('/:email', getSingleAppliedStudent);

module.exports = router;