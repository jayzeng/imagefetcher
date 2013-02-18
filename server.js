var fs = require('fs')
    , http = require('http')
    , port = process.env.PORT || 80
    , socketio = require('socket.io');

var server = http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-type': 'text/html'});
    res.end(fs.readFileSync(__dirname + '/index.html'));
}).listen(port, function() {
    console.log('Listening at: http://localhost:' + port);
});

socketio.listen(server).of('/image').on('connection', function (socket) {
    socket.on('image', function (msg) {
        console.log('Message Received: ', msg);
        socket.broadcast.emit('image', msg);
    });
});
