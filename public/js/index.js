var socket = io()
socket.on('connect', function () {
    console.log("gained connection")
})

socket.on('disconnect', function () {
    console.log("disconnection")
})

socket.on('newMessage', function (message) {
    console.log("received new message:", message)
    var li = document.createElement('li')
    var txt = document.createTextNode(`${message.from}: ${message.text}`)
    li.appendChild(txt)
    document.getElementById('messages').appendChild(li)
})


document.getElementById("input_btn").onclick = (e) => {
    e.preventDefault()
    console.log('@# go clicked', document.getElementById('input_inp').value)
    socket.emit('createMessage', {
        from: 'User',
        text: document.getElementById('input_inp').value
    }, function () { // acknowledgement
    })
}

var locationButton = document.getElementById('send_loc_btn')
locationButton.onclick = (e) => {
    if (!navigator.geolocation) {
        return alert('Geolocatoin not supported by your browser')
    }

    navigator.geolocation.getCurrentPosition((position) => {
        console.log(position)
    }, () => {
        alert('Unable to fetch locatoin.')
    })

}
let, usanother.
again@again








let, usanother.
let, usanother.

// socket.emit('createMessage', {
//     from: 'Frank',
//     text: 'Hi'
// }, function (data) {
//     console.log('got it', data)
// })