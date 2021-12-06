const registerView = (req, res) => {
    res.render("register", {
    } );
}


const homeView = (req, res) => {

    res.render("home", {
    } );
}
module.exports =  {
    registerView,
    homeView
};