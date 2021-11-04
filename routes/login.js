//js
const express = require('express');
const {registerView, loginView, homeView } = require('../controllers/loginController');
const router = express.Router();


router.get('/register', registerView);
router.get('/login', loginView);
router.get('/home', homeView);


module.exports = router;