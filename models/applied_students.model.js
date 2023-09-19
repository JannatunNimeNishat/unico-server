const mongoose = require('mongoose');

const appliedStudentsSchema = mongoose.Schema({
    mobile_number: {
        type: Number,
        required: true,
    },
    semester: {
        type: String,
        required: true,
    },
    program: {
        type: String,
        required: true,
    },
    applicant_name: {
        type: String,
        required: true,
    },
    applicant_nid: {
        type: String,
        required: true,
    },
    applicant_dob: {
        type: Date,
        required: true,
    },
    applicant_nationality: {
        type: Date,
        required: true,
    },
    applicant_photoURL: {
        type: string,
        required: true,
    },
    applicant_father_name: {
        type: string,
        required: true,
    },
    applicant_father_occupation: {
        type: string,
        required: true,
    },
    applicant_father_mobile_no: {
        type: Number,
        required: true,
    },
    applicant_mother_name: {
        type: string,
        required: true,
    },
    applicant_mother_occupation: {
        type: string,
        required: true,
    },
    applicant_mother_mobile_no: {
        type: Number,
        required: true,
    },
    applicant_ssc_school_name: {
        type: String,
        required: true,
    },
    applicant_ssc_board: {
        type: String,
        required: true,
    },
    applicant_ssc_roll: {
        type: Number,
        required: true,
    },
    applicant_ssc_passing_year: {
        type: Number,
        required: true,
    },
    applicant_ssc_result: {
        type: Number,
        required: true,
    },
    applicant_hsc_school_name: {
        type: String,
        required: true,
    },
    applicant_hsc_board: {
        type: String,
        required: true,
    },
    applicant_hsc_roll: {
        type: Number,
        required: true,
    },
    applicant_hsc_passing_year: {
        type: Number,
        required: true,
    },
    applicant_hsc_result: {
        type: Number,
        required: true,
    },
    applicant_trx_id: {
        type: String,
        required: true,
    },
    student_type: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model("applied_students", appliedStudentsSchema);

