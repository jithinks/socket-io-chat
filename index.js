var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
    //res.send('<h1>Hello Jack!!</h1>');
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
    console.log('a client connected');
    // socket.on('disconnect', function(){
    //     console.log('client disconnected');
    // });

    socket.on('chat message', function(msg){
        console.log('message: '+ msg);
        
        //to send an event to everyone, Socket.IO gives us the io.emit
        io.emit('chat message', msg);
    });
});

http.listen(2020, function(){
    console.log('listening on *:2020');
});

