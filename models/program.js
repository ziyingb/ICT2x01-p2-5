mongoose = require('mongoose')
const programSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,

    commands: {
        type: String
    }
}, {
    collection: 'Program'
});

module.exports = mongoose.model('Program', programSchema)