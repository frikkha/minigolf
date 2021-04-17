const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create coffee-schema
const MinigolfSchema = new Schema ({
    Name: {
        type: String,
        required: true
    },
    Datet: {
        type: Date,
        required: true
    },
    Content: {
        type: Array,
        required: true
    },
    
});

module.exports = Minigolf =  mongoose.model('Minigof', MinigolfSchema);