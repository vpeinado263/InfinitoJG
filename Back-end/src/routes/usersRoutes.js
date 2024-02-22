const express = require('express');
const usersControllers = require('../controllers/usersControllers');
const checkID = require('../middlewares/checkID');
const errorHandler = require('../middlewares/errorHandler');
const { validateCreateUser, validateUpdateUser } = require('../validation/validationsUsers');

const router = express.Router();

router.post('/create', validateCreateUser, usersControllers.createUser);
router.get('/', usersControllers.getAllUsers);
router.put('/update/:id', [checkID, validateUpdateUser], usersControllers.updateUser);
router.post('/checkEmailAvailability', usersControllers.checkEmailAvailability);
router.get('/:id', [checkID], usersControllers.getSingleUser);
router.delete('/:id', [checkID], usersControllers.deleteUser);

router.use(errorHandler);

module.exports = router;
