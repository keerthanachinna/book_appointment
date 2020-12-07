const mongoose = require('mongoose');


var appointment_request_status= new mongoose.Schema({
    code: {
        type: Number,
        required: 'code can\'t be empty'
    },
    name: {
        type: String
    },
    status: {
        type: String
        
    }
    
});




mongoose.model('appointment_request_status', appointment_request_status);