const mongoose = require('mongoose');


var appointment_sessionSchema = new mongoose.Schema({
    doctorname: {
        type: String,
        required: 'Full name can\'t be empty'
    },
    date: {
        type: String,
        required: 'Date can\'t be empty',
        unique: true
    },
    from_time: {
        type: String
        
    },
    to_time: {
        type: String
       
    },
    status: {
        type: String
       
    }
});




 module.exports = mongoose.model('Appointment_session', appointment_sessionSchema);