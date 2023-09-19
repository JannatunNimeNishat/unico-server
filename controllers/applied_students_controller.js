
const AppliedStudents = require('../models/applied_students.model');


const getAllAppliedStudents = async (req, res) => {
    try {
        const allAppliedStudents = await AppliedStudents.find();

        if (allAppliedStudents) {
            res.status(200).send({
                success: true,
                message: 'return all applied students',
                data: allAppliedStudents
            });
        } else {
            res.status(404).send(
                {
                    success: false,
                    message: 'no applied student is not found'
                }
            )
        }

    } catch (error) {
        res.status(500).send(error.message)
    }
}

const getSingleAppliedStudent = async (req, res) => {
    try {
        const email = req.params.email;
        const query = { applicant_email: email }
        const singleApplicantStudent = await AppliedStudents.findOne(query);

        if (singleApplicantStudent) {
            res.status(200).send({
                success: true,
                message: 'return single applied student information',
                data: singleApplicantStudent
            });
        } else {
            res.status(404).send(
                {
                    success: false,
                    message: 'no applied student is not found'
                }
            )
        }

    } catch (error) {
        res.status(500).send(error.message)
    }
}






module.exports = { getAllAppliedStudents, getSingleAppliedStudent };