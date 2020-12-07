const mongoose = require('mongoose');


var book_appointment= new mongoose.Schema({
    patientname: {
        type: String,
        required: 'Full name can\'t be empty'
    },
    mobile: {
        type: Number
    },
    appointment_date: {
        type: String
        
    },
    time: {
        type: String
       
    },
    appointment_status:{
        type: Number
    },
    age: {
        type: String
       
    },
    gender:{
        type: String
    },
    status:{
        type: Number
    }
});




mongoose.model('Book_appointment', book_appointment);