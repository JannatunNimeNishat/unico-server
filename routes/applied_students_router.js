const express = require('express');

const { getAllAppliedStudents, getSingleAppliedStudent, deleteSingleAppliedStudent } = require('../controllers/applied_students_controller');

const router = express.Router();

router.get('/', getAllAppliedStudents);
router.get('/:email', getSingleAppliedStudent);
router.delete('/:email',deleteSingleAppliedStudent)
module.exports = router;