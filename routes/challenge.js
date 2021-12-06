const express = require('express');
const {
    Mongoose
} = require('mongoose');
const {
    registerView
} = require('../controllers/loginController');
const router = express.Router();

var itemRouter = express.Router({
    strict: true,
});

router.use("/:challenge", itemRouter);
const Challenge = require("../models/challenge")
const Programs = require("../models/program");
const {
    response
} = require('express');

router.get('/challenge', registerView);

router.post('/createChallenge/:projId', async (req, res) => {
    console.log(req.params.projId)
    if (!req.params.projId) {
        res.status(400).send("Invalid Project ID")
    } else {
        Challenge.create({
            _id: new mongoose.Types.ObjectId(),
            projectId: req.params.projId,
            challengeName: req.body.challengeName,
            challengeGuide: req.body.challengeGuide,
            challengeLimit: req.body.challengeLimit,
            start: req.body.start,
            end: req.body.end,
            blocks: req.body.blocks
        }).then((result) => {
            res.send(result)
        }).catch((err) => {
            console.log(err)
            res.status(500).send("Error Inserting Project")
        })
    }
})


router.get('/getProjectChallenges/:projId', async (req, res) => {
    // console.log(req.params.projId)
    if (!req.params.projId) {
        res.status(400).send("Invalid Project ID")
    } else {
        Challenge.find({
            $and: [{
                projectId: req.params.projId
            }]
        }).then((result) => {
            res.render('projectChallenge', {
                challenges: result
            })
        }).catch((err) => {
            console.log(err)
            res.status(500).send("Error Inserting Project")
        })
    }
})

router.get('/getOneChallenge/:id', async (req, res) => {
    Challenge.find({
        _id: req.params.id
    }).then((result) => {
        // res.send(result[0])
        res.render('challenge', {
            challenge: result[0]
        })
    }).catch((err) => {
        console.log(err)
        res.status(500).send("Error Inserting Project")
    })
})

router.get('/loadChallenge/:id', async (req, res) => {
    Challenge.find({
        _id: req.params.id
    }).then((result) => {
        res.send(result[0])
    }).catch((err) => {
        console.log(err)
        res.status(500).send("Error Inserting Project")
    })
})






//UPLOAD AND DOWNLOAD PROGRAM CAR
router.post('/uploadProgram', async (req, res) => {
    let commandList = req.body.commands

    Programs.create({
        _id: new mongoose.Types.ObjectId(),
        commands: commandList
    }).then((response) => {
        console.log(response)
        res.status(200).send("Success Upload Commands");
    }).catch((err) => {
        res.status(500).send("Internal Server Error");
    });
})

router.get('/downloadProgram', async (req, res) => {
    const prg = await programs.find({}).sort({
        _id: -1
    }).limit(1);
    console.log(prg)
    res.send(prg[0].commands)
})
module.exports = router;