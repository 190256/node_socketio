//client.js

const url = '';

//HTMLが読まれてから実行: jQuery 独自
//$(() => {
$(function () {
    //Socket.io 接続
    let socket = io.connect(url);

    //接続が確立した
    socket.on('connect', () => {
        console.log('connection');
        console.log(socket.id);
    })

    //サーバから受信すると処理される
    //server_to_client は自分で命名: サーバにあわせる
    socket.on('server_to_client', (data) => {
        console.log(data);
        let p = $('<p>').html(data);
        $('#message').append(p);
    });

    //id = send の Element（要素）がクリックされたら
    //$('#send').on('click', () => {
    $('#send').on('click', function (event) {
        //クライアントからサーバにデータ送信
        let message = 'こんにちわ';
        //client_to_server は自分で命名: サーバにあわせる
        socket.emit('client_to_sesrver', message);
    });
});