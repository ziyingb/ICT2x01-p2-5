mongoose = require('mongoose')
const projectSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,

    projectName: {
        type: String
    },

    projectType: {
        type: String
    },
    projectDesc: {
        type: String
    }
}, {
    collection: 'Project'
});
module.exports = mongoose.model('Project', projectSchema)