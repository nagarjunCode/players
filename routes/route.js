// const express = require('express');
// const router = express.Router();
const Player = require('../models/players');
var jwt  = require('jsonwebtoken');
// var CronJob = require('cron').CronJob;

const secret = 'arjunpathy';
var expiresDefault = '3d';



// module.exports = router;

module.exports = function(app){

    function validateToken (req,next){
        var token = req.headers.authorization;
        // try {
            var decoded = jwt.verify(token, secret, function (err, decoded){
                if (err){
                    console.log(err);
                    req.authenticated = false;
                    req.decoded = null;
                } else {
                    req.decoded = decoded;
                    req.authenticated = true;
                }
            });
    }
    app.get('/api/players',(req,res,next)=>{
        // console.log(CronJob)
        Player.find((err,playerList)=>{
            res.json(playerList);
        });
    });
    
    app.post('/api/player',(req,res,next)=>{
        validateToken(req,next)
        if(req.authenticated){
        console.log("auth success")
        let newPlayer = new Player({
            player_id: req.body.player_id,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            role: req.body.role
        });
        newPlayer.save((err,player)=>{
            if(err) res.json({msg: err});
            else res.json({msg:'Player added successfully'});
        });
    }else{
        console.log("auth failed");
    }
    });
    
    app.delete('/api/player/:player_id',(req,res,next)=>{
        Player.deleteOne({
            player_id : req.params.player_id
        },(err)=>{
            if(err) res.json({msg:err});
            else res.json({msg:'Player deleted successfully'});
        })
    });
    
    app.post('/api/auth',(req,res,next)=>{
        console.log(req.body)
        let authToken = {isAuthorized:false};
        let uname = req.body.username;
        let pwd = req.body.password;
        if (uname === 'arjun' && pwd ==='arjun'){
    
            const token = jwt.sign({
                auth:  'magic',
                agent: req.headers['user-agent']
              }, secret, { expiresIn: expiresDefault });
    
            console.log(token);
    
            authToken = {
                token: token,
                user:uname,
                email:uname+'@gmail.com',
                isAuthorized:true
            }
        }
        res.json(authToken);
        });

}