mongoose = require('mongoose')
const programSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,

    wheelEncoder: {
        type: Number
    },
    IRLine: {
        type: Number
    },
    ultrasonic: {
        type: Number
    },
}, {
    collection: 'SensorData'
});

module.exports = mongoose.model('SensorData', programSchema)