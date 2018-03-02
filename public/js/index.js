$(document).ready(function() {
    var socket = io.connect(location.protocol + '//' + location.hostname + ':' + location.port);
    
    // 서버로부터 받기
    socket.on('hello', function (data) {
        alert(data.message);
    });

    $("#btnSend").click(function(){
        var message = $("#abc").val();
        socket.emit("abc", {
            message: message
        });
    });
})