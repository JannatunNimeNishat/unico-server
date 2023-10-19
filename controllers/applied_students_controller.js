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
                    message: 'no applied student is found'
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

//delete a student
const deleteSingleAppliedStudent = async (req, res) => {
    try {
        const email = req.params.email;
        const query = { applicant_email: email }
        const singleApplicantStudent = await AppliedStudents.deleteOne(query);
        res.send(singleApplicantStudent);
        if (singleApplicantStudent?.deletedCount>1) {
            res.status(200).send({
                success: true,
                message: 'student is successfully deleted',
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


// 
/* app.get('/check-role/:email', async (req, res) => {
    const email = req.params.email;
    console.log(email);
    if (!email) {
        return res.send(' ')
    }
    const query = { applicant_email: email }
    const user = await appliedStudentsCollections.findOne(query)

    const role = user.role;

    res.send(role)
}) */

// 
const createStudent = async (req, res) => {

    console.log('new user');
    const newApplicant = req.body;
    const email = req.params.applicant_email;
    const query = { applicant_email: email }
    const isPresent = await appliedStudentsCollections.findOne(query)
    if (isPresent) {
        return res.send('already present in appliedStudents collection')
    }

    const result = await appliedStudentsCollections.insertOne(newApplicant);
    res.send(result)

}



module.exports = { getAllAppliedStudents, getSingleAppliedStudent,deleteSingleAppliedStudent };