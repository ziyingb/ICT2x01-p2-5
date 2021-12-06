
//js
const registerView = (req, res) => {
    res.render("register", {
    } );
}

const loginView = (req, res) => {

    res.render("login", {
    } );
}

const homeView = (req, res) => {

    res.render("home", {
    } );
}
module.exports =  {
    registerView,
    loginView,
    homeView
};