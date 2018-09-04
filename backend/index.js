const app = require('./app');
const socket = require('socket.io');
const http = require('http').Server(app);
const io = require('socket.io')(http);
http.listen(app.get('port'), function(){
  console.log('listening on : ', app.get('port'));
});


io.on('connection', (socket) => {
  console.log(socket.id);
  socket.on('SEND_MESSAGE', function (data) {
    console.log(data);
    io.emit('RECEIVE_MESSAGE', data);
  })
});
