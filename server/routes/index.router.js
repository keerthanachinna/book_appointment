const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/user.controller');
const ctrlappointment_session = require('../controllers/appointment_session.controller');

const jwtHelper = require('../config/jwtHelper');

router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);
router.get('/userProfile',jwtHelper.verifyJwtToken, ctrlUser.userProfile);
router.post('/appointmentsession', ctrlappointment_session.appointment_session);
router.post('/book_appointment', ctrlappointment_session.book_appointment);

router.post('/slot_create', ctrlappointment_session.create_slot);
router.post('/create_appointment_status', ctrlappointment_session.create_appointment_status);
router.post('/create_appointment_req_status', ctrlappointment_session.create_appointment_request);

module.exports = router;



