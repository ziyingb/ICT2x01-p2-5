//js
const express = require('express');
const {projectView, projectDelayView} = require('../controllers/projectController');
const router = express.Router();


router.get('/project', projectView);
router.get('/projectDelay', projectDelayView);



module.exports = router;