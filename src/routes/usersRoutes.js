const express = require('express');
const { body } = require('express-validator');
const usersControllers = require('../controllers/usersControllers');

const router = express.Router();

router.post('/createUser', usersControllers.createUser)

router.get('/', usersControllers.getAllUsers);

router.put('/updateUser/:id', usersControllers.updateUser);

router.post('/checkEmailAvailability', usersControllers.checkEmailAvailability);

router.get('/getSingleUser/:id', usersControllers.getSingleUser),

module.exports = router;