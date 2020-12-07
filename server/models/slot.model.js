const mongoose = require('mongoose');


var slotsschema= new mongoose.Schema({
    doctorname: {
        type: String,
        required: 'Full name can\'t be empty'
    },
    appointment_request_status: {
        type: Number
    },
    date: {
        type: String
        
    },
    time: {
        type: String
       
    },
    status:{
        type: Number
    }
});




mongoose.model('slots', slotsschema);