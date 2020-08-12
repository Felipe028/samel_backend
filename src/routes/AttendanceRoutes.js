const express = require('express');
const router = express.Router();

const AttendanceController = require('../controllers/AttendanceController');

//Create Attendance
router.post('/add', AttendanceController.create);
//Update Attendance
router.put('/:id', AttendanceController.update);
//Delete Attendance
router.delete('/:id', AttendanceController.delete);
//Read All
router.get('/all', AttendanceController.all);
//Read today
router.get('/today', AttendanceController.today);
//Read All in specific date
router.get('/alldate', AttendanceController.allDate);
//Read today by doctor
router.get('/todaybydoctor/:crm', AttendanceController.todayByDoctor);
//Read All by doctor in specific date
router.get('/allbydoctorindate/:crm', AttendanceController.allByDoctorInDate);
//Read by Id
router.get('/id/:id', AttendanceController.id);
//Read by today by Doctor by Patient in specific date
router.get('/allbydoctorbypatientindate', AttendanceController.todayByDByPByInDate);


module.exports = router;
