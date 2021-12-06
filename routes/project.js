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

router.get('/project', projectView);
router.get('/projectDelay', projectDelayView);

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

// API to list all challenges that belong to a project
router.get('/getAllProjectChallenges/:projId', async (req, res) => {
    if (!req.params.projId) {
        res.status(400).send("Invalid Project ID")
    } else {
        Challenge.find({
            $and: [{
                projectId: req.params.projId
            }]
        }).then((result) => {
            res.status(200).send(result)
        }).catch((err) => {
            console.log(err)
            res.status(500).send("Error Inserting Project")
        })
    }
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

// API to load challenge details using jquery
router.get('/loadChallenge/:id', async (req, res) => {
    if (!req.params.id) {
        res.status(400).send("Invalid Challenge ID")
    } else {
        Challenge.find({
            _id: req.params.id
        }).then((result) => {
            if (result.length == 0) {
                res.status(400).send("No such challenge found")
            } else {
                res.status(200).send(result[0])
            }
        }).catch((err) => {
            console.log(err)
            res.status(500).send("Error Loading Challenge")
        })
    }
})
module.exports = router;