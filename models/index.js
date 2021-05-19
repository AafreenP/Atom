var mongoose=require('mongoose');

mongoose.connect('mongodb://localhost:27017/isession',{
        useNewUrlParser:true,
        useCreateIndex:true,
        useUnifiedTopology:true,
        useFindAndModify:false
});

const db = mongoose.connection;
db.on('error',console.error.bind(console,"connection error"));
db.once('open',()=>{
    console.log('database Connected for Model Schema');
})

mongoose.Promise = Promise;
module.exports.Questions=require('./question');