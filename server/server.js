const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const server = require('http').Server(app)
const socket = require('socket.io')
const http =require('http')
const model = require('./model')
const Chat = model.getModel('chat')
const io = socket(server)

io.on('connection',(socket) => {
    socket.on('sendmsg',(data) => {
        const {from,to,msg} = data 
        console.log(data)
        const chatid = [from,to].sort().join('_')
        Chat.create({chatid,from,to,content:msg},(err,doc) => {
            io.emit('recvmsg',Object.assign({},doc._doc))
        })
        // io.emit('recvmsg',data)
    })
})



// 处理cookie
app.use(cookieParser())
// 处理post请求
app.use(bodyParser.json())

app.use('/',require('./user'))

server.listen(9093,() => {
    console.log('node app start at port 9093')
})