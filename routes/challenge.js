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

// API to create challenge
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
            res.status(200).send(result)
        }).catch((err) => {
            console.log(err)
            res.status(500).send("Error Inserting Project Into DB")
        })
    }
})

// API to list all challenges that belong to a project
router.get('/getProjectChallenges/:projId', async (req, res) => {
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

// API to get one challenge details
router.get('/getOneChallenge/:id', async (req, res) => {
    if (!req.params.id) {
        res.status(400).send("Invalid Challenge ID")
    } else {
        Challenge.find({
            _id: req.params.id
        }).then((result) => {


            res.render('challenge', {
                challenge: result[0]
            })

        }).catch((err) => {
            console.log(err)
            res.status(500).send("Error Retrieving Challenge")
        })
    }
})

// API to get one challenge details
router.get('/getOneChallenge/:id', async (req, res) => {
    console.log("HIT")
    if (req.params.id = "61ad374602cd9adaff116ab1") {
        res.render('challenge', {})
    } else if (req.params.id = "61ad38b7fff601bc97c3f557") {
        res.render('challenge', {})
    } else if (req.params.id = "61ae4ce787b3a5ccfd680a8f") {
        console.log("MOTOR CHALLENGE")
        res.render('motor', {})
    } else if (req.params.id = "61ae4da087b3a5ccfd680a92") {
        console.log("LOOP CHALLENGE")
        res.render('loop', {})
    } else if (req.params.id = "61ae4db687b3a5ccfd680a94") {
        console.log("IFELSE CHALLENGE")
        res.render('ifelse', {})    
    } else {
        res.render('home',{})
    }
    // if (!req.params.id) {
    //     res.status(400).send("Invalid Challenge ID")
    // } else {
    //     Challenge.find({
    //         _id: req.params.id
    //     }).then((result) => {


    // res.render('challenge', {
    //     challenge: result[0]
    // })

    //     }).catch((err) => {
    //         console.log(err)
    //         res.status(500).send("Error Retrieving Challenge")
    //     })
    // }
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


//UPLOAD PROGRAM FOR CAR
router.post('/uploadProgram', async (req, res) => {
    let commandList = req.body.commands
    if (!commandList || typeof commandList != 'string') {
        res.status(400).send("Invalid Commands");
    } else {
        Programs.create({
            _id: new mongoose.Types.ObjectId(),
            commands: commandList
        }).then((response) => {
            console.log(response)
            res.status(200).send("Success Upload Commands");
        }).catch((err) => {
            res.status(500).send("Internal Server Error");
        });
    }
})

//DOWNLOAD PROGRAM FOR CAR
router.get('/downloadProgram', async (req, res) => {
    Programs.find({}).sort({
        _id: -1
    }).limit(1).then((prg) => {
        res.status(200).send(prg[0].commands)
    }).catch((err) => {
        res.status(500).send("Internal Server Error");
    });
})
module.exports = router;