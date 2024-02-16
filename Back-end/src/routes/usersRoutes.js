const express = require('express');
const usersControllers = require('../controllers/usersControllers');
const checkID = require('../middlewares/checkID');
const errorHandler = require('../middlewares/errorHandler');
const { validateCreateUser } = require('../validation/validationsUsers');
const router = express.Router();
const sessionControllers = require('../controllers/sessionControllers');


router.post('/createUser', validateCreateUser, usersControllers.createUser);
router.get('/', usersControllers.getAllUsers);
router.put('/updateUser/:id', [checkID, validateCreateUser], usersControllers.updateUser);
router.post('/checkEmailAvailability', usersControllers.checkEmailAvailability);
router.get('/getSingleUser/:id', [checkID], usersControllers.getSingleUser);
router.delete('/deleteUser/:id', [checkID], usersControllers.deleteUser);

router.get('/count', sessionControllers.count);
router.post('/login', sessionControllers.login);
router.get('/profile', sessionControllers.getSessionProfile);
router.post('/logout', sessionControllers.logout);


router.use(errorHandler);

module.exports = router;
