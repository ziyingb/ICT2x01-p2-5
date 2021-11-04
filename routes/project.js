//js
const express = require('express');
const {projectView} = require('../controllers/projectController');
const router = express.Router();


router.get('/project', projectView);



module.exports = router;