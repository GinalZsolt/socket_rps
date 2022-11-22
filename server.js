const express = require('express')
const app = express()
const ejs=require('ejs')
const session = require('express-session');
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const { userJoin, userLeave, getCurrentUser, getRoomUsers } = require('./utils/userops.js');


app.use(express.urlencoded({ extended: true }))
app.use(express.static('assets'));

io.on('connection',(socket)=>{

    socket.on('join',()=>{
        const user = userJoin(socket.id, session.userName, session.roomName);

        socket.join(user.room);

        

    })


})

app.get('/', (req, res) => {
    ejs.renderFile('views/index.ejs', (err, data) => {
        res.send(data);
    })
})

app.get('/jacci', (req, res) => {
    ejs.renderFile('views/jacci.ejs', (err, data) => {
        if (err) throw err;
            res.send(data);
    })
})


app.post('/jacci', (req, res) => {
    let user = {
        nickname: req.body.nickname,
        roomname: req.body.roomname
    }
    
    if (user.nickname == '' || user.roomname == '') {
        res.redirect('/');
    } else {
        session.userName = user.nickname;
        session.roomName = user.roomname;
        ejs.renderFile('views/jacci.ejs', { user }, (err, data) => {
            if (err) throw err;
            res.send(data);
        })
    }
    
    ejs.renderFile('views/jacci.ejs', (err, data) => {
        res.send(data);
    })
})

server.listen(3001,()=>{
    console.log("Listening...")
})