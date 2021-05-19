// session{
//     session_id:ObjectId,
//     questionAnswer:[
//     {
//         questionid:ObjectId,
//         useranswer:String,
//         SimilarityIndex:percentage,
//         facialEvaluation:[arry of percentages],
//         dominantExpression:String
//     }],
//     OverallFacialEvaluation: [array of percentages],
//     dominantExpression:String,
//     performance : Integer
// }
// QNA:[
//     {
//         questionId:{
//             type:mongoose.Schema.Types.ObjectId,
//             ref:'Question'
//         },
//         userAnswer:{
//             type:String
//         },
//         SimilarityIndex:Number,
//         facialEvaluation:[
//             {
//                 expression:String,
//                 value:Number
//             }
//         ],
//         dominantExp:{
//             type:String
//         }   
//     }
// ],

var mongoose = require ('mongoose');
var Question=require('./question');
var QNA = require('./qna');
var sessionSchema = new mongoose.Schema({

    queries:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'QNA'
        }
    ],
    OverallExp:[
        {
            expression:String,
            value:Number
        }
    ],
    dominantExp:{
        type:String
    },
    performance:{
        type:Number
    }

})

var session = mongoose.model('Session',sessionSchema);
module.exports = session;