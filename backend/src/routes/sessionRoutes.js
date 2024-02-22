const express = require('express');
const router = express.Router();
const validationsSession = require('../validation/validationsSession');
const { loginValidationRules, validate } = validationsSession;

const sessionControllers = require('../controllers/sessionControllers');

router.get('/count', sessionControllers.count);
router.post('/login', loginValidationRules(), validate, sessionControllers.login);
router.get('/profile', sessionControllers.getSessionProfile);
router.post('/logout', sessionControllers.logout);

module.exports = router;

