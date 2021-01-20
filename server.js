const express = require('express')
const app = express()

const http = require('http').createServer(app)
//Socket.io を準備
const io = require('socket.io')(http)

//public フォルダーのファイルのアクセスを許可する
app.use(express.static(__dirname + '/public'))

//クライアント接続処理
io.on('connection', (socket) => {
    console.log('connection');
    
    //クライアントからサーバに「client_to_server」で送信されたとき
    socket.on('client_to_sesrver', (data) => {
        console.log(data);
        //すべてのクライアントにデータ送信
        io.emit('server_to_client', data);
    })

})
http.listen(3000);
console.log('http://localhost:3000');