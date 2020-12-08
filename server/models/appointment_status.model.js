const mongoose = require('mongoose');


var appointment_statusSchema= new mongoose.Schema({
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




module.exports =mongoose.model('appointment_status', appointment_statusSchema);