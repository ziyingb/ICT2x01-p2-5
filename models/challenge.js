mongoose = require('mongoose')
const challengeSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    
    projectId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Project"
    },

    challengeName: {
        type: String
    },

    challengeGuide: {
        type: String
    },
    
    challengeLimit: {
        type: Number
    },
    start:{
        type: Number
    },
    end:{
        type: Number
    },
    blocks: {
        type: [{type:String}]
    }
    
}, {
    collection: 'Challenge'
});
module.exports = mongoose.model('Challenge', challengeSchema)