const tutorial = (req, res) => {
    res.render("tutorial", {});
}


const delayChallenge = (req, res) => {

    res.render("delay", {});
}

const motorChallenge = (req, res) => {

    res.render("motor", {});
}

const ifelseChallenge = (req, res) => {

    res.render("ifelse", {});
}

const loopChallenge = (req, res) => {

    res.render("loop", {});
}
module.exports = {
    loopChallenge,
    ifelseChallenge,
    motorChallenge,
    delayChallenge,
    tutorial
};