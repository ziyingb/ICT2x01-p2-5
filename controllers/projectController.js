const projectView = (req, res) => {
    res.render("project", {
    } );
}

const projectDelayView = (req, res) => {
    res.render("projectDelay", {
    } );
}


module.exports =  {
    projectView,
    projectDelayView
};