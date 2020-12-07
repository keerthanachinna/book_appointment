const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/user.controller');
const ctrlappointment_session = require('../controllers/appointment_session.controller');

const jwtHelper = require('../config/jwtHelper');

router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);
router.get('/userProfile',jwtHelper.verifyJwtToken, ctrlUser.userProfile);
router.post('/appontmentsession', ctrlappointment_session.appointment_session);

module.exports = router;



