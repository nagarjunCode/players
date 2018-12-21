var express = require('express');
var cors = require('cors');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser')
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/playerlist');

mongoose.connection.on('connected',()=>{
    console.log('MongoDB connected @ 27017');
});

mongoose.connection.on('error',(err)=>{
    console.log("Error : "+err);
});

const port = 3000;
var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
// app.use('/api',app);
require('./routes/route')(app);

// app.use(express.static(path.join(__dirname,'public')));

// app.get('/',(req,res)=>{
//     res.send('Login Page');
// })

// app.post('/auth',(req,res)=>{ 
//     // app.handler(req, res)
// });  

app.listen(port,()=>{ //biding server to port
    console.log(`server started at ${port}`);
})