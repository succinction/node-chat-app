const express = require('express')
const path = require('path')
const http = require('http');
//make sure you keep this order
var app = express();
var server = http.createServer(app);
var io = require('socket.io').listen(server);

var port = process.env.PORT || 3000

const publicPath = path.join(__dirname, '../public')

app.use(express.static(publicPath))

server.listen(port, () => {
    console.log('listening on port  ' + port)
});

io.on('connection', (socket) => {
    console.log('new ueser connected')
    socket.on('disconnect', () => {
        console.log('User was disconnected')

    })
})


// const express = require('express') 
// const path = require('path')
// const http = require('http')
// const socketIO = require('socket.io')

// const port = process.env.PORT || 3000

// const app = express()
// app.listen(port, () => {
//     console.log("App running on port " + port)
// })
// var server = http.createServer(app)
// var io = socketIO.listen(server)

// app.use(express.static(publicPath))







// console.log(__dirname + '/../public')
// console.log(publicPath)


