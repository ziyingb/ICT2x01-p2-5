//js

const registerView = (req, res) => {
    res.render("register", {
    } );
}

const loginView = (req, res) => {
    temp.getAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving customers.",
          });
        else res.render("login", { data
      });
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