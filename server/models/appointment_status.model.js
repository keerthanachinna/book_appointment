const mongoose = require('mongoose');


var appointment_status= new mongoose.Schema({
    code: {
        type: Number,
        required: 'code can\'t be empty'
    },
    name: {
        type: String
    },
    status:{
        type: Number
    }
});




mongoose.model('appointment_status', appointment_status);