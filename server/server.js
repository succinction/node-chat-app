const express = require('express')
const path = require('path')
const http = require('http');
const socketIO = require('socket.io')

const { generateMessage } = require('./utils/message')
const publicPath = path.join(__dirname, '../public')
var port = process.env.PORT || 3033
var app = express();
var server = http.createServer(app);
var io = socketIO(server)  

app.use(express.static(publicPath))

io.on('connection', (socket) => {
    console.log('new user connected')

    socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app'))

    socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user joined'))

    socket.on('createMessage', (message, callback) => {
        console.log('createMessage : ', message)
        io.emit('newMessage', generateMessage(message.from, message.text))
        callback('This is from the server.');
    })

    socket.on('disconnect', () => {
        console.log('User was disconnected')
    })
})

server.listen(port, () => {
    console.log(`Server is up on ${port}`);
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
// server.listen(port, () => {
//     console.log('listening on port  ' + port)
// });

