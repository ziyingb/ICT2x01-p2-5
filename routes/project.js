//js
const express = require('express');
const {
    Mongoose
} = require('mongoose');
const {
} = require('../controllers/loginController');
const {
    projectView,
    projectDelayView
} = require('../controllers/projectController');

const router = express.Router();

const Project = require("../models/project")
const Challenge = require("../models/challenge")

router.get('/', async (req, res) => {
    Project.find({}, {
        projectName: 1,
        projectType: 1,
        projectDesc: 1
    }).then(async (result) => {
        res.render('home', {
            projects: result
        })

    }).catch((err) => {
        console.log(err)
        res.status(500).send("Error Inserting Project")
    })
})
router.get('/project', projectView);
router.get('/projectDelay', projectDelayView);

router.post('/createProject', async (req, res) => {

    if (!req.body.name || !req.body.type || !req.body.desc) {
        res.status(400).send("Invalid POST Body")
    } else {
        Project.create({
            _id: new mongoose.Types.ObjectId(),
            projectName: req.body.name,
            projectType: req.body.type,
            projectDesc: req.body.desc
        }).then((result) => {
            res.send(result)
        }).catch((err) => {
            console.log(err)
            res.status(500).send("Error Inserting Project")
        })
    }
})

router.get('/getAllProjects', async (req, res) => {
    Project.find({}, {
        projectName: 1,
        projectType: 1,
        projectDesc: 1
    }).then((result) => {
        res.send(result)
    }).catch((err) => {
        console.log(err)
        res.status(500).send("Error Inserting Project")
    })
})

router.get('/getOneProject/:id', async (req, res) => {
    Project.find({
        _id: req.params.id
    }).then((result) => {
        res.send(result[0])
    }).catch((err) => {
        console.log(err)
        res.status(500).send("Error Inserting Project")
    })

})
module.exports = router;