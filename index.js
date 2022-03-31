
var express = require('express');  
var app = express(); 
var middleware=require('./middleware');
var gm = require('./genfunction');
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/node_modules')); 
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
    console.log("User connected",msg)
    const fcmId='AAAAizgpiFw:APA91bHERatDh8Tm9WnoMvlxTofz0YXzWRCSOEG8nETyYt2sMeq1mrtQF6nzW3_lf1cMvyYqwj_nLEpxe_2Co7VVWNRPQN8K5iBz'; // Dummy fcmId (Device Id)
    const title = 'Chat';
    const notification='Chat Request';
    gm.pushNotification(fcmId, title, notification)
  });
});

app.use(middleware);

http.listen(port,()=>{
    console.log('listening on :' + port);
    })