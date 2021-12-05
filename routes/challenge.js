const express = require('express');
const {
    registerView
} = require('../controllers/loginController');
const router = express.Router();

var itemRouter = express.Router({
    strict: true,
});
router.use("/:challenge", itemRouter);

const projects = require("../models/project");
const challenges = require("../models/challenge");
const programs = require("../models/program");
const {
    response
} = require('express');

router.get('/challenge', registerView);

router.post('/uploadProgram', async (req, res) => {
    let commandList = req.body.commands

    programs.create({
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