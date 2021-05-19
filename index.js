
var express = require('express'),
    bodyParser=require('body-parser'),
    mongoose = require('mongoose'),
    ejs=require('ejs'),
    app=express(),
    port = process.env.PORT || 3000;

var Question = require('./models/question.js')

mongoose.connect('mongodb://localhost:27017/isession',{
        useNewUrlParser:true,
        useCreateIndex:true,
        useUnifiedTopology:true,
        useFindAndModify:false
});


app.set('view engine','ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname+'/public'));
app.use(express.static(__dirname+'/views'));
app.use(bodyParser.urlencoded({extended:true}));

const db = mongoose.connection;
db.on('error',console.error.bind(console,"connection error"));
db.once('open',()=>{
    console.log('database Connected');
})

// var ques = new Question({  
//     text: 'What is an embedded System',
//     difficultyLevel: 'medium',
//     answers:[" An embedded system is a microprocessor based hardware system",
// " with software that is designed to perform a dedicated function, either as an independent system or as a part of hardware"]
// })

// ques.save();

app.get('/',(req,res)=>{
   // res.send('Working');
   res.render('index.html')
})

//first-route--> getting all the questions from the database
app.get('/questions' , function(req,res){

    Question.find() 
    .then(function(ques){
       res.json(ques)
    })
    .catch(function(error){
        res.send(error)
    })

})


//second route--> posting question to the database

//third route --> getting a random question from the databse

app.listen(3000,()=>{
    console.log('App is running at port 3000');
});


