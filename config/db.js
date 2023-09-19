const mongoose = require('mongoose');
const config = require('../config/config')

const dbURL = config.db.url;

// connect to mongodb using mongoose
mongoose.connect(dbURL)
    .then(() => {
        console.log('mongodb atlas is connected');
    })
    .catch(error => {
        console.log(error);
        process.exit(1);
    })



