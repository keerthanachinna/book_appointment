const mongoose = require('mongoose');


// const Appointment_session = mongoose.model('Appointment_session');

const Appointment_session =require('../models/appointment_session.model');
const slots =require('../models/slot.model');
const book_appointment =require('../models/book_appointment.model');


module.exports.appointment_session = (req, res, next) => {
    var app_session = new Appointment_session();
    app_session.doctorname = req.body.doctorname;
    app_session.date = req.body.date;
    app_session.mrng_from_time = req.body.from_time;
    app_session.mrng_to_time = req.body.to_time;
    app_session.even_from_time = req.body.even_from_time;
    app_session.even_to_time = req.body.even_to_time;
    app_session.status = 1;
    app_session.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
                return next(err);
        }

    });
}

module.exports.create_slot = (req, res, next) => {
    var slot = new slots();
    slot.doctorname = req.body.doctorname;
    slot.date = req.body.date;
    slot.time = req.body.time;
    slot.appointment_request_status = req.body.appointment_request_status;
    slot.status = 1;
    slot.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
                return next(err);
        }

    });
}

module.exports.book_appointment = (req, res, next) => {
    var book_app = new book_appointment();
    book_app.doctorname = req.body.doctorname;
    book_app.date = req.body.date;
    book_app.time = req.body.time;
    book_app.patientname = req.body.patientname;
    book_app.mobile = req.body.mobile;
    book_app.age = req.body.age;
    book_app.gender = req.body.gender;
    book_app.appointment_request_status = req.body.appointment_request_status;
    book_app.status = 1;
    book_app.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
                return next(err);
        }

    });
}


