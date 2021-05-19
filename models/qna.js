var mongoose = require ('mongoose');
var Question = require('./question');
var Session = require('./session');

var qnaSchema= new mongoose.Schema({    

    sessionId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Session'
    },

    questionId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Question'
    },

    userAnswer:{
        type:String
    },

    SimilarityIndex:{
        type:Number
    },
    
    facialEvaluation:[
        {
            expression:String,
            value:Number
        }
    ],
    
    dominantExp:{
        type:String
    }  
})
        
var qna = mongoose.model('QNA',qnaSchema);
module.exports = qna;