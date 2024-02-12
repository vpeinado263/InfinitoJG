const express = require('express');
const { body } = require('express-validator');
const usersControllers = require('../controllers/usersControllers');
const checkID = require('../middlewares/checkID');
const errorHandler = require('../middlewares/errorHandler');
const { validateCreateUser } = require('../validdation/validationsUsers');

const router = express.Router();

router.use(errorHandler);

router.post('/createUser', usersControllers.createUser)

router.get('/', usersControllers.getAllUsers);

router.put('/updateUser/:id', 
[checkID, ],


usersControllers.updateUser

);

router.post('/checkEmailAvailability', usersControllers.checkEmailAvailability);

router.get('/getSingleUser/:id', [checkID], usersControllers.getSingleUser),

router.delete('/deleteUser/:id', usersControllers.deleteUser);

module.exports = router;