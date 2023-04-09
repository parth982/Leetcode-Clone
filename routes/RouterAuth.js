const express = require('express');
const router = express.Router();

const Register = require('../controllers/register_logic'); 
const Login = require('../controllers/login_logic'); 

router.route('/register').post(Register);
router.route('/login').post(Login);

module.exports = router;