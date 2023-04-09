const mongoose = require('mongoose');

const QuesSchema = new mongoose.Schema({
    title:{
        type: String,
        required: [true,'Please Provide Title'],
        maxlength: 50
    },
    description:{
        type: String,
        required: [true,'Please Provide Description'],
        maxlength: 150
    },
    testCases:{
        type: Array,
        require: [true,'Please Provide TestCases']
    }
});

module.exports = mongoose.model('Ques',QuesSchema);