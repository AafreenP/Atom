
var mongoose = require('mongoose');

var questionSchema = new mongoose.Schema({
    text:{
        type:String
    },

    difficultyLevel:{
        type:String,
        enum:['hard','medium','easy']
    },

    answers:[
        {
            type:String,
        }
    ]

})

var question = mongoose.model('Question',questionSchema);
module.exports = question;