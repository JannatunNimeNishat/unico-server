const express = require('express');
const cors = require('cors');

const app = express();

const appliedStudentsRouter = require('./routes/applied_students_router')
const adminRouter = require('./routes/admin.route');
//mongodb connection
require('./config/db')

// 
app.use(cors())
app.use(express.json())

// applied students routes
app.use('/applied-students', appliedStudentsRouter);

//admin routes
app.use('/admin', adminRouter);

// base url
app.get('/', (req, res) => {
    res.send('base url')
})

// route not found
app.use((req, res, next) => {
    res.status(404).send("Route not found");
})

// server error 
app.use((error, req, res, next) => {
    res.status(500).send("Server error", error);
})



module.exports = app;