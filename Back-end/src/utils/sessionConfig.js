const session = require('express-session');
const crypto = require('crypto');
require('dotenv').config();

const sessionSecret = process.env.SESSION_SECRET || crypto.randomBytes(20);

const sessionConfig = {
    secret: sessionSecret,
    resave: true,
    saveUninitialized: true
};

module.exports = sessionConfig;
